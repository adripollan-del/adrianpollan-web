import { NextResponse } from "next/server";
import { subscribeToList } from "@/lib/mailchimp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const listId = process.env.MAILCHIMP_LIBRO_LIST_ID;
  if (!listId) {
    return NextResponse.json(
      { error: "Servicio no configurado." },
      { status: 500 }
    );
  }

  let email: unknown;
  try {
    const body = (await req.json()) as { email?: unknown };
    email = body.email;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
  }

  const result = await subscribeToList(email, listId);
  if (result.ok) return NextResponse.json({ ok: true });

  return NextResponse.json({ error: result.error }, { status: result.code });
}
