#!/usr/bin/env node
/**
 * migrate-cta-classes.mjs — Migración puntual de bloques CTA de blog.ts
 *
 * Reemplaza los bloques CTA con style= inline por versiones con clases CSS.
 *
 * Uso:
 *   node migrate-cta-classes.mjs --preview   # muestra 3 ejemplos sin escribir
 *   node migrate-cta-classes.mjs             # aplica a los 27 artículos
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_FILE = join(__dirname, 'src/data/blog.ts');

// Patrón exacto del bloque generado por create-article.mjs (estructura fija)
const CTA_RE = /<div style="background-color:#f5f0e8[^"]*"><p style="[^"]*">([^<]*)<\/p><p style="[^"]*">([^<]*)<\/p><a href="([^"]*)" style="[^"]*">([^<]*)<\/a><\/div>/g;

function migrate(content) {
  return content.replace(CTA_RE, (_, title, desc, href, btnText) =>
    `<div class="blog-cta-block"><p class="blog-cta-title">${title}</p><p class="blog-cta-desc">${desc}</p><a href="${href}" class="blog-cta-btn">${btnText}</a></div>`
  );
}

const raw = readFileSync(BLOG_FILE, 'utf8');
const preview = process.argv.includes('--preview');

// Contar bloques antes
const totalBlocks = [...raw.matchAll(CTA_RE)].length;
console.log(`Bloques CTA con style= encontrados: ${totalBlocks}\n`);

if (preview) {
  // Mostrar los 3 primeros ejemplos
  let shown = 0;
  for (const m of raw.matchAll(CTA_RE)) {
    if (shown >= 3) break;
    const [original, title, desc, href, btnText] = m;
    const replacement = `<div class="blog-cta-block"><p class="blog-cta-title">${title}</p><p class="blog-cta-desc">${desc}</p><a href="${href}" class="blog-cta-btn">${btnText}</a></div>`;
    console.log(`── Ejemplo ${shown + 1} ───────────────────────────────────────`);
    console.log('ANTES:\n' + original);
    console.log('\nDESPUÉS:\n' + replacement);
    console.log('');
    shown++;
  }
  console.log('(modo --preview: no se ha modificado blog.ts)');
} else {
  const migrated = migrate(raw);
  const remaining = [...migrated.matchAll(CTA_RE)].length;
  writeFileSync(BLOG_FILE, migrated, 'utf8');
  console.log(`✅  Migración completada: ${totalBlocks - remaining} bloques convertidos.`);
  if (remaining > 0) {
    console.warn(`⚠️  ${remaining} bloques no coincidieron con el patrón y se dejaron sin tocar.`);
  }
}
