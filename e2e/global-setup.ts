import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

export default async function globalSetup() {
  const shareUrl = process.env.VERCEL_SHARE_URL;
  if (!shareUrl) return;

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Visitar la share URL hace que Vercel establezca la cookie _vercel_jwt y
  // redirija al deployment real
  await page.goto(shareUrl, { waitUntil: "networkidle" });
  // Esperar hasta que la URL ya no contenga el token de share
  await page
    .waitForURL((url) => !url.href.includes("_vercel_share"), { timeout: 15_000 })
    .catch(() => {/* ya redirigió o no hubo share token que esperar */});

  const outPath = path.join(__dirname, ".auth-state.json");
  await context.storageState({ path: outPath });
  await browser.close();

  // Si no se generó el archivo (sin share URL o redirección ya hecha)
  // asegurar que al menos existe vacío para no romper el config
  if (!fs.existsSync(outPath)) {
    fs.writeFileSync(outPath, JSON.stringify({ cookies: [], origins: [] }));
  }
}
