import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// /api/chat: 15 peticiones por IP en 24h (cada llamada consume tokens de Anthropic)
export const chatLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(15, "24 h"),
  prefix: "rl:chat",
});

// /api/contact, /api/newsletter, /api/libro: 5 por IP por hora
export const leadLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  prefix: "rl:lead",
});

export function getIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

/** Fail-closed: si Redis falla, bloquea. Para /api/chat. */
export async function checkChatLimit(
  ip: string
): Promise<{ allowed: boolean }> {
  try {
    const { success } = await chatLimiter.limit(ip);
    return { allowed: success };
  } catch (err) {
    console.error("[rate-limit] Redis error (chat, fail-closed):", err);
    return { allowed: false };
  }
}

/** Fail-open: si Redis falla, permite y loguea. Para endpoints de captación. */
export async function checkLeadLimit(
  ip: string
): Promise<{ allowed: boolean }> {
  try {
    const { success } = await leadLimiter.limit(ip);
    return { allowed: success };
  } catch (err) {
    console.error("[rate-limit] Redis error (lead, fail-open):", err);
    return { allowed: true };
  }
}
