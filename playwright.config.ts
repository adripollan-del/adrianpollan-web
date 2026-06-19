import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  // Solo usamos la fixture `request` (HTTP client), sin browser
  projects: [{ name: "security-headers" }],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "https://adrianpollan.com",
    ignoreHTTPSErrors: false,
    // No seguir redireccionamientos para ver los headers de la respuesta real
    extraHTTPHeaders: {},
  },
  reporter: [["list"]],
  timeout: 15_000,
});
