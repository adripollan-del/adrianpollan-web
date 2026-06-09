import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

type Tool =
  | "escandallo"
  | "prime-cost"
  | "checklist-apertura"
  | "checklist-food-cost"
  | "auditoria-proveedores";

const TOOL_TAG: Record<Tool, string> = {
  "escandallo": "herramienta-escandallo",
  "prime-cost": "herramienta-prime-cost",
  "checklist-apertura": "herramienta-checklist-apertura",
  "checklist-food-cost": "herramienta-checklist-food-cost",
  "auditoria-proveedores": "herramienta-auditoria-proveedores",
};

// ─── HTML shell ────────────────────────────────────────────────────────────────

function emailShell(bodyContent: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%;">
        <tr>
          <td style="background:#0f1923;padding:24px 32px;">
            <span style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:1px;">ADRIÁN POLLÁN</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            ${bodyContent}
            <hr style="border:none;border-top:1px solid #e8e2d9;margin:32px 0;">
            <p style="color:#888;font-size:13px;line-height:1.6;margin:0;">
              Adrián Pollán<br>
              Consultor en Restauración y F&amp;B<br>
              <a href="https://adrianpollan.com" style="color:#BA7517;text-decoration:none;">adrianpollan.com</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function btn(text: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;background:#BA7517;color:#ffffff;font-size:14px;font-weight:700;padding:12px 24px;text-decoration:none;margin:20px 0 8px;">${text}</a>`;
}

function p(text: string, color = "#0f1923"): string {
  return `<p style="color:${color};font-size:15px;line-height:1.7;margin:0 0 16px;">${text}</p>`;
}

// ─── Email builders ─────────────────────────────────────────────────────────

interface SavedDish {
  name: string;
  costPerPortion: number;
  recPrice: number;
  foodCostPct: number;
  marginPct: number;
}

function buildEscandalloEmail(data: { dishes?: SavedDish[] }): { subject: string; html: string } {
  const dishes: SavedDish[] = Array.isArray(data?.dishes) ? data.dishes : [];
  const rows = dishes
    .map(
      (d) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;">${d.name || "—"}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;text-align:right;">€${Number(d.costPerPortion).toFixed(3)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;text-align:right;">€${Number(d.recPrice).toFixed(2)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;text-align:right;">${Number(d.foodCostPct).toFixed(0)}%</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;text-align:right;">${Number(d.marginPct).toFixed(0)}%</td>
      </tr>`
    )
    .join("");

  const table =
    dishes.length > 0
      ? `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0 24px;">
          <thead>
            <tr style="background:#0f1923;">
              <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:left;text-transform:uppercase;letter-spacing:1px;">Plato</th>
              <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:right;text-transform:uppercase;letter-spacing:1px;">Coste/ración</th>
              <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:right;text-transform:uppercase;letter-spacing:1px;">PVP recom.</th>
              <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:right;text-transform:uppercase;letter-spacing:1px;">Food cost</th>
              <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:right;text-transform:uppercase;letter-spacing:1px;">Margen</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>`
      : "";

  const body =
    p("Hola,") +
    p("Aquí tienes un resumen de los platos que calculaste:") +
    table +
    p("Si quieres llevar este control al siguiente nivel, la <strong>Plantilla de Escandallo y Calculadora de Precios</strong> te permite gestionar todas tus recetas con mermas automáticas, historial de costes y calculadora de precio por canal.") +
    btn("Ver plantilla de Escandallo → 59 €", "https://adrianpollan.com/herramientas/plantillas/escandallo-calculadora-precios");

  return { subject: "Tus recetas del escandallo, listas para usar", html: emailShell(body) };
}

function buildPrimeCostEmail(data: {
  foodCost?: number;
  labourCost?: number;
  primeCost?: number;
  level?: string;
}): { subject: string; html: string } {
  const rows = [
    { label: "Food Cost", value: `${Number(data.foodCost ?? 0).toFixed(1)}%` },
    { label: "Labour Cost", value: `${Number(data.labourCost ?? 0).toFixed(1)}%` },
    { label: "Prime Cost", value: `${Number(data.primeCost ?? 0).toFixed(1)}%` },
    { label: "Valoración", value: data.level ?? "—" },
  ]
    .map(
      (r) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;">${r.label}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0ebe3;color:#0f1923;font-size:14px;text-align:right;font-weight:700;">${r.value}</td>
      </tr>`
    )
    .join("");

  const table = `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:16px 0 24px;">
    <thead>
      <tr style="background:#0f1923;">
        <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:left;text-transform:uppercase;letter-spacing:1px;">Indicador</th>
        <th style="padding:10px 12px;color:#ffffff;font-size:12px;text-align:right;text-transform:uppercase;letter-spacing:1px;">Resultado</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;

  const body =
    p("Hola,") +
    p("Estos son los resultados de tu análisis:") +
    table +
    p("Para controlar estos indicadores mes a mes sin tener que calcularlo manualmente, el <strong>Cuadro de Mando Financiero</strong> los actualiza automáticamente con cada registro que introduces.") +
    btn("Ver Cuadro de Mando → 79 €", "https://adrianpollan.com/herramientas/plantillas/cuadro-mando-financiero");

  return { subject: "Tu análisis de prime cost", html: emailShell(body) };
}

function buildChecklistAperturaEmail(data: {
  completed?: number;
  total?: number;
  level?: string;
}): { subject: string; html: string } {
  const completed = data.completed ?? 0;
  const total = data.total ?? 24;
  const pct = total > 0 ? (completed / total) * 100 : 0;
  const contextual =
    pct >= 75
      ? "Buena preparación. Los puntos que te faltan son los que marcan la diferencia entre una apertura controlada y una llena de imprevistos."
      : "Todavía tienes puntos críticos pendientes. Antes de abrir, asegúrate de tenerlos cubiertos.";

  const body =
    p("Hola,") +
    p(`Has completado <strong>${completed} de ${total} puntos</strong> de la checklist de apertura.`) +
    p(contextual) +
    p("Para estandarizar la operación desde el primer día, el <strong>Kit de Gestión Operativa</strong> incluye checklists de apertura, cierre, producción y control de temperaturas listos para usar.") +
    btn("Ver Kit de Gestión → 89 €", "https://adrianpollan.com/herramientas/plantillas/kit-gestion-operativa");

  return { subject: "Tu checklist de apertura completada", html: emailShell(body) };
}

function buildChecklistFoodCostEmail(data: {
  completed?: number;
  total?: number;
  level?: string;
}): { subject: string; html: string } {
  const completed = data.completed ?? 0;
  const total = data.total ?? 16;
  const pct = total > 0 ? (completed / total) * 100 : 0;
  const contextual =
    pct >= 75
      ? "Tienes un buen nivel de control del food cost. El siguiente paso es asegurarte de que se mantiene actualizado y que el equipo lo aplica de forma consistente."
      : pct >= 50
      ? "Tienes algunas bases, pero hay procesos sin implantar que pueden estar costando margen cada mes."
      : "El control de food cost en tu negocio tiene margen de mejora importante. Sin un sistema claro, el margen se escapa sin que nadie lo vea.";

  const body =
    p("Hola,") +
    p(`Has completado <strong>${completed} de ${total} puntos</strong> del control de food cost.`) +
    p(contextual) +
    p("Para calcular el food cost real de cada receta con mermas incluidas y fijar precios con margen garantizado, la <strong>Plantilla de Escandallo y Calculadora de Precios</strong> hace ese trabajo automáticamente.") +
    btn("Ver plantilla de Escandallo → 59 €", "https://adrianpollan.com/herramientas/plantillas/escandallo-calculadora-precios");

  return { subject: "Tu checklist de control de food cost", html: emailShell(body) };
}

function buildAuditoriaProveedoresEmail(data: {
  completed?: number;
  total?: number;
  level?: string;
}): { subject: string; html: string } {
  const completed = data.completed ?? 0;
  const total = data.total ?? 16;
  const pct = total > 0 ? (completed / total) * 100 : 0;
  const contextual =
    pct >= 75
      ? "Tienes una gestión de proveedores ordenada. El trabajo ahora es mantener la disciplina y revisar condiciones periódicamente."
      : pct >= 50
      ? "Tienes algunas prácticas correctas, pero hay elementos sin implantar que pueden estar afectando al coste de compra."
      : "La gestión de proveedores en tu negocio tiene margen de mejora significativo. Es una de las áreas donde se pueden recuperar varios puntos de food cost con cambios concretos.";

  const body =
    p("Hola,") +
    p(`Has completado <strong>${completed} de ${total} puntos</strong> de la auditoría de proveedores.`) +
    p(contextual) +
    p("Para controlar el stock en tiempo real y recibir pedidos sugeridos automáticos por proveedor, la <strong>Plantilla de Control de Inventario</strong> elimina las roturas de stock y las compras innecesarias.") +
    btn("Ver plantilla de Inventario → 69 €", "https://adrianpollan.com/herramientas/plantillas/control-inventario-pedidos");

  return { subject: "Tu informe de auditoría de proveedores", html: emailShell(body) };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_HERRAMIENTAS_AUDIENCE_ID;
  const resendKey = process.env.RESEND_API_KEY;

  console.log("[herramientas/email] audienceId:", audienceId ? "present" : "missing");

  if (!apiKey || !audienceId || !resendKey) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  let body: { email?: string; tool?: string; data?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, tool, data } = body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }
  if (!tool || !(tool in TOOL_TAG)) {
    return NextResponse.json({ error: "Tool inválido" }, { status: 400 });
  }

  const validTool = tool as Tool;
  const tag = TOOL_TAG[validTool];

  // ── Mailchimp upsert ───────────────────────────────────────────────────────
  const dc = apiKey.split("-").pop();
  if (!dc) {
    return NextResponse.json({ error: "Invalid Mailchimp API key" }, { status: 500 });
  }

  const subscriberHash = createHash("md5").update(email.toLowerCase()).digest("hex");
  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
  const memberUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  const memberRes = await fetch(memberUrl, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
    body: JSON.stringify({ email_address: email, status_if_new: "subscribed" }),
  });

  console.log("[herramientas/email] memberRes status:", memberRes.status);

  if (!memberRes.ok) {
    const err = await memberRes.json().catch(() => null);
    console.error("[herramientas/email] Mailchimp member error:", err);
    return NextResponse.json({ error: "Failed to upsert Mailchimp member" }, { status: 500 });
  }

  const tagRes = await fetch(`${memberUrl}/tags`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
    body: JSON.stringify({ tags: [{ name: tag, status: "active" }] }),
  });

  console.log("[herramientas/email] tagRes status:", tagRes.status);

  if (!tagRes.ok) {
    const err = await tagRes.json().catch(() => null);
    console.error("[herramientas/email] Mailchimp tag error:", err);
    return NextResponse.json({ error: "Failed to add Mailchimp tag" }, { status: 500 });
  }

  // ── Build email content ────────────────────────────────────────────────────
  const toolData = (data ?? {}) as Record<string, unknown>;
  let emailContent: { subject: string; html: string };

  switch (validTool) {
    case "escandallo":
      emailContent = buildEscandalloEmail(toolData as Parameters<typeof buildEscandalloEmail>[0]);
      break;
    case "prime-cost":
      emailContent = buildPrimeCostEmail(toolData as Parameters<typeof buildPrimeCostEmail>[0]);
      break;
    case "checklist-apertura":
      emailContent = buildChecklistAperturaEmail(toolData as Parameters<typeof buildChecklistAperturaEmail>[0]);
      break;
    case "checklist-food-cost":
      emailContent = buildChecklistFoodCostEmail(toolData as Parameters<typeof buildChecklistFoodCostEmail>[0]);
      break;
    case "auditoria-proveedores":
      emailContent = buildAuditoriaProveedoresEmail(toolData as Parameters<typeof buildAuditoriaProveedoresEmail>[0]);
      break;
  }

  // ── Send email via Resend ─────────────────────────────────────────────────
  const resend = new Resend(resendKey);
  const { error: sendError } = await resend.emails.send({
    from: "Adrián Pollán <adrian@adrianpollan.com>",
    to: email,
    subject: emailContent.subject,
    html: emailContent.html,
  });

  if (sendError) {
    console.error("[herramientas/email] Resend error:", sendError);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
