import { test, expect, type Page } from "@playwright/test";

// Captura errores de CSP del sitio, excluyendo ruido de herramientas de Vercel.
// El Toolbar de feedback de vercel.live inyecta un iframe en deployments de
// preview que es bloqueado por frame-src (vercel.live no está en la CSP de
// producción). Es ruido esperado en preview, no un error del sitio real.
function isCspNoise(text: string): boolean {
  return text.includes("vercel.live");
}

function captureCspErrors(page: Page): string[] {
  const errs: string[] = [];
  page.on("console", (msg) => {
    const t = msg.text();
    if (
      msg.type() === "error" &&
      !isCspNoise(t) &&
      (t.includes("Content Security Policy") ||
        t.includes("content-security-policy") ||
        t.includes("Refused to") ||
        t.includes("violates the following"))
    ) {
      errs.push(t);
    }
  });
  // También capturar page errors (uncaught exceptions)
  page.on("pageerror", (err) => {
    if (
      !isCspNoise(err.message) &&
      (err.message.includes("CSP") || err.message.includes("Refused"))
    ) {
      errs.push(`pageerror: ${err.message}`);
    }
  });
  return errs;
}

// ── Test 1: ChatBox (Robi) responde sin errores de CSP ─────────────────
test("1. ChatBox: Robi responde a un mensaje sin errores de CSP", async ({
  page,
}) => {
  const csp = captureCspErrors(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // Abrir chat
  await page.getByRole("button", { name: "Hablar con Robi" }).click();

  // Input y envío
  const input = page.getByPlaceholder("Escribe un mensaje…");
  await expect(input).toBeVisible({ timeout: 5_000 });
  await input.fill("Hola, ¿cuál es tu nombre?");
  await page.getByRole("button", { name: "Enviar" }).click();

  // Las burbujas de "escribiendo…" aparecen mientras carga
  const typingDots = page.locator(".animate-bounce").first();
  // Esperar a que la respuesta llegue (puede tardar hasta 20 s)
  await expect(typingDots).not.toBeVisible({ timeout: 25_000 });

  // Debe haber al menos 3 mensajes: bienvenida + usuario + respuesta
  const bubbles = page.locator(".rounded-2xl.rounded-bl-sm, .rounded-2xl.rounded-br-sm");
  await expect(bubbles).toHaveCount(3, { timeout: 5_000 });

  expect(csp, `Errores de CSP encontrados: ${csp.join(" | ")}`).toHaveLength(0);
});

// ── Test 2: Cookies activan GA4 y Clarity sin errores de CSP ───────────
test("2. Cookie consent: aceptar todas activa GA4 y Clarity sin errores de CSP", async ({
  page,
}) => {
  const csp = captureCspErrors(page);

  // Limpiar localStorage para forzar que aparezca el banner
  await page.addInitScript(() => localStorage.removeItem("cookie-consent"));

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // El banner de cookies debe ser visible
  const banner = page.getByRole("dialog", { name: "Aviso de cookies" });
  await expect(banner).toBeVisible({ timeout: 8_000 });

  // Aceptar todas
  await page.getByRole("button", { name: "Aceptar todas" }).click();
  await expect(banner).not.toBeVisible({ timeout: 3_000 });

  // strategy="lazyOnload" + inicialización del SDK de Clarity puede tardar ~10 s
  // GA4 suele estar listo antes, Clarity requiere más margen
  await page.waitForFunction(() => typeof window.gtag === "function", { timeout: 15_000 });
  await page.waitForFunction(
    () => typeof (window as unknown as { clarity?: unknown }).clarity === "function",
    { timeout: 15_000 }
  );

  const gtagDefined = await page.evaluate(() => typeof window.gtag === "function");
  expect(gtagDefined, "window.gtag no está definido — GA4 no cargó").toBe(true);

  const clarityDefined = await page.evaluate(
    () => typeof (window as unknown as { clarity?: unknown }).clarity === "function"
  );
  expect(clarityDefined, "window.clarity no está definido — Clarity no cargó").toBe(true);

  expect(csp, `Errores de CSP encontrados: ${csp.join(" | ")}`).toHaveLength(0);
});

// ── Test 3: Calculadora de escandallo calcula sin errores de CSP ────────
test("3. Calculadora de escandallo: carga y calcula sin errores de CSP", async ({
  page,
}) => {
  const csp = captureCspErrors(page);

  await page.goto("/herramientas/calculadora-escandallo");
  await page.waitForLoadState("networkidle");

  // La herramienta debe estar visible (heading del hero)
  await expect(
    page.getByRole("heading", { name: /Calculadora de\s*Escandallo/i })
  ).toBeVisible({ timeout: 5_000 });

  // Buscar el input del nombre del plato o primer input de ingrediente
  // (el EscandalloClient tiene un input para nombre del plato o ingredientes)
  const firstInput = page.getByRole("textbox").first();
  await expect(firstInput).toBeVisible({ timeout: 5_000 });

  // Introducir un valor para confirmar interactividad
  await firstInput.fill("Gazpacho");

  // El email capture tiene un input[type=email] — no lo enviamos,
  // solo verificamos que el botón existe y está visible
  const emailInput = page.locator('input[type="email"]');
  if (await emailInput.count() > 0) {
    await expect(emailInput.first()).toBeVisible();
  }

  expect(csp, `Errores de CSP encontrados: ${csp.join(" | ")}`).toHaveLength(0);
});

// ── Test 4: Calendly carga su iframe en /hablemos sin errores de CSP ────
test("4. Calendly: el widget carga el iframe en /hablemos sin errores de CSP", async ({
  page,
}) => {
  const csp = captureCspErrors(page);

  await page.goto("/hablemos");
  await page.waitForLoadState("networkidle");

  // Esperar al iframe de Calendly (el script se descarga y luego crea el iframe)
  const calendlyIframe = page.locator('iframe[src*="calendly.com"]');
  await expect(calendlyIframe).toBeVisible({ timeout: 25_000 });

  expect(csp, `Errores de CSP encontrados: ${csp.join(" | ")}`).toHaveLength(0);
});

// ── Test 5: Sin errores de CSP en páginas clave del sitio ──────────────
test("5. Sin errores de CSP en las páginas principales", async ({ page }) => {
  const allCsp: { url: string; errors: string[] }[] = [];

  const pages = ["/", "/servicios", "/blog", "/hablemos", "/herramientas"];

  for (const path of pages) {
    const errs: string[] = [];
    page.removeAllListeners("console");
    page.on("console", (msg) => {
      const t = msg.text();
      if (
        msg.type() === "error" &&
        !isCspNoise(t) &&
        (t.includes("Content Security Policy") ||
          t.includes("content-security-policy") ||
          t.includes("Refused to") ||
          t.includes("violates the following"))
      ) {
        errs.push(t);
      }
    });

    await page.goto(path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1_500); // margen para errores lazy

    if (errs.length > 0) allCsp.push({ url: path, errors: errs });
  }

  const report = allCsp
    .map((e) => `${e.url}: ${e.errors.join(" | ")}`)
    .join("\n");

  expect(allCsp, `Errores de CSP en:\n${report}`).toHaveLength(0);
});
