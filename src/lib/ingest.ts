const INGEST_URL =
  process.env.INGEST_URL ?? "https://leads.adrianpollan.com/api/ingest";
const TIMEOUT_MS = 3000;

type IngestResponse = { section: string; question: string; answer: string };

function buildHerramientaResponses(
  tool: string,
  data: Record<string, unknown>
): IngestResponse[] {
  const toolNames: Record<string, string> = {
    "escandallo": "Calculadora de escandallo",
    "prime-cost": "Calculadora Prime Cost",
    "checklist-apertura": "Checklist de apertura",
    "checklist-food-cost": "Checklist de control de food cost",
    "auditoria-proveedores": "Auditoría de proveedores",
  };

  const responses: IngestResponse[] = [
    { section: "Herramienta", question: "Herramienta usada", answer: toolNames[tool] ?? tool },
  ];

  if (tool === "prime-cost") {
    if (data.foodCost !== undefined)
      responses.push({ section: "Prime Cost", question: "Food Cost", answer: `${Number(data.foodCost).toFixed(1)}%` });
    if (data.labourCost !== undefined)
      responses.push({ section: "Prime Cost", question: "Labour Cost", answer: `${Number(data.labourCost).toFixed(1)}%` });
    if (data.primeCost !== undefined)
      responses.push({ section: "Prime Cost", question: "Prime Cost", answer: `${Number(data.primeCost).toFixed(1)}%` });
    if (data.level !== undefined)
      responses.push({ section: "Prime Cost", question: "Valoración", answer: String(data.level) });
  }

  if (tool === "escandallo") {
    const dishes = Array.isArray(data.dishes) ? data.dishes : [];
    responses.push({ section: "Escandallo", question: "Platos calculados", answer: String(dishes.length) });
    for (const dish of dishes.slice(0, 10)) {
      if (dish && typeof dish === "object" && "name" in dish) {
        const d = dish as Record<string, unknown>;
        responses.push({
          section: "Escandallo",
          question: String(d.name),
          answer: `Food cost: ${Number(d.foodCostPct ?? 0).toFixed(0)}%, PVP: €${Number(d.recPrice ?? 0).toFixed(2)}`,
        });
      }
    }
  }

  if (tool === "checklist-apertura" || tool === "checklist-food-cost" || tool === "auditoria-proveedores") {
    const completed = data.completed !== undefined ? Number(data.completed) : 0;
    const total = data.total !== undefined ? Number(data.total) : 0;
    responses.push({ section: "Resultado", question: "Puntos completados", answer: `${completed}/${total}` });
    if (data.level !== undefined)
      responses.push({ section: "Resultado", question: "Nivel", answer: String(data.level) });
  }

  return responses;
}

export async function fireHerramientaIngest(args: {
  email: string;
  tool: string;
  toolData: Record<string, unknown>;
  createdAt: string;
}): Promise<void> {
  const secret = process.env.INGEST_SECRET;
  if (!secret) {
    console.warn("[ingest] INGEST_SECRET no configurado — webhook omitido");
    return;
  }

  const payload = {
    external_id: `herramienta-${crypto.randomUUID()}`,
    source: "herramienta",
    email: args.email,
    created_at: args.createdAt,
    responses: buildHerramientaResponses(args.tool, args.toolData),
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Ingest-Secret": secret,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`[ingest] webhook respondió ${res.status} — no bloquea el flujo`);
    } else {
      console.log("[ingest] webhook OK");
    }
  } catch (err) {
    console.error("[ingest] webhook falló (no bloquea el flujo):", err);
  } finally {
    clearTimeout(timer);
  }
}

export async function fireLemonIngest(args: {
  orderId: string;
  email: string;
  productName: string;
  priceEuros: number;
  createdAt: string;
}): Promise<void> {
  const secret = process.env.INGEST_SECRET;
  if (!secret) {
    console.warn("[ingest] INGEST_SECRET no configurado — webhook omitido");
    return;
  }

  const payload = {
    external_id: `lemon-${args.orderId}`,
    source: "plantilla",
    email: args.email,
    business_name: null,
    course_product: args.productName,
    course_value: args.priceEuros,
    course_purchased_at: args.createdAt,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Ingest-Secret": secret,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`[ingest] lemon webhook respondió ${res.status} — no bloquea el flujo`);
    } else {
      console.log("[ingest] lemon webhook OK");
    }
  } catch (err) {
    console.error("[ingest] lemon webhook falló (no bloquea el flujo):", err);
  } finally {
    clearTimeout(timer);
  }
}

export async function fireNewsletterIngest(args: {
  email: string;
  createdAt: string;
}): Promise<void> {
  const secret = process.env.INGEST_SECRET;
  if (!secret) {
    console.warn("[ingest] INGEST_SECRET no configurado — webhook omitido");
    return;
  }

  const payload = {
    external_id: `newsletter-${crypto.randomUUID()}`,
    source: "newsletter",
    email: args.email,
    created_at: args.createdAt,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(INGEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Ingest-Secret": secret,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`[ingest] webhook respondió ${res.status} — no bloquea el flujo`);
    } else {
      console.log("[ingest] webhook OK");
    }
  } catch (err) {
    console.error("[ingest] webhook falló (no bloquea el flujo):", err);
  } finally {
    clearTimeout(timer);
  }
}
