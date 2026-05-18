import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, business, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
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
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
