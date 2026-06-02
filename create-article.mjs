#!/usr/bin/env node
/**
 * create-article.mjs — Creador automático de artículos para adrianpollan.com
 *
 * Uso:
 *   node create-article.mjs "Título del artículo" "keyword principal"
 *
 * Variables de entorno necesarias en .env.local:
 *   ANTHROPIC_API_KEY   — console.anthropic.com → API Keys
 *   UNSPLASH_ACCESS_KEY — unsplash.com/developers → New Application → Access Key
 */

import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const BLOG_FILE  = join(__dirname, 'src/data/blog.ts');

// ── Env ───────────────────────────────────────────────────────────────────────

function loadEnv() {
  try {
    const raw = readFileSync(join(__dirname, '.env.local'), 'utf8');
    for (const line of raw.split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq === -1) continue;
      const key = t.slice(0, eq).trim();
      const val = t.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      if (key && !process.env[key]) process.env[key] = val;
    }
  } catch {}
}

function today() {
  return new Date().toISOString().split('T')[0];
}

// ── Claude: generación del artículo ──────────────────────────────────────────

async function generateArticle(title, keyword, apiKey) {
  console.log('🤖  Generating article with Claude...');

  // Extraemos el cuerpo del primer artículo existente como referencia de estilo
  const blogContent = readFileSync(BLOG_FILE, 'utf8');
  const bodyMatch   = blogContent.match(/body: `([\s\S]*?)`\s*,\s*\n\s*\}/);
  const styleExample = bodyMatch ? bodyMatch[1].slice(0, 2000) : '';

  const systemPrompt = `Eres un experto redactor de contenido SEO para hostelería y restauración.
Adrián Pollán es consultor con 20+ años de experiencia en España, Francia, UK e Irlanda.
Su estilo es profesional, directo y basado en experiencia real operativa. Sin frases de marketing vacío.
Escribe como alguien que ha vivido los problemas desde dentro del sector.`;

  const userPrompt = `Escribe un artículo completo para el blog de Adrián Pollán con estos datos:

TÍTULO: "${title}"
KEYWORD PRINCIPAL: "${keyword}"

EJEMPLO DE ESTILO (inicio de artículo publicado):
${styleExample}

REQUISITOS:
- Español de España
- Tono: profesional, directo, sin clichés. Primera persona cuando corresponda.
- Estructura: párrafo de enganche potente → 4-6 secciones con <h2> descriptivos que incluyan keywords de forma natural
- Longitud: 900-1200 palabras
- HTML puro: <p>, <h2>, <strong>. Sin <h1>. Sin saltos de línea dobles dentro de la cadena JSON.
- Termina SIEMPRE con este párrafo exacto (no lo modifiques):
  <p><a href="https://diagnostico.adrianpollan.com">Haz el diagnóstico gratuito de tu restaurante →</a></p>
- Busca el ángulo más diferenciado y útil, no el más obvio

BLOQUE DE PLANTILLA (obligatorio, exactamente uno por artículo):
En el momento más relevante del artículo, donde el lector ya entiende el problema que se está tratando, inserta exactamente este bloque HTML adaptando solo el título y la descripción según el tema del artículo:

<div style="background-color:#f5f0e8;border-left:4px solid #BA7517;padding:24px 28px;margin:32px 0;border-radius:4px;"><p style="margin:0 0 8px 0;font-weight:700;color:#0f1923;font-size:1rem;">TÍTULO DE LA PLANTILLA MÁS RELEVANTE</p><p style="margin:0 0 16px 0;color:#0f1923;font-size:0.95rem;">DESCRIPCIÓN DE UNA LÍNEA QUE CONECTA EL PROBLEMA DEL ARTÍCULO CON LO QUE RESUELVE LA PLANTILLA</p><a href="/herramientas/plantillas" style="background-color:#BA7517;color:#ffffff;padding:10px 20px;text-decoration:none;font-size:0.9rem;font-weight:600;border-radius:4px;display:inline-block;">Ver plantilla →</a></div>

Elige el título según el tema del artículo:
- Artículos sobre costes, recetas, food cost, precios o márgenes por plato → título: Escandallo y Calculadora de Precios
- Artículos sobre carta, rentabilidad de platos o ingeniería de menú → título: Plantilla de Ingeniería de Menú
- Artículos sobre inventario, proveedores, stock o compras → título: Control de Inventario y Pedidos Sugeridos
- Artículos sobre finanzas, KPIs, resultados mensuales o rentabilidad global → título: Cuadro de Mando Financiero
- Artículos sobre operaciones, turnos, equipo, checklists o aperturas → título: Kit de Gestión Operativa
- Artículos sobre gestión global, consultoría o múltiples áreas → título: Suite Completa: Las 5 Plantillas de Gestión

Inserta solo un bloque por artículo. No lo pongas al final: ponlo en el momento del texto donde el lector siente más el dolor del problema.

CATEGORÍA (elige exactamente una de estas cuatro):
- "Rentabilidad" → costes, márgenes, food cost, labour cost, prime cost, carta, precios, escandallo
- "Equipos"      → gestión de personal, liderazgo, formación, cultura, turnos, autonomía
- "Aperturas"    → abrir un restaurante, errores en apertura, local, inversión, planificación
- "El Método"    → metodología ADRIÁN, sistemas de gestión, procesos, operativa integral

Responde ÚNICAMENTE con JSON válido, sin markdown, sin texto adicional:
{
  "slug": "slug-en-espanol-sin-acentos-ni-puntuacion",
  "excerpt": "Meta descripción de máximo 155 caracteres que incluya la keyword",
  "category": "Rentabilidad",
  "readTime": "8 min",
  "body": "HTML completo como cadena JSON (los saltos de línea reales son válidos)"
}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:      'claude-opus-4-7',
      max_tokens: 8192,
      system:     systemPrompt,
      messages:   [{ role: 'user', content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API ${res.status}: ${err}`);
  }

  const data = await res.json();
  const raw  = data.content[0].text.trim();

  // Eliminar fences de markdown si Claude los incluyó por error
  const jsonStr = raw
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  let article;
  try {
    article = JSON.parse(jsonStr);
  } catch {
    throw new Error(`Claude no devolvió JSON válido:\n${raw.slice(0, 600)}`);
  }

  // Validaciones de seguridad
  const validCategories = ['Rentabilidad', 'Equipos', 'Aperturas', 'El Método'];
  if (!validCategories.includes(article.category)) article.category = 'Rentabilidad';

  const minutes = (article.readTime || '').replace(/\D/g, '');
  article.readTime = (minutes || '8') + ' min';

  return article;
}

