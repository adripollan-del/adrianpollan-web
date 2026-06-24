const INGEST_URL =
  process.env.INGEST_URL ?? "https://leads.adrianpollan.com/api/ingest";
const TIMEOUT_MS = 3000;

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
