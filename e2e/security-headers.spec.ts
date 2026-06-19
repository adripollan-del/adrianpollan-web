import { test, expect } from "@playwright/test";

// Las cabeceras se comprueban contra la homepage. Next.js las aplica a
// todas las rutas via next.config.ts headers(), así que una sola URL es
// suficiente para verificar que el bloque está activo.

test("HSTS: max-age=63072000 con includeSubDomains y preload", async ({
  request,
}) => {
  const resp = await request.get("/");
  const hsts = resp.headers()["strict-transport-security"];
  expect(hsts, "Falta Strict-Transport-Security").toBeTruthy();
  expect(hsts).toContain("max-age=63072000");
  expect(hsts).toContain("includeSubDomains");
  expect(hsts).toContain("preload");
});

test("X-Content-Type-Options: nosniff", async ({ request }) => {
  const resp = await request.get("/");
  expect(resp.headers()["x-content-type-options"]).toBe("nosniff");
});

test("X-Frame-Options: DENY", async ({ request }) => {
  const resp = await request.get("/");
  expect(resp.headers()["x-frame-options"]).toBe("DENY");
});

test("Content-Security-Policy: directivas críticas presentes", async ({
  request,
}) => {
  const resp = await request.get("/");
  const csp = resp.headers()["content-security-policy"];
  expect(csp, "Falta Content-Security-Policy").toBeTruthy();
  expect(csp).toContain("default-src 'self'");
  expect(csp).toContain("frame-ancestors 'none'");
  expect(csp).toContain("object-src 'none'");
  expect(csp).toContain("form-action 'self'");
  expect(csp).toContain("https://www.googletagmanager.com");
  expect(csp).toContain("upgrade-insecure-requests");
});

test("Referrer-Policy y Permissions-Policy correctas", async ({ request }) => {
  const resp = await request.get("/");
  expect(resp.headers()["referrer-policy"]).toBe(
    "strict-origin-when-cross-origin"
  );
  const pp = resp.headers()["permissions-policy"];
  expect(pp, "Falta Permissions-Policy").toBeTruthy();
  expect(pp).toContain("camera=()");
  expect(pp).toContain("microphone=()");
  expect(pp).toContain("geolocation=()");
});
