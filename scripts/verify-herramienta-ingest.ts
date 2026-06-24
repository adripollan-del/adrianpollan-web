#!/usr/bin/env npx tsx
/**
 * Verifica que /api/herramientas/email dispara el webhook de leads-crm via after().
 *
 * Requisitos (server corriendo en otra terminal):
 *   ENABLE_TEST_ROUTES=true \
 *   INGEST_URL=http://localhost:3000/api/test/crm-ok-stub \
 *   INGEST_SECRET=test-secret \
 *   npx next dev
 *
 * Caso 3 (ruta lenta) requiere además: HERRAMIENTA_DELAY_MS=3000
 *
 * Uso:
 *   npx tsx scripts/verify-herramienta-ingest.ts
 */

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const STUB_URL = `${BASE}/api/test/crm-ok-stub`;
const HERRAMIENTA_URL = `${BASE}/api/herramientas/email`;

async function resetStub(): Promise<void> {
  const r = await fetch(STUB_URL, { method: "DELETE" });
  if (!r.ok) throw new Error(`stub reset respondió ${r.status}`);
}

async function getCallCount(): Promise<number> {
  const r = await fetch(STUB_URL);
  if (!r.ok) throw new Error(`stub GET respondió ${r.status}`);
  const body = (await r.json()) as { callCount: number };
  return body.callCount;
}

async function postHerramienta(payload: Record<string, unknown>): Promise<Response> {
  return fetch(HERRAMIENTA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

const primeCostBase = {
  tool: "prime-cost",
  data: { foodCost: 28.5, labourCost: 33.2, primeCost: 61.7, level: "Aceptable" },
};

async function case1Normal(): Promise<void> {
  console.log("\n=== Caso 1: Flujo normal (prime-cost) ===");
  await resetStub();

  const r = await postHerramienta({ ...primeCostBase, email: `test-${Date.now()}@verificacion.test` });
  if (!r.ok) throw new Error(`endpoint respondió ${r.status}: ${await r.text()}`);

  await new Promise((res) => setTimeout(res, 1200));

  const count = await getCallCount();
  if (count !== 1) throw new Error(`Esperaba 1 llamada al CRM, recibí ${count}`);
  console.log("✓ Webhook CRM disparado (1 llamada, prime-cost con responses)");
}

async function case2DobleEnvio(): Promise<void> {
  console.log("\n=== Caso 2: Doble envío — dos external_id distintos ===");
  await resetStub();

  const email = `doble-${Date.now()}@verificacion.test`;
  const [r1, r2] = await Promise.all([
    postHerramienta({ ...primeCostBase, email }),
    postHerramienta({ tool: "checklist-apertura", data: { completed: 18, total: 24, level: "Buena preparación" }, email }),
  ]);

  if (!r1.ok) throw new Error(`primera llamada respondió ${r1.status}`);
  if (!r2.ok) throw new Error(`segunda llamada respondió ${r2.status}`);

  await new Promise((res) => setTimeout(res, 1200));

  const count = await getCallCount();
  if (count !== 2) throw new Error(`Esperaba 2 llamadas (una por envío), recibí ${count}`);
  console.log("✓ Ambas herramientas generaron entrada en CRM (2 llamadas, external_id distinto cada una)");
}

async function case3RutaLenta(): Promise<void> {
  console.log("\n=== Caso 3: Ruta lenta — after() no bloqueado por HERRAMIENTA_DELAY_MS ===");
  await resetStub();

  const start = Date.now();
  const r = await postHerramienta({ ...primeCostBase, email: `lenta-${Date.now()}@verificacion.test` });
  const elapsed = Date.now() - start;

  if (!r.ok) throw new Error(`endpoint respondió ${r.status}`);

  const delayMs = Number(process.env.HERRAMIENTA_DELAY_MS ?? 3000);
  if (elapsed >= delayMs) {
    throw new Error(`La respuesta tardó ${elapsed}ms — debería retornar antes del delay (${delayMs}ms)`);
  }

  // Esperamos delay + margen para que after() complete
  await new Promise((res) => setTimeout(res, delayMs + 2000));

  const count = await getCallCount();
  if (count !== 1) throw new Error(`Esperaba 1 llamada tras el delay, recibí ${count}`);
  console.log(`✓ Respuesta en ${elapsed}ms (< ${delayMs}ms), after() disparó webhook igualmente`);
}

async function main(): Promise<void> {
  console.log(`Verificando herramienta-ingest contra ${BASE}`);

  const stubCheck = await fetch(STUB_URL).catch(() => null);
  if (!stubCheck?.ok) {
    console.error(
      "\nERROR: CRM stub no disponible. Arranca el servidor con:\n" +
      "  ENABLE_TEST_ROUTES=true INGEST_URL=http://localhost:3000/api/test/crm-ok-stub INGEST_SECRET=test-secret npx next dev"
    );
    process.exit(1);
  }

  let failed = 0;

  for (const [name, fn] of [
    ["case1Normal", case1Normal],
    ["case2DobleEnvio", case2DobleEnvio],
  ] as [string, () => Promise<void>][]) {
    try {
      await fn();
    } catch (err) {
      console.error(`✗ ${name}:`, err);
      failed++;
    }
  }

  if (process.env.HERRAMIENTA_DELAY_MS) {
    try {
      await case3RutaLenta();
    } catch (err) {
      console.error("✗ case3RutaLenta:", err);
      failed++;
    }
  } else {
    console.log(
      "\n⚠  Caso 3 omitido — reinicia el servidor con HERRAMIENTA_DELAY_MS=3000 para ejecutarlo"
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
