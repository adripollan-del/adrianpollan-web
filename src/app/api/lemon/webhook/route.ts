import { NextResponse } from "next/server";
import { createHmac, createHash, timingSafeEqual } from "crypto";

const PRODUCT_TAG_MAP: Record<number, string> = {
  1105907: "plantilla-inventario",
  1105930: "plantilla-cuadro-mando",
  1105805: "plantilla-escandallo",
  1105728: "plantilla-menu-engineering",
  1105944: "plantilla-kit-gestion",
  1106028: "bundle-control",
  1106101: "bundle-gestion",
  1106040: "bundle-operacion-pro",
  1106006: "bundle-starter",
  1106051: "bundle-suite-completa",
};

interface LemonOrder {
  meta?: { event_name?: string };
  data?: {
    attributes?: {
      user_email?: string;
      first_order_item?: { product_id?: number };
    };
  };
}

export async function POST(req: Request) {
  const secret = process.env.LEMONSQUEEZY_SIGNING_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  // Read raw body before any parsing — req.text() can only be called once
  const rawBody = await req.text();

  // Verify HMAC SHA256 signature
  const signature = req.headers.get("X-Signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");

  // Constant-time comparison to prevent timing attacks
  let valid = false;
  try {
    valid = timingSafeEqual(
      Buffer.from(expected, "hex"),
      Buffer.from(signature, "hex")
    );
  } catch {
    // Buffer lengths differ → invalid signature
    valid = false;
  }

  if (!valid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // Parse event
  let body: LemonOrder;
  try {
    body = JSON.parse(rawBody) as LemonOrder;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only act on order_created; acknowledge everything else silently
  if (body.meta?.event_name !== "order_created") {
    return NextResponse.json({ ok: true });
  }

  const attrs = body.data?.attributes;
  const email = attrs?.user_email;
  const productId = attrs?.first_order_item?.product_id;

  if (!email || !productId) {
    return NextResponse.json({ error: "Missing email or product_id" }, { status: 400 });
  }

  const tag = PRODUCT_TAG_MAP[productId];
  if (!tag) {
    // Unknown product — acknowledge without error
    return NextResponse.json({ ok: true });
  }

  // Mailchimp setup
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_PLANTILLAS_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json({ error: "Mailchimp not configured" }, { status: 500 });
  }

  const dc = apiKey.split("-").pop();
  if (!dc) {
    return NextResponse.json({ error: "Invalid Mailchimp API key" }, { status: 500 });
  }

  const subscriberHash = createHash("md5").update(email.toLowerCase()).digest("hex");
  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
  const memberUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  // PUT is idempotent: creates member if new, leaves status untouched if already exists
  const memberRes = await fetch(memberUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      email_address: email,
      status_if_new: "subscribed",
    }),
  });

  if (!memberRes.ok) {
    const err = await memberRes.json().catch(() => null);
    console.error("[lemon/webhook] Mailchimp member error:", err);
    return NextResponse.json({ error: "Failed to upsert Mailchimp member" }, { status: 500 });
  }

  // Add tag (POST /members/{hash}/tags returns 204 on success)
  const tagRes = await fetch(`${memberUrl}/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      tags: [{ name: tag, status: "active" }],
    }),
  });

  if (!tagRes.ok) {
    const err = await tagRes.json().catch(() => null);
    console.error("[lemon/webhook] Mailchimp tag error:", err);
    return NextResponse.json({ error: "Failed to add Mailchimp tag" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
