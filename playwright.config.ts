import { defineConfig, devices } from "@playwright/test";

const BASE = process.env.PLAYWRIGHT_BASE_URL ?? "https://adrianpollan.com";

export default defineConfig({
  testDir: "./e2e",
  globalSetup: "./e2e/global-setup.ts",
  reporter: [["list"]],
  timeout: 40_000,

  projects: [
    // ── Cabeceras HTTP (sin browser, solo request fixture) ────────────
    {
      name: "security-headers",
      testMatch: "security-headers.spec.ts",
      use: { baseURL: BASE },
    },
    // ── Tests funcionales (Chromium headless con auth de Vercel) ─────
    {
      name: "functional",
      testMatch: "functional.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: BASE,
        storageState: "e2e/.auth-state.json",
        // Sin aceptar errores TLS en caso de redirecciones de auth
        ignoreHTTPSErrors: false,
      },
    },
  ],
});
