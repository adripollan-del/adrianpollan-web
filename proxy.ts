import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";

  const csp = [
    `default-src 'self'`,
    // 'strict-dynamic' confía en scripts creados por scripts ya confiados (cubre
    // la inyección dinámica de Clarity, Calendly y sub-scripts de GTM). Los dominios
    // explícitos son fallback para navegadores CSP2. 'unsafe-eval' solo en dev
    // porque React lo necesita para la reconstrucción de stack traces.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://assets.calendly.com https://www.clarity.ms`,
    // inline styles de React (style={{...}}) y hoja de Calendly
    `style-src 'self' 'unsafe-inline' https://assets.calendly.com`,
    // data: para los SVG backgrounds de hero y ChatBox
    `img-src 'self' data: https://images.unsplash.com`,
    `font-src 'self'`,
    // 'self' cubre todos los fetch a /api/*; el resto son destinos de analítica y Calendly.
    // Upstash, Anthropic, Mailchimp y Resend se llaman server-side → no aplica CSP.
    `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://api.calendly.com https://assets.calendly.com`,
    // Solo /hablemos usa el widget inline de Calendly (iframe)
    `frame-src https://calendly.com`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `frame-ancestors 'none'`,
    `form-action 'self'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  // x-nonce en la request para que layout.tsx lo lea vía headers()
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      // Excluye static assets y archivos de imagen — no necesitan nonce ni CSP
      source:
        "/((?!_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
