#!/usr/bin/env npx tsx
/**
 * Verifica que /api/lemon/webhook dispara el webhook de leads-crm via after().
 *
 * Requisitos (server corriendo en otra terminal):
 *   ENABLE_TEST_ROUTES=true \
 *   INGEST_URL=https://leads.adrianpollan.com/api/ingest \
 *   INGEST_SECRET=<prod ingest secret> \
 *   LEMONSQUEEZY_SIGNING_SECRET=test-lemon-secret \
 *   npx next dev
 *
 * Caso 3 (ruta lenta) requiere además: LEMON_DELAY_MS=3000
 *
 * Uso:
 *   DATABASE_URL=<neon connection string> \
 *   LEMONSQUEEZY_SIGNING_SECRET=test-lemon-secret \
 *   npx tsx scripts/verify-lemon-ingest.ts
 */

import { createHmac } from "crypto";
import { neon } from "@neondatabase/serverless";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const WEBHOOK_URL = `${BASE}/api/lemon/webhook`;
const SIGNING_SECRET = process.env.LEMONSQUEEZY_SIGNING_SECRET ?? "test-lemon-secret";
const DATABASE_URL = process.env.DATABASE_URL ?? "";

// Valid product ID from PRODUCT_TAG_MAP in the webhook
const TEST_PRODUCT_ID = 1105907;
const TEST_PRODUCT_NAME = "Plantilla de Inventario";
const TEST_TOTAL_CENTS = 1990; // €19.90
const TEST_CREATED_AT = new Date().toISOString();

const ts = Date.now();
const NORMAL_ORDER_ID = `test-${ts}`;
const SLOW_ORDER_ID = `test-slow-${ts}`;
const TEST_EMAIL = `lemon-verify-${ts}@verificacion.test`;

let sql: ReturnType<typeof neon>;

function sign(body: string): string {
  return createHmac("sha256", SIGNING_SECRET).update(body).digest("hex");
}

function buildPayload(orderId: string): object {
  return {
    meta: { event_name: "order_created" },
    data: {
      id: orderId,
      attributes: {
        user_email: TEST_EMAIL,
        total: TEST_TOTAL_CENTS,
        created_at: TEST_CREATED_AT,
        first_order_item: {
          product_id: TEST_PRODUCT_ID,
          product_name: TEST_PRODUCT_NAME,
        },
      },
    },
  };
}

async function postWebhook(orderId: string): Promise<Response> {
  const body = JSON.stringify(buildPayload(orderId));
  return fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Signature": sign(body),
    },
    body,
  });
}

async function getPurchaseRows(externalId: string): Promise<Record<string, unknown>[]> {
  const rows = await sql`
    SELECT lp.type, lp.product, lp.value::float AS value, lp.occurred_at
    FROM lead_purchases lp
    JOIN leads l ON l.id = lp.lead_id
    WHERE l.external_id = ${externalId}
    ORDER BY lp.created_at
  `;
  return rows as Record<string, unknown>[];
}

async function cleanupLead(externalId: string): Promise<void> {
  await sql`DELETE FROM leads WHERE external_id = ${externalId}`;
}

async function case1Normal(): Promise<void> {
  console.log("\n=== Caso 1: Compra normal → 1 entrada en lead_purchases con value correcto ===");

  const r = await postWebhook(NORMAL_ORDER_ID);
  if (!r.ok) throw new Error(`webhook respondió ${r.status}: ${await r.text()}`);
  console.log(`  POST /api/lemon/webhook → ${r.status}`);

  await new Promise((res) => setTimeout(res, 3500));

  const rows = await getPurchaseRows(`lemon-${NORMAL_ORDER_ID}`);

  if (rows.length !== 1) {
    throw new Error(`Esperaba 1 fila en lead_purchases, encontré ${rows.length}`);
  }

  const row = rows[0];
  const expectedValue = TEST_TOTAL_CENTS / 100; // 19.90

  if (row.type !== "curso") throw new Error(`type esperado 'curso', recibí '${row.type}'`);
  if (row.product !== TEST_PRODUCT_NAME) throw new Error(`product esperado '${TEST_PRODUCT_NAME}', recibí '${row.product}'`);
  if (Math.abs((row.value as number) - expectedValue) > 0.001) {
    throw new Error(`value esperado ${expectedValue}, recibí ${row.value}`);
  }

  console.log(`✓ 1 fila en lead_purchases — type=${row.type}, product=${row.product}, value=${row.value}`);
}

