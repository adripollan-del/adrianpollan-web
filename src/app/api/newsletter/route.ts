import { NextResponse, after } from "next/server";
import { subscribeToList } from "@/lib/mailchimp";
import { checkLeadLimit, getIP } from "@/lib/rate-limit";
import { fireNewsletterIngest } from "@/lib/ingest";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 10_000;

export async function POST(req: Request) {
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  const listId = process.env.MAILCHIMP_NEWSLETTER_LIST_ID;
  if (!listId) {
    return NextResponse.json(
      { error: "Servicio no configurado." },
      { status: 500 }
    );
  }

  // Rate limit (fail-open)
  const ip = getIP(req);
  const { allowed } = await checkLeadLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiados intentos. Inténtalo más tarde." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { email, _hp, _ts } = body as Record<string, string>;

  // Honeypot
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Timing
  if (_ts && Date.now() - parseInt(_ts, 10) < 2000) {
    return NextResponse.json({ ok: true });
  }

  console.log("[newsletter] email=", JSON.stringify(email), "type=", typeof email, "re=", EMAIL_RE.test(typeof email === "string" ? email : ""), "body_keys=", Object.keys(body).join(","));
  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
  }

  // after() debe recibir una Promise explícita — sin retornarla, Vercel congela
  // la función antes de que el fetch interno complete (bug confirmado 2026-06-23).
  const result = process.env.ENABLE_TEST_ROUTES === "true"
    ? ({ ok: true } as const)
    : await subscribeToList(email, listId);

  if (!result.ok && result.code !== 409) {
    return NextResponse.json({ error: result.error }, { status: result.code });
  }

  // Test mode: simula handler lento antes de que after() se registre
  if (process.env.ENABLE_TEST_ROUTES === "true" && process.env.NEWSLETTER_DELAY_MS) {
    await new Promise<void>((r) => setTimeout(r, Number(process.env.NEWSLETTER_DELAY_MS)));
  }

  if (result.ok) {
    after(() => fireNewsletterIngest({ email, createdAt: new Date().toISOString() }));
  }
  return NextResponse.json({ ok: true });
}
