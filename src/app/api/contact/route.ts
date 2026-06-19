import { Resend } from "resend";
import { NextResponse } from "next/server";
import { checkLeadLimit, getIP } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 10_000;
const MAX_FIELD_LEN = { name: 120, email: 254, business: 200, message: 4000 };

export async function POST(req: Request) {
  // Tamaño de payload antes de parsear
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  // Rate limit (fail-open: leads reales no se bloquean por un hipo de Redis)
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
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { name, email, business, message, _hp, _ts } = body as Record<string, string>;

  // Honeypot: si viene relleno, fingir éxito sin enviar
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Timing: envío sospechosamente rápido (< 2 s desde renderizado del formulario)
  if (_ts && Date.now() - parseInt(_ts, 10) < 2000) {
    return NextResponse.json({ ok: true });
  }

  // Validación de campos obligatorios, formato email y longitudes
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_RE.test(email) ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (
    name.length > MAX_FIELD_LEN.name ||
    email.length > MAX_FIELD_LEN.email ||
    (business && typeof business === "string" && business.length > MAX_FIELD_LEN.business) ||
    message.length > MAX_FIELD_LEN.message
  ) {
    return NextResponse.json({ error: "Uno o más campos son demasiado largos." }, { status: 400 });
  }

  const [notification, confirmation] = await Promise.all([
    resend.emails.send({
      from: "Formulario Web <noreply@adrianpollan.com>",
      to: "adrian@adrianpollan.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Negocio: ${business || "—"}`,
        ``,
        `Mensaje:`,
        message,
      ].join("\n"),
    }),
    resend.emails.send({
      from: "Adrián Pollán <noreply@adrianpollan.com>",
      to: email,
      subject: "He recibido tu mensaje, Adrián Pollán",
      text: [
        `Hola ${name},`,
        ``,
        `Gracias por ponerte en contacto. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.`,
        ``,
        `Si necesitas respuesta urgente puedes reservar directamente una sesión gratuita de 20 minutos en: https://calendly.com/adrianpollan`,
        ``,
        `Hasta pronto,`,
        `Adrián Pollán`,
        `Consultor en Restauración y F&B`,
        `adrianpollan.com`,
      ].join("\n"),
    }),
  ]);

  if (notification.error) {
    console.error("Resend error (notification):", notification.error);
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  if (confirmation.error) {
    console.error("Resend error (confirmation):", confirmation.error);
  }

  return NextResponse.json({ ok: true });
}