// ── Unsplash: búsqueda de imagen ──────────────────────────────────────────────

/**
 * Builds a list of Unsplash search queries from specific → generic.
 * Strips Spanish stop words and accents so Unsplash (indexed in English)
 * gets cleaner terms. Falls back to general hospitality queries.
 */
function buildUnsplashQueries(keyword, title) {
  const stopWords = new Set([
    'como', 'que', 'por', 'qué', 'cómo', 'es', 'el', 'la', 'los', 'las',
    'un', 'una', 'de', 'en', 'y', 'o', 'a', 'al', 'del', 'su', 'tu', 'mi',
    'sin', 'con', 'para', 'mas', 'no', 'se', 'si', 'hay', 'son', 'ser',
    'esta', 'este', 'pero', 'solo', 'cada', 'todo', 'todos', 'muy', 'más',
    'cuando', 'tiene', 'hay', 'hacer', 'reducir', 'mejorar', 'gestionar',
  ]);

  const normalize = str =>
    str.toLowerCase()
       .normalize('NFD').replace(/[̀-ͯ]/g, '')
       .replace(/[^a-z0-9\s]/g, ' ')
       .replace(/\s+/g, ' ').trim();

  const keyTerms = normalize(keyword)
    .split(' ')
    .filter(w => w.length > 3 && !stopWords.has(w));

  const titleTerms = normalize(title)
    .split(' ')
    .filter(w => w.length > 3 && !stopWords.has(w));

  const queries = [];

  // 1. Top 2 keyword terms + "restaurant" (most targeted)
  if (keyTerms.length >= 2) {
    queries.push(`${keyTerms[0]} ${keyTerms[1]} restaurant`);
  } else if (keyTerms.length === 1) {
    queries.push(`${keyTerms[0]} restaurant kitchen`);
  }

  // 2. Top 2 title terms + "hospitality" (alternate angle)
  if (titleTerms.length >= 2) {
    const unique = titleTerms.filter(t => !keyTerms.slice(0, 2).includes(t));
    if (unique.length >= 1) {
      queries.push(`${unique[0]} ${titleTerms[0]} hospitality food`);
    }
  }

  // 3. First keyword term + food/cooking context
  if (keyTerms.length >= 1) {
    queries.push(`${keyTerms[0]} food cooking professional`);
  }

  // 4. Generic fallbacks with variety to avoid always hitting the same popular photos
  queries.push('restaurant professional kitchen chef');
  queries.push('hospitality food service gastronomy');
  queries.push('restaurant business management table');

  // Deduplicate while preserving order
  return [...new Set(queries)];
}

