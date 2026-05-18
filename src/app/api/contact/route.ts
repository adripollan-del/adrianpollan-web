import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, business, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
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