async function case2Reintento(): Promise<void> {
  console.log("\n=== Caso 2: Mismo pedido procesado dos veces → sigue siendo 1 entrada, no 2 ===");

  // Mismo order_id que caso 1 → mismo external_id → upsert en leads, dedup en lead_purchases
  const r = await postWebhook(NORMAL_ORDER_ID);
  if (!r.ok) throw new Error(`webhook respondió ${r.status}: ${await r.text()}`);
  console.log(`  POST /api/lemon/webhook (reintento) → ${r.status}`);

  await new Promise((res) => setTimeout(res, 3500));

  const rows = await getPurchaseRows(`lemon-${NORMAL_ORDER_ID}`);

  if (rows.length !== 1) {
    throw new Error(`Esperaba 1 fila tras reintento, encontré ${rows.length} (duplicado detectado)`);
  }

  console.log(`✓ Sigue siendo 1 fila en lead_purchases tras reintento — dedup correcto`);
}

async function case3RutaLenta(): Promise<void> {
  console.log("\n=== Caso 3: Ruta lenta → after() dispara igual ===");

  const delayMs = Number(process.env.LEMON_DELAY_MS ?? 3000);
  const start = Date.now();
  const r = await postWebhook(SLOW_ORDER_ID);
  const elapsed = Date.now() - start;

  if (!r.ok) throw new Error(`webhook respondió ${r.status}: ${await r.text()}`);

  if (elapsed < delayMs) {
    throw new Error(`Respuesta en ${elapsed}ms — esperaba ≥ ${delayMs}ms (LEMON_DELAY_MS activo)`);
  }

  // after() se ejecuta tras la respuesta, damos margen para que complete
  await new Promise((res) => setTimeout(res, 3500));

  const rows = await getPurchaseRows(`lemon-${SLOW_ORDER_ID}`);

  if (rows.length !== 1) {
    throw new Error(`Esperaba 1 fila tras handler lento, encontré ${rows.length}`);
  }

  console.log(`✓ Handler lento (${elapsed}ms ≥ ${delayMs}ms) — after() disparó y lead_purchases tiene 1 fila`);
}

async function main(): Promise<void> {
  if (!DATABASE_URL) {
    console.error("\nERROR: DATABASE_URL no configurado. Ejecución:\n  DATABASE_URL=<neon url> LEMONSQUEEZY_SIGNING_SECRET=test-lemon-secret npx tsx scripts/verify-lemon-ingest.ts");
    process.exit(1);
  }

  sql = neon(DATABASE_URL);

  console.log(`Verificando lemon-ingest contra ${BASE}`);

  // Just check the server responds at all (GET returns 405 on POST-only routes, not a connection error)
  const serverCheck = await fetch(`${BASE}/`).catch(() => null);
  if (!serverCheck) {
    console.error(
      "\nERROR: Servidor no disponible. Arranca con:\n" +
      "  ENABLE_TEST_ROUTES=true INGEST_URL=https://leads.adrianpollan.com/api/ingest INGEST_SECRET=<secret> LEMONSQUEEZY_SIGNING_SECRET=test-lemon-secret npx next dev"
    );
    process.exit(1);
  }

  let failed = 0;

  for (const [name, fn] of [
    ["case1Normal", case1Normal],
    ["case2Reintento", case2Reintento],
  ] as [string, () => Promise<void>][]) {
    try {
      await fn();
    } catch (err) {
      console.error(`✗ ${name}:`, err);
      failed++;
    }
  }

  // Limpieza datos de casos 1 y 2
  await cleanupLead(`lemon-${NORMAL_ORDER_ID}`).catch((e) =>
    console.warn("[cleanup] error borrando lead normal:", e)
  );
  console.log(`\n  [cleanup] lead lemon-${NORMAL_ORDER_ID} eliminado de producción`);

  if (process.env.LEMON_DELAY_MS) {
    try {
      await case3RutaLenta();
    } catch (err) {
      console.error("✗ case3RutaLenta:", err);
      failed++;
    }
    await cleanupLead(`lemon-${SLOW_ORDER_ID}`).catch((e) =>
      console.warn("[cleanup] error borrando lead lento:", e)
    );
    console.log(`  [cleanup] lead lemon-${SLOW_ORDER_ID} eliminado de producción`);
  } else {
    console.log(
      "\n⚠  Caso 3 omitido — reinicia el servidor con LEMON_DELAY_MS=3000 para ejecutarlo"
    );
  }

  if (failed > 0) {
    console.error(`\n${failed} caso(s) fallaron.`);
    process.exit(1);
  }

  console.log("\n✓ Todos los casos completados.");
}

main().catch((err) => {
  console.error("Error inesperado:", err);
  process.exit(1);
});
