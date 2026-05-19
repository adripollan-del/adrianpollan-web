// HTML email templates for the 3-step welcome sequence.
// All styles are inline — email clients ignore external CSS.

const BASE_URL = "https://adrianpollan.com";

const COLORS = {
  navy: "#0f1923",
  amber: "#BA7517",
  cream: "#f8f4ee",
  white: "#ffffff",
  textMuted: "#6b7280",
};

function emailShell(content: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
  <title>Adrián Pollán</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.cream};font-family:Georgia,serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:${COLORS.cream};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:${COLORS.navy};padding:28px 40px;border-radius:8px 8px 0 0;">
              <a href="${BASE_URL}" style="font-family:Georgia,serif;font-size:22px;font-weight:bold;color:${COLORS.amber};text-decoration:none;letter-spacing:0.5px;">Adrián Pollán</a>
              <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase;">Consultor en Restauración y F&amp;B</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:${COLORS.white};padding:40px 40px 32px;border-left:1px solid #e8e2d9;border-right:1px solid #e8e2d9;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${COLORS.navy};padding:24px 40px;border-radius:0 0 8px 8px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.45);line-height:1.6;">
                Has recibido este email porque te suscribiste al newsletter de <a href="${BASE_URL}" style="color:${COLORS.amber};text-decoration:none;">adrianpollan.com</a>.<br />
                © ${new Date().getFullYear()} Adrián Pollán · Consultor en Restauración y F&amp;B
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function ctaButton(text: string, href: string): string {
  return `<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:24px 0 0;">
    <tr>
      <td style="background-color:${COLORS.amber};border-radius:4px;">
        <a href="${href}" style="display:inline-block;padding:14px 28px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:${COLORS.white};text-decoration:none;letter-spacing:0.5px;">${text} →</a>
      </td>
    </tr>
  </table>`;
}

function textLink(text: string, href: string): string {
  return `<a href="${href}" style="color:${COLORS.amber};text-decoration:underline;font-family:Arial,sans-serif;font-size:14px;">${text}</a>`;
}

