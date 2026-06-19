import { chromium } from "@playwright/test";

const TARGET = process.env.CHECK_URL ?? "https://adrianpollan.com";
const SHARE_URL = process.env.VERCEL_SHARE_URL ?? "";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

// Si hay share URL, autenticar primero para entrar al preview protegido
if (SHARE_URL) {
  console.log("0. Autenticando en Vercel preview...");
  await page.goto(SHARE_URL, { waitUntil: "networkidle", timeout: 30000 });
  await page
    .waitForURL((url) => !url.href.includes("_vercel_share"), { timeout: 15000 })
    .catch(() => {});
  console.log("   Autenticado. URL actual:", page.url());
}

await page.addInitScript(() => {
  localStorage.setItem(
    "cookie-consent",
    JSON.stringify({ value: "accepted", ts: Date.now() })
  );
});

console.log(`1. Cargando ${TARGET}...`);
await page.goto(TARGET, { waitUntil: "load", timeout: 30000 });
console.log("   Page loaded");

console.log("2. Esperando window.gtag (15s max)...");
const gtagDefined = await page
  .waitForFunction(() => typeof window.gtag === "function", { timeout: 15000 })
  .then(() => true)
  .catch(() => false);
console.log("   window.gtag:", gtagDefined ? "DEFINED ✓" : "NOT DEFINED ✗");

console.log("3. Inspeccionando window.clarity inmediatamente después de lazyOnload...");
const clarityImmediate = await page.evaluate(() => {
  const c = window.clarity;
  return {
    type: typeof c,
    value: c === undefined ? "undefined" : c === null ? "null" : String(c).slice(0, 200),
    isFunction: typeof c === "function",
    isHTMLElement: c instanceof HTMLElement,
    id: c instanceof HTMLElement ? c.id : null,
  };
});
console.log("   window.clarity:", JSON.stringify(clarityImmediate));

console.log("4. Esperando window.clarity como función (20s max)...");
const clarityDefined = await page
  .waitForFunction(() => typeof window.clarity === "function", { timeout: 20000 })
  .then(() => true)
  .catch(() => false);
console.log("   window.clarity function:", clarityDefined ? "DEFINED ✓" : "NOT DEFINED ✗");

// DOM check
const domCheck = await page.evaluate(() => {
  const scripts = Array.from(document.querySelectorAll("script[src]"))
    .map((s) => s.src)
    .filter((s) => s.includes("clarity"));
  const inlineIds = Array.from(document.querySelectorAll("script[id*=clarity]")).map(
    (s) => s.id
  );
  return { clarityScriptSrcs: scripts, inlineScriptIds: inlineIds };
});
console.log("5. DOM:", JSON.stringify(domCheck));

await browser.close();
