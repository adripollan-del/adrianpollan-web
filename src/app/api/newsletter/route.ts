import { NextResponse } from "next/server";
import { Resend } from "resend";
import { subscribeToList } from "@/lib/mailchimp";
import { SEQUENCE } from "@/lib/newsletter-emails";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);

function scheduledAt(delayDays: number): string | undefined {
  if (delayDays === 0) return undefined;
  const d = new Date();
  d.setDate(d.getDate() + delayDays);
  return d.toISOString();
}

export async function POST(req: Request) {
  const listId = process.env.MAILCHIMP_NEWSLETTER_LIST_ID;
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

  // Add to Mailchimp audience (409 = already subscribed, still send welcome email)
  const result = await subscribeToList(email, listId);
  if (!result.ok && result.code !== 409) {
    return NextResponse.json({ error: result.error }, { status: result.code });
  }

  console.log("[newsletter] RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

  // Send welcome sequence (email 1 now, emails 2+3 scheduled via Resend)
  const sendResults = await Promise.allSettled(
    SEQUENCE.map(({ subject, html, delayDays }) =>
      resend.emails.send({
        from: "Adrián Pollán <noreply@adrianpollan.com>",
        to: email as string,
        subject,
        html: html(),
        ...(delayDays > 0 && { scheduledAt: scheduledAt(delayDays) }),
      })
    )
  );

  sendResults.forEach((r, i) => {
    const step = SEQUENCE[i];
    if (r.status === "fulfilled") {
      console.log(`[newsletter] email step ${step.delayDays}d →`, JSON.stringify(r.value));
    } else {
      console.error(`[newsletter] email step ${step.delayDays}d FAILED:`, r.reason);
    }
  });

  return NextResponse.json({ ok: true });
}