function divider(): string {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:28px 0;">
    <tr><td style="border-top:1px solid #e8e2d9;"></td></tr>
  </table>`;
}

// ── Email 1: Bienvenida ───────────────────────────────────────────────────────

export function email1Html(): string {
  const content = `
    <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:26px;font-weight:bold;color:${COLORS.navy};line-height:1.3;">
      Bienvenido, esto es lo que recibirás
    </h1>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Hola,
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Gracias por suscribirte. Soy Adrián Pollán, consultor en restauración y F&amp;B con más de 20 años de experiencia operativa en España, Francia, Reino Unido e Irlanda.
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Cada semana comparto una idea práctica sobre <strong>rentabilidad, costes, equipos u operaciones en hostelería</strong>. Sin teoría vacía. Sin consejos genéricos. Solo lo que funciona cuando tienes un negocio abierto y decisiones que tomar.
    </p>

    ${divider()}

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Si todavía no lo has hecho, empieza por aquí: el <strong>diagnóstico gratuito</strong> de tu negocio te dará una primera foto de dónde estás y qué merece más atención.
    </p>

    ${ctaButton("Recibir diagnóstico gratuito", "https://diagnostico.adrianpollan.com")}

    ${divider()}

    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:${COLORS.textMuted};line-height:1.6;">
      Hasta pronto,<br />
      <strong style="color:${COLORS.navy};">Adrián Pollán</strong><br />
      Consultor en Restauración y F&amp;B<br />
      <a href="${BASE_URL}" style="color:${COLORS.amber};text-decoration:none;">adrianpollan.com</a>
    </p>
  `;
  return emailShell(content);
}

// ── Email 2: El error del food cost ──────────────────────────────────────────

export function email2Html(): string {
  const content = `
    <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:26px;font-weight:bold;color:${COLORS.navy};line-height:1.3;">
      El error que más dinero cuesta en un restaurante
    </h1>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Llevo años analizando negocios de hostelería y hay un error que aparece en casi todos los que tienen problemas de margen: <strong>no saben exactamente cuánto les cuesta producir lo que venden</strong>.
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Sin escandallos actualizados, sin control de mermas y sin seguimiento del food cost real, el margen se escapa sin que nadie lo vea. No de golpe, sino poco a poco, mes a mes, hasta que los números dejan de cuadrar.
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      La buena noticia es que tiene solución. Y normalmente no requiere cambiar precios ni recortar personal. <strong>Requiere información.</strong>
    </p>

    ${divider()}

    <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:${COLORS.navy};letter-spacing:0.5px;text-transform:uppercase;">Leer en el blog</p>

    <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.5;">
      ${textLink("Cómo calcular el food cost de tu restaurante", `${BASE_URL}/blog/como-calcular-el-food-cost-de-tu-restaurante`)}
    </p>

    ${ctaButton("Recibir diagnóstico gratuito", "https://diagnostico.adrianpollan.com")}

    ${divider()}

    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:${COLORS.textMuted};line-height:1.6;">
      Hasta pronto,<br />
      <strong style="color:${COLORS.navy};">Adrián Pollán</strong><br />
      Consultor en Restauración y F&amp;B<br />
      <a href="${BASE_URL}" style="color:${COLORS.amber};text-decoration:none;">adrianpollan.com</a>
    </p>
  `;
  return emailShell(content);
}

// ── Email 3: Check-in ─────────────────────────────────────────────────────────

export function email3Html(): string {
  const content = `
    <h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:26px;font-weight:bold;color:${COLORS.navy};line-height:1.3;">
      ¿En qué punto está tu negocio ahora mismo?
    </h1>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Llevas una semana recibiendo ideas prácticas sobre gestión de restaurantes. Espero que alguna haya sido útil.
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Quería preguntarte directamente: <strong>¿hay algo en tu negocio que te esté rondando la cabeza?</strong>
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      ¿Un número que no cuadra, una decisión que no terminas de tomar, algo que sabes que habría que cambiar pero el día a día no deja espacio?
    </p>

    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:${COLORS.navy};line-height:1.7;">
      Si es así, tengo dos opciones para ti.
    </p>

    ${divider()}

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td style="padding:0 0 20px;">
          <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:${COLORS.amber};letter-spacing:0.5px;text-transform:uppercase;">Opción 1 — Diagnóstico gratuito</p>
          <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:14px;color:${COLORS.navy};line-height:1.6;">
            En 10 minutos recibes una foto clara de las áreas prioritarias de tu negocio.
          </p>
          ${ctaButton("Recibir diagnóstico gratuito", "https://diagnostico.adrianpollan.com")}
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:24px;">
      <tr>
        <td style="padding:0 0 20px;">
          <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:${COLORS.amber};letter-spacing:0.5px;text-transform:uppercase;">Opción 2 — Sesión gratuita de 20 minutos</p>
          <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:14px;color:${COLORS.navy};line-height:1.6;">
            Me cuentas dónde estás y vemos juntos si tiene sentido trabajar juntos.
          </p>
          <p style="margin:0;">
            ${textLink("Reservar sesión gratuita →", "https://calendly.com/adrianpollan")}
          </p>
        </td>
      </tr>
    </table>

    ${divider()}

    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:${COLORS.textMuted};line-height:1.6;">
      Hasta pronto,<br />
      <strong style="color:${COLORS.navy};">Adrián Pollán</strong><br />
      Consultor en Restauración y F&amp;B<br />
      <a href="${BASE_URL}" style="color:${COLORS.amber};text-decoration:none;">adrianpollan.com</a>
    </p>
  `;
  return emailShell(content);
}

export const SEQUENCE = [
  {
    step: 1,
    subject: "Bienvenido, esto es lo que recibirás",
    html: email1Html,
    delayDays: 0,
  },
  {
    step: 2,
    subject: "El error que más dinero cuesta en un restaurante",
    html: email2Html,
    delayDays: 3,
  },
  {
    step: 3,
    subject: "¿En qué punto está tu negocio ahora mismo?",
    html: email3Html,
    delayDays: 7,
  },
] as const;