/**
 * Returns a Set of Unsplash CDN base paths already stored in blog.ts.
 * Captures everything after "images.unsplash.com/" and before "?" so it works
 * for both old numeric IDs (photo-1234567890) and new alphanumeric IDs.
 */
function getUsedImagePaths() {
  const content = readFileSync(BLOG_FILE, 'utf8');
  return new Set(
    [...content.matchAll(/https:\/\/images\.unsplash\.com\/([^?"]+)\?/g)].map(m => m[1])
  );
}

/** Extracts the CDN base path from a photo's urls.raw (works for all ID formats). */
function cdnBasePath(photo) {
  // urls.raw is always the authoritative CDN URL — strip Unsplash's own query params
  return photo.urls.raw.split('?')[0].replace('https://images.unsplash.com/', '');
}

async function searchUnsplash(query, accessKey) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=20&orientation=landscape&client_id=${accessKey}`;
  const res  = await fetch(url);
  if (!res.ok) throw new Error(`Unsplash API ${res.status} for query "${query}"`);
  const data = await res.json();
  return data.results ?? [];
}

async function findImage(keyword, title, accessKey) {
  if (!accessKey) {
    console.warn('⚠️  UNSPLASH_ACCESS_KEY no encontrada — se usará imagen placeholder.');
    console.warn('   Añádela a .env.local para obtener una imagen real.\n');
    return 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1792&q=80';
  }

  const queries   = buildUnsplashQueries(keyword, title);
  const usedPaths = getUsedImagePaths(); // CDN base paths already in blog.ts

  for (const query of queries) {
    console.log(`🖼️  Unsplash query: "${query}"`);
    const results = await searchUnsplash(query, accessKey);

    // Use urls.raw base path for dedup — works for any Unsplash photo format
    const photo = results.find(p => !usedPaths.has(cdnBasePath(p)));

    if (photo) {
      const basePath = cdnBasePath(photo);
      const url = `https://images.unsplash.com/${basePath}?auto=format&fit=crop&w=1792&q=80`;
      console.log(`   ✔ Selected: ${basePath}`);
      return url;
    }

    console.log(`   — All results already used, trying next query...`);
  }

  throw new Error('No se encontró ninguna imagen sin duplicar tras probar todas las queries de Unsplash.');
}

// ── Inserción en blog.ts ──────────────────────────────────────────────────────

function insertArticle({ slug, title, excerpt, category, readTime, coverImage, body }) {
  let content = readFileSync(BLOG_FILE, 'utf8');

  if (content.includes(`slug: "${slug}"`)) {
    throw new Error(`El slug ya existe: ${slug}`);
  }

  // Escapar caracteres que romperían el template literal
  const safeBody = body
    .replace(/`/g,    '\\`')
    .replace(/\$\{/g, '\\${');

  const entry = `  {
    slug: "${slug}",
    title: "${title.replace(/"/g, '\\"')}",
    excerpt:
      "${excerpt.replace(/"/g, '\\"')}",
    category: "${category}",
    date: "${today()}",
    readTime: "${readTime}",
    coverImage:
      "${coverImage}",
    body: \`${safeBody}\`,
  },\n`;

  const marker = 'export const blogPosts: BlogPost[] = [';
  const idx    = content.indexOf(marker);
  if (idx === -1) throw new Error('No se encontró blogPosts en blog.ts');

  const afterMarker = content.indexOf('\n', idx + marker.length) + 1;
  content = content.slice(0, afterMarker) + entry + content.slice(afterMarker);
  writeFileSync(BLOG_FILE, content, 'utf8');
  console.log('✅  Artículo insertado en blog.ts');
}

// ── Git ───────────────────────────────────────────────────────────────────────

function commitAndPush(title, extraFiles = []) {
  // Fichero temporal para el mensaje — evita problemas de escaping en shell
  const msgFile = join(__dirname, '.git', '_tmp_commit_msg');
  writeFileSync(
    msgFile,
    `Blog: nuevo artículo — ${title}\n\nCo-Authored-By: Claude Opus 4 <noreply@anthropic.com>`,
    'utf8'
  );
  try {
    const files = ['src/data/blog.ts', ...extraFiles].join(' ');
    execSync(`git add ${files}`, { stdio: 'inherit' });
    execSync(`git commit -F "${msgFile}"`, { stdio: 'inherit' });
    execSync('git push',                   { stdio: 'inherit' });
    console.log('🚀  Push a GitHub completado');
  } finally {
    try { unlinkSync(msgFile); } catch {}
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  let title   = process.argv[2]?.trim();
  let keyword = process.argv[3]?.trim();

  // ── Modo pipeline: sin argumentos, lee pipeline.json ─────────────────────
  let pipelineMode = false;
  let pipelinePath, pipelineRemaining;

  if (!title || !keyword) {
    pipelinePath = join(__dirname, 'pipeline.json');
    let pipeline;
    try {
      pipeline = JSON.parse(readFileSync(pipelinePath, 'utf8'));
    } catch {
      console.error('❌  Sin argumentos y pipeline.json no encontrado o inválido.');
      console.error('    Uso: node create-article.mjs "Título" "keyword"');
      process.exit(1);
    }

    if (!pipeline.length) {
      console.log('📋  pipeline.json está vacío. No hay artículos pendientes.');
      process.exit(0);
    }

    ({ title, keyword } = pipeline[0]);
    title   = title.trim();
    keyword = keyword.trim();
    pipelineRemaining = pipeline.slice(1);
    pipelineMode      = true;

    console.log(`📋  Pipeline: ${pipeline.length} artículo(s) pendiente(s)`);
  }
  // ─────────────────────────────────────────────────────────────────────────

  const ANTHROPIC_API_KEY   = process.env.ANTHROPIC_API_KEY;
  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

  if (!ANTHROPIC_API_KEY) {
    console.error('❌  ANTHROPIC_API_KEY no encontrada. Añádela a .env.local');
    process.exit(1);
  }

  console.log(`\n📝  Creando artículo: "${title}"\n`);

  try {
    const article = await generateArticle(title, keyword, ANTHROPIC_API_KEY);
    article.title = title; // siempre usar el título exacto que pasaste

    console.log(`   Categoría : ${article.category}`);
    console.log(`   Slug      : ${article.slug}`);
    console.log(`   Excerpt   : ${article.excerpt}`);
    console.log(`   ReadTime  : ${article.readTime}`);

    article.coverImage = await findImage(keyword, title, UNSPLASH_ACCESS_KEY);
    console.log(`   Imagen    : ${article.coverImage}`);

    insertArticle(article);

    // Actualizar pipeline.json antes del commit para incluirlo en el mismo push
    if (pipelineMode) {
      writeFileSync(pipelinePath, JSON.stringify(pipelineRemaining, null, 2) + '\n', 'utf8');
      console.log(`📋  pipeline.json actualizado (${pipelineRemaining.length} artículo(s) restante(s))`);
    }

    commitAndPush(title, pipelineMode ? ['pipeline.json'] : []);

    console.log(`\n✅  Publicado → https://adrianpollan.com/blog/${article.slug}\n`);
  } catch (err) {
    console.error('\n❌  Error:', err.message);
    process.exit(1);
  }
}

main();
