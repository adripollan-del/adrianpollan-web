/**
 * Verifica que el rename navy→grafito no cambió ningún valor visual.
 * Captura home y servicios, comprueba computed styles (incluidas variantes con opacidad).
 */
import { chromium } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

const PREVIEW   = "https://adrianpollan-pghss2rv1-adrianpollan.vercel.app";
const SHARE_URL = "https://adrianpollan-pghss2rv1-adrianpollan.vercel.app/?_vercel_share=2xCT5ccuACt81vdL6jROEerNAlQayTXR";
const OUT       = path.join(__dirname, "..", "screenshots");

fs.mkdirSync(OUT, { recursive: true });

const GRAFITO_RGB = "rgb(35, 39, 43)"; // #23272B

async function checkPage(
  page: Awaited<ReturnType<Awaited<ReturnType<typeof chromium.launch>>["newPage"]>>,
  url: string,
  slug: string
) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(1500);

  const title = await page.title();
  if (title.toLowerCase().includes("login")) {
    throw new Error(`Página de login en lugar de contenido: ${title}`);
  }

  const info = await page.evaluate(() => {
    // "navy" NO debe aparecer en ninguna clase del DOM
    const navyInDOM = Array.from(document.querySelectorAll("[class]"))
      .some(el => el.className && el.className.toString().includes("navy"));

    // Todos los elementos con "grafito" en su clase
    const grafitoCls = Array.from(document.querySelectorAll("[class]"))
      .filter(el => el.className && el.className.toString().includes("grafito"))
      .slice(0, 15)
      .map(el => {
        const cs = getComputedStyle(el);
        return {
          tag: (el as Element).tagName,
          cls: el.className.toString().split(/\s+/).filter(c => c.includes("grafito")),
          bg: cs.backgroundColor,
          color: cs.color,
        };
      });

    // Hero section
    const heroEl = document.querySelector(".hero-grafito");
    const hero = heroEl
      ? { bg: getComputedStyle(heroEl).backgroundColor, cls: heroEl.className.toString().substring(0, 80) }
      : null;

    // Sección bg-grafito sólida
    const bgEl = Array.from(document.querySelectorAll("section, div"))
      .find((el): el is Element =>
        (el.className?.toString() ?? "").split(/\s+/).includes("bg-grafito")
      );
    const bgSolid = bgEl
      ? { bg: getComputedStyle(bgEl).backgroundColor, cls: bgEl.className.toString().substring(0, 80) }
      : null;

    // Header con bg-grafito/80 (opacidad parcial)
    const headerEl = document.querySelector("header");
    const header = headerEl
      ? {
          bg:  getComputedStyle(headerEl).backgroundColor,
          cls: headerEl.className.toString().split(/\s+/).filter(c => c.includes("grafito")),
        }
      : null;

    return { navyInDOM, grafitoCls, hero, bgSolid, header, title: document.title };
  });

  // Screenshot viewport
  const file = path.join(OUT, `${slug}.png`);
  await page.screenshot({ path: file, fullPage: false });
  const bytes = fs.statSync(file).size;

  console.log(`\n=== ${slug} (${url}) ===`);
  console.log("title:", info.title);
  console.log("navyInDOM:", info.navyInDOM, "← debe ser false");
  console.log("hero:", info.hero);
  console.log("bgSolid:", info.bgSolid);
  console.log("header (grafito/80):", info.header);
  console.log(`Screenshot: ${file} (${bytes} bytes)`);
  info.grafitoCls.slice(0, 10).forEach(e => {
    console.log(`  ${e.tag} [${e.cls.join(", ")}]  bg=${e.bg}  color=${e.color}`);
  });

  // Aserciones
  if (info.navyInDOM) throw new Error(`"navy" encontrado en clases del DOM de ${url}`);

  const hasSolidGrafito =
    (info.hero   && info.hero.bg === GRAFITO_RGB)   ||
    (info.bgSolid && info.bgSolid.bg === GRAFITO_RGB) ||
    info.grafitoCls.some(e =>
      !e.cls.some(c => c.includes("/")) &&
      (e.bg === GRAFITO_RGB || e.color === GRAFITO_RGB)
    );
  if (!hasSolidGrafito) throw new Error(`Ningún elemento muestra ${GRAFITO_RGB} en ${url}`);

  return { file, bytes, info };
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page    = await context.newPage();

  try {
    // 1. Autenticación Vercel (share URL establece cookie _vercel_jwt)
    console.log("Autenticando con share URL…");
    await page.goto(SHARE_URL, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForURL(url => !url.href.includes("_vercel_share"), { timeout: 15_000 })
      .catch(() => {/* ya redirigió */});
    console.log("Auth OK. URL actual:", page.url());

    // 2. Verificar páginas
    const home      = await checkPage(page, `${PREVIEW}/`,         "home-grafito");
    const servicios = await checkPage(page, `${PREVIEW}/servicios`, "servicios-grafito");

    console.log("\n✓ Ambas páginas verificadas.");
    console.log(`  screenshots/home-grafito.png      → ${home.bytes} bytes`);
    console.log(`  screenshots/servicios-grafito.png → ${servicios.bytes} bytes`);
    console.log("\n✓ navy→grafito: rename correcto, cero cambios visuales.");
  } catch (err) {
    console.error("\n✗ FALLO:", err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
