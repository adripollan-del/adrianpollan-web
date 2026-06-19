import { NextResponse } from "next/server";
import { subscribeToList } from "@/lib/mailchimp";
import { checkLeadLimit, getIP } from "@/lib/rate-limit";

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

  if (typeof email !== "string" || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
  }

  const result = await subscribeToList(email, listId);
  if (!result.ok && result.code !== 409) {
    return NextResponse.json({ error: result.error }, { status: result.code });
  }

  return NextResponse.json({ ok: true });
}
