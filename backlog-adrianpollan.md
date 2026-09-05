# Backlog maestro — adrianpollan.com
Última actualización: junio 2026 (contenido base, íntegro). Fusión generada el 5 de septiembre de 2026 incorporando la Auditoría SEO Competitiva del 4 sept 2026 como sección "0" (ítems SEO1-SEO13) y G26-G33 — renumerados desde el H1-H13 y G1-G8 originales del informe de auditoría para no colisionar con los IDs ya existentes en este documento (H1-H15 y G1-G25). Fusión de backlog-adrianpollan.md + backlog-adrianpollan-CANONICAL.md, pendiente de revisión antes de sustituir el archivo original.

---

## 0. CRÍTICO — Hallazgos de la auditoría SEO (septiembre 2026)

Diagnóstico global del informe: 72/100. Base técnica fuerte, pero la autoridad y la intención comercial estaban repartidas entre tres páginas, y no hay medición conectada para decidir con datos.

| # | Descripción | Impacto | Esfuerzo | Estado |
|---|-------------|---------|----------|--------|
| SEO1 | Elegir una única URL como pilar comercial transaccional entre `/`, `/consultoria-restaurantes-hosteleria` y `/servicios`. Redirigir la(s) otra(s), actualizar navegación global, sitemap y enlaces internos | Muy alto (ICE 75) | Medio | **Hecho y verificado en vivo (5 sept).** Decisión tomada con datos reales de GSC (últimos ~4 meses, el sitio es nuevo): `/consultoria-restaurantes-hosteleria` tuvo picos de posición 1-1.6 en varias fechas; `/servicios` y sus subpáginas nunca bajaron de posición ~60-80. Ambas con 0 clics en el periodo — normal para un dominio de 4 meses sin backlinks, no es una señal de alarma aislada. `/consultoria-restaurantes-hosteleria` queda como pilar único; `/servicios` (índice) redirige 301 hacia ella, confirmado sin bucles en producción. Las 3 subpáginas de servicio específico se conservaron intactas y cargando bien, ver G32 |
| SEO2 | Conectar y exportar Search Console, GA4 y eventos cross-domain con diagnostico.adrianpollan.com (inicio, finalización, score, clic a Calendly, reserva, lead cualificado) | Muy alto (ICE 75) | Bajo | **Hecho y verificado en vivo (5 sept), la parte de GA4/eventos.** Los 6 eventos existen y se comprobaron uno por uno en producción: `diagnostico_iniciado`, `diagnostico_completado` (con parámetro `score_global`), `clic_calendly`, `reserva_confirmada`, `lead_cualificado`. Ver detalle completo en "Completado". **Sigue pendiente de este ítem:** la parte de Search Console (ver SEO3) y la exportación/conexión cruzada de esos datos fuera de GA4 (ej. a un dashboard); esto solo cerró la medición de eventos en el propio GA4 |
| SEO3 | Verificar directamente en Search Console: robots.txt devuelve 200, no bloquea rutas útiles, declara el sitemap; sitemap solo con URLs 200 indexables; estado de cobertura (indexadas, descubiertas sin indexar, duplicadas, soft 404) | Alto | Bajo | **Hecho y verificado el 5 sept.** robots.txt y sitemaps limpios en los dos dominios (ver "Completado" para el detalle). Cobertura revisada con Adrián directamente en Search Console (propiedad de dominio adrianpollan.com, incluye el subdominio de diagnóstico): 68 indexadas (coincide con las 68 URLs de ambos sitemaps) + 87 no indexadas, desglosadas y explicadas una por una en "Completado". De ahí salieron 3 acciones nuevas: ver G33 (redirect www→apex), y los dos puntos sueltos de artículos de blog con slug cambiado sin redirect (dentro de G33) |
| SEO4 | Reescribir titles y meta descriptions de las 15 URLs clave (home actual: 207 caracteres de description, muy por encima de los 145-160 recomendados). El informe trae propuestas de partida para home, pilar, auditoría, operativa, aperturas, propietarios, hoteles, herramientas y blog | Alto | Bajo | **Hecho (5 sept), pendiente de desplegar y verificar en vivo.** Ver "Completado" para el detalle y la nota sobre el origen del texto |
| SEO5 | Reforzar enlazado interno hacia páginas comerciales: cada artículo debe enlazar un pilar informativo y una única página comercial con ancla contextual; cada herramienta debe enlazar su guía, un caso y el servicio relacionado | Alto | Bajo | Pendiente — la consolidación de SEO1 ya redirigió los enlaces genéricos hacia el pilar único, falta el resto del enlazado contextual |
| SEO6 | Citar fuentes primarias (INE, Seguridad Social, Eurostat, Hostelería de España, Observatorio de Empleo, sectoriales) en los ~10 artículos con cifras de facturación, coste laboral, absentismo o rotación sin fuente visible; si la cifra es experiencia propia, etiquetarla como muestra interna con número de negocios, periodo y definición | Alto | Medio | Pendiente |
| SEO7 | Corregir el contraste insuficiente señalado por Lighthouse (distinto del contraste del bloque FAQ ya corregido) y revisar el elemento responsable del LCP móvil (2,7s, por encima del umbral bueno de 2,5s de web.dev) | Medio | Bajo | Pendiente |
| SEO8 | Añadir imagen Open Graph a las páginas comerciales que no la tienen (la home y los artículos ya la tienen completa) | Medio | Bajo | Pendiente |
| SEO9 | Validar las 4 plantillas FAQPage con el Schema Markup Validator (validator.schema.org), no solo con el Rich Results Test de Google (que dejó de mostrar resultados de FAQ para todos los sitios desde mayo 2026, así que "sin resultados" ahí no indica error) | Medio | Bajo | Pendiente |
| SEO10 | Reclamar el enlace en el artículo de Hosteltur que ya menciona a Adrián pero no confirma link a adrianpollan.com en el cuerpo o la ficha — es la oportunidad de enlace editorial más fácil disponible ahora mismo | Alto | Bajo | Pendiente |
| SEO11 | Convertir los casos de éxito actuales en páginas individuales verificables (contexto, línea base, diagnóstico, intervención, resultado con métrica y ventana de medición, evidencia, limitaciones, CTA). Crear al menos 3: reducción de food cost, apertura, transformación F&B hotelero | Medio-alto (ICE 60) | Medio | Pendiente |
| SEO12 | Publicar los hubs de contenido que faltan: Equipos y liderazgo (coste de personal, productividad, turnos, onboarding, rotación, incentivos, SOP), Apertura de restaurantes (presupuesto, punto de equilibrio, carta inicial, soft opening), F&B hotelero (P&L, desayuno, banquetes, ingeniería de menú, upselling, KPI), Herramientas de gestión (calculadoras, plantillas, benchmarks, glosario) | Medio | Alto | Pendiente |
| SEO13 | Dividir el índice del blog (39 artículos en una sola página) en categorías o hubs navegables con paginación o filtros rastreables, con introducciones originales por categoría | Medio | Medio | Pendiente |

**Plan editorial de 90 días propuesto por el informe** (publicar menos piezas, con mayor capacidad de posicionar/convertir/recibir enlaces): actualizar coste de personal con fuentes oficiales, guía "cuánto cuesta abrir un restaurante en España", guía de punto de equilibrio con calculadora, caso completo de reducción de food cost, pilar de rentabilidad F&B hotelero, guía SOP con plantilla descargable, estudio propio con datos anonimizados del diagnóstico, página comparativa honesta (consultor vs consultora vs curso).

---

## Completado (no requiere acción)

*Nota de fusión: esta sección procede íntegramente de la auditoría SEO de septiembre 2026 (backlog-adrianpollan-CANONICAL.md). El backlog original (junio 2026) no tenía una sección "Completado" separada — sus ítems completados siguen marcados inline con ✅/⛔/⏸/🔄 dentro de las secciones A-H más abajo, tal cual estaban, y no se duplican aquí.*

- **SEO4 — Titles y meta descriptions reescritos en las 15 URLs clave (5 sept 2026), hecho en el código, pendiente de desplegar y verificar en producción:** `/`, `/consultoria-restaurantes-hosteleria`, `/consultor-restaurantes`, `/gestion-operativa-restaurantes`, `/abrir-un-restaurante`, `/para-propietarios-de-restaurantes`, `/para-hoteles-fb`, `/para-emprendedores`, `/consultoria-fb-hoteles`, `/casos-reales`, `/blog`, `/herramientas`, `/hablemos`, `/rentabilidad-restaurantes`, `/sobre-mi`. Las 15 descriptions quedan entre 145-160 caracteres (antes: 149-207, la mayoría por encima del límite recomendado; la home tenía 207). Los 15 titles quedan entre 44-60 caracteres, verificados sin duplicados entre sí para no generar canibalización de keywords, y sin repetir el title del pilar comercial único que dejó SEO1 (`/consultoria-restaurantes-hosteleria`). Las páginas de audiencia (`para-propietarios-de-restaurantes`, `para-hoteles-fb`, `para-emprendedores`) se diferenciaron explícitamente de las páginas de servicio equivalentes (`consultor-restaurantes`, `consultoria-fb-hoteles`, `abrir-un-restaurante`) para evitar solaparse en intención de búsqueda. **Nota importante para Adrián:** el backlog original menciona que "el informe trae propuestas de partida" para estas 9 páginas, pero esa auditoría SEO no estaba disponible como documento en esta sesión (solo su resumen en este backlog), así que los 30 textos (title + description x 15) se redactaron desde cero siguiendo buenas prácticas de longitud y el contenido real de cada página, no copiando la propuesta original del informe. Si tienes el informe a mano, vale la pena comparar antes de dar esto por cerrado del todo. Verificado: JSX balanceado en los 15 archivos (conteo de llaves), sin errores de sintaxis visibles; no se pudo compilar con `tsc`/`next build` porque solo se subieron los 15 `page.tsx`, no el repo completo. **Pendiente real:** Adrián debe aplicar estos cambios sobre su repo completo (los archivos están en el zip entregado) y desplegar; después conviene revisar el CTR en Search Console a las 2-3 semanas para confirmar impacto.
- Bots de IA (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) confirmados sin bloquear en robots.txt.
- `public/llms.txt` creado y en producción (nota del informe: es recomendación exploratoria para agentes, no prioridad SEO frente a arquitectura/evidencia/enlaces/medición).
- FAQ visible + schema FAQPage añadidos en 4 páginas pilar (consultor-restaurantes, gestion-operativa-restaurantes, abrir-un-restaurante, consultoria-fb-hoteles), con contraste de color corregido.
- Reescritura de 3 aperturas de sección para llevar la respuesta directa al principio (rentabilidad-restaurantes, consultoria-restaurantes-hosteleria, abrir-un-restaurante).
- Link de Calendly corregido tanto en el código (lib/email.ts, app/diagnostico/[id]/page.tsx) como en la automatización de Mailchimp.
- Base técnica confirmada fuerte por la auditoría: HTTPS/canonical coherente, indexación permitida, H1 único por página, imágenes con alt, datos estructurados amplios en home (Person, ProfessionalService, WebSite, FAQPage, Service), Lighthouse 96 móvil / 100 escritorio.
- Ya existen 2 pilares temáticos (rentabilidad-restaurantes, gestion-operativa-restaurantes), 39 artículos de blog, y un ecosistema de herramientas gratuitas y de pago, valorado por el informe como ventaja sobre los competidores directos.
- **Consolidación de arquitectura comercial (5 sept 2026), hecha y verificada en vivo:** `/servicios` (índice) redirige 301 a `/consultoria-restaurantes-hosteleria`, que queda como único pilar transaccional. Navigation.tsx, Footer.tsx, home, consultor-restaurantes, consultoria-fb-hoteles, y las 3 páginas para-propietarios/para-hoteles-fb/para-emprendedores actualizados (el menú sigue mostrando "Servicios" como texto, solo cambió el destino). Sitemap actualizado (fuera la línea de `/servicios`, dentro las 3 subpáginas específicas). Las subpáginas `/servicios/auditoria-fb-restaurantes`, `/servicios/consultoria-operativa-restaurantes` y `/servicios/apertura-restaurante` se conservaron intactas (no redirigidas), igual que sus enlaces específicos en `blog.ts` y `api/chat/route.ts`, tal como pedía explícitamente el informe para no perder intención transaccional específica. Adrián confirmó en producción: redirect sin bucles, menú correcto, subpáginas cargando con normalidad.
- **Tracking GA4 completo en diagnostico.adrianpollan.com (5 sept 2026, repo `diagnostico-restaurante`), los 6 eventos de SEO2 hechos y verificados uno por uno en producción, con datos reales, no solo revisando código:**
  - `diagnostico_completado` (commits 3266ce5, f1fd955): el evento estaba implementado pero nunca llegaba a GA4. Causa raíz de dos partes: (1) el script de GA4 en `app/layout.tsx` cargaba con `strategy="lazyOnload"`, demasiado tarde frente al `useEffect` del tracker — corregido a `afterInteractive`; (2) incluso con el orden corregido, el tracker empujaba el evento directo al array `window.dataLayer` en vez de llamar a `window.gtag(...)` — verificado con `fetch` interceptado que un push directo al array ya no lo recoge gtag.js una vez cargado (solo sirve de cola *antes* de cargar). Se creó `lib/gtag.ts` con `trackEvent()`, que espera a que `window.gtag` exista y lo llama directamente. Confirmado en producción: la petición de red con `en=diagnostico_completado` sale correctamente.
  - `diagnostico_iniciado` (commit 39c0e33): no existía. Se añadió en `components/DiagnosticForm.tsx`, disparado solo en un inicio genuino (no al retomar una sesión guardada en localStorage). Confirmado en producción.
  - `clic_calendly` (commit 39c0e33): no existía (los dos enlaces a Calendly no tenían tracking). Nuevo componente `components/CalendlyLink.tsx` con parámetro `position` para distinguir los dos botones de la página de resultado. Confirmado en producción. Nota: GA4 ya rastreaba estos clics por su cuenta vía "medición mejorada" de clics salientes (`gtm.linkClick`), pero sin nombre de evento propio ni distinción de botón.
  - `score_global` como parámetro de `diagnostico_completado` (commit 39c0e33), no como evento aparte (decisión de Adrián): permite filtrar en GA4 por rango de score. Confirmado en producción (`score_global: 42` en un diagnóstico real).
  - `reserva_confirmada` (commits 93d1994, 34a7639): antes solo había un `<a>` normal a Calendly, sin forma de saber si la persona reservó de verdad. Adrián decidió pasar a widget emergente de Calendly (`Calendly.initPopupWidget`, `components/CalendlyLink.tsx` ahora es un `<button>`) y escuchar el `postMessage` `calendly.event_scheduled` que manda Calendly al completarse una reserva real, en `components/CalendlyBookingListener.tsx` (montado una única vez por página para no duplicar el conteo). Incluye validación de `e.origin === "https://calendly.com"` para que un mensaje falso no cuente como reserva. Confirmado en producción: el widget abre correctamente (iframe de Calendly inyectado) y un `postMessage` falso con origen incorrecto fue ignorado como se esperaba. Cambio de UX aceptado por Adrián: los botones ya no son enlaces reales, ahora son botones que abren un modal.
  - `lead_cualificado` (commit 39c0e33): definición decidida por Adrián: score global por debajo de 55 (mismo corte que ya usa la UI para "Necesita atención") Y cargo de quien responde es "Propietario" o "Socio" (no un empleado sin poder de decisión). Se calcula en `app/diagnostico/[id]/page.tsx` a partir de `record.responses.cargo` y `d.scoreGlobal`. Confirmado en producción con un diagnóstico real que cumple ambas condiciones.

  **Pendiente relacionado, fuera de esto:** el tema de consentimiento de cookies (mencionado por Claude Code durante el primer fix, sin más detalle registrado); y la parte de exportación/conexión cruzada de SEO2 fuera del propio GA4 (ej. a un dashboard externo).

- **Auditoría de Search Console — SEO3 (5 sept 2026), hecha con Adrián revisando el informe "Páginas" en vivo, propiedad de dominio adrianpollan.com (incluye diagnostico.adrianpollan.com):**
  - robots.txt y sitemap.xml verificados directamente (sin necesidad de GSC): ambos dominios devuelven 200, declaran su sitemap correctamente, y no bloquean nada que no sea intencional (`/api/`, páginas legales, y las landings de espera `/metodo-dirige` y `/herramientas-libro`, ya conocidas). Se comprobó una por una la respuesta HTTP real (sin seguir redirecciones) de las 68 URLs de ambos sitemaps: las 68 devuelven 200 directo, ninguna redirección ni error. Método validado con un control: `/servicios` (que sí redirige) se detectó correctamente como redirect con la misma prueba.
  - Cobertura: 68 indexadas (coincide exacto con las 68 URLs de los sitemaps) + 87 no indexadas. Desglose de las 87, revisado con ejemplos reales, no solo conteos:
    - **Causa raíz nueva encontrada — falta redirect www → apex (afecta ~49-57 de las 87):** las 49 URLs de "Alternative page with proper canonical tag" son TODAS `www.adrianpollan.com/...`, sirviendo contenido duplicado con canonical tag en vez de redirigir. Pero se confirmó con ejemplos que ALGUNAS rutas con www sí redirigen bien (`www.adrianpollan.com/hablemos`, `www.adrianpollan.com/herramientas/checklist-apertura`, y sobre todo la prueba definitiva: la versión sin-www de un slug viejo de blog redirige bien pero la versión CON www del mismo slug no redirige, solo canonicaliza). Conclusión: el redirect de slugs viejos y el redirect www→apex son dos mecanismos separados que no están coordinados; falta una regla de dominio en Vercel que mande TODO `www.adrianpollan.com/*` a `adrianpollan.com/*` antes de que se evalúen los redirects de slugs. **Acción pendiente, ver G33.**
    - **"Redirect error" (4):** `como-gestionar-proveedores-restaurante-negociar-mejores-precios`, `para-hoteles-fb`, `calculadora-prime-cost`, `/servicios` — las 4 con "last crawled" de mayo 2026, antes de la consolidación de arquitectura del 5 sept. Probadas directamente ahora: las 4 cargan bien, sin redirect roto (`/servicios` en particular ya se verificó reparado el mismo 5 sept). Es un rastreo obsoleto de Google, no un problema actual. **Acción:** Adrián debe forzar "Solicitar indexación" en Inspección de URLs para las 4, en vez de esperar el rastreo natural de Google.
    - **"Not found (404)" (8):** 4 son artefactos de build de Next.js (`_next/static/chunks/*.js`, `*.woff2` con `?dpl=...`), churn normal de cada despliegue, sin acción. Los otros 4 son contenido real sin redirect: `rotacion-personal-hosteleria-causas-reducir` (slug viejo, ahora es `como-reducir-rotacion-personal-restaurante`, en www y sin www), `que-es-el-prime-cost-y-por-que-es-el-indicador-mas-importante` (slug viejo, ahora `que-es-el-prime-cost-y-como-controlarlo-en-tu-restaurante`), y `el-metodo-adrian-principios-fundamentales` (no está en el sitemap actual; Adrián confirmó que se perdió sin querer, pero no le preocupa por estar relacionado con el libro, aún no publicado — se deja como está, sin redirect). **Acción, ver G33** (solo aplica a los otros dos slugs de blog).
    - **"Crawled - currently not indexed" (19) y "Discovered – currently not indexed" (0):** sin acción — es criterio de calidad/relevancia propio de Google para un dominio nuevo sin backlinks (ya confirmado independientemente por GSC el 4 sept), no un bloqueo técnico. Se resuelve con el trabajo de autoridad ya planeado en la sección D, no tocando código.
    - **"Blocked by robots.txt" (1):** esperado, coincide con las páginas bloqueadas a propósito.

---

## A. SEO ON-PAGE Y ARQUITECTURA

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| A1 | Revisar H1 y encabezados de la home para incluir variaciones literales de "consultoría de restaurantes", "consultoría de hostelería", "consultoría gastronómica" y "consultor de hostelería" | Posicionar keywords de cabecera sin perder conversión | Alta | Ninguna | Bajo | Pendiente — Verificado 5 sept: las frases objetivo no están en ningún H1/H2 real de la home, solo en el JSON-LD (name del schema) y en 2 alt de imagen. No cumple el criterio literal del ítem. |
| A2 | Crear página pilar larga "/consultoria-restaurantes-hosteleria" con copy extenso, secciones de beneficios, FAQs, resumen del Método ADRIÁN y CTAs | Atacar directamente las keywords transaccionales principales | Alta | A1 | Alto | ✅ Completado |
| A3 | Revisar titles SEO y meta descriptions de todas las páginas | Mejorar CTR en SERPs | Alta | Ninguna | Medio | ✅ Completado |
| A4 | Continuar indexación en Search Console (cuota diaria de 10-15 URLs) | Acelerar indexación de páginas publicadas | Media | Ninguna | Bajo | 🔄 En progreso |
| A5 | Enlazado interno: cada artículo enlaza a página pilar, herramienta, diagnóstico y servicio | Reforzar clusters SEO y distribuir autoridad | Media | A2 | Medio | ✅ Completado |

---

## B. PRUEBA SOCIAL Y AUTORIDAD

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| B1 | Crear guión de preguntas para recopilar testimonios (5-7 preguntas) | Obtener testimonios con datos reales | Alta | Adrián recopila clientes | Bajo | Pendiente |
| B2 | Solicitar testimonios a clientes reales (mínimo 3-6, con nombre y cargo) | Prueba social verificable | Alta | B1 | Medio | Pendiente |
| B3 | Implementar sección de testimonios en home y servicios | Aumentar credibilidad en tráfico frío | Alta | B2 | Medio | Pendiente |
| B4 | Crear sección de logos de clientes | Señal visual de autoridad | Media | Adrián confirma permisos | Bajo | Pendiente |
| B5 | Añadir contexto al claim "100+ negocios acompañados" | Blindar el claim ante visitantes escépticos | Media | Ninguna | Bajo | Parcialmente completado — Verificado 5 sept: el claim "100+ negocios" sí tiene contexto visible en consultor-restaurantes y consultoria-restaurantes-hosteleria ("Experiencia acumulada en dirección, operaciones, aperturas y consultoría"), pero falta periodo, definición de "negocio" y forma de verificación. No aparece en la home. |
| B6 | Añadir bloque de recomendaciones de LinkedIn (3-4 recomendaciones verificables del perfil) | Prueba social de alta credibilidad | Media | Ninguna | Medio | Pendiente |

---

## C. CONTENIDOS BLOG Y GUÍAS

| # | Descripción | Keyword principal | Objetivo | Prioridad | Esfuerzo | Estado |
|---|-------------|-------------------|----------|-----------|----------|--------|
| C1 | "Cómo saber si tu restaurante necesita un consultor de hostelería" | consultor hostelería | Atraer leads en consideración | Alta | Medio | ✅ Completado |
| C2 | "Guía completa para usar la calculadora de escandallos paso a paso" | calculadora escandallo | Captar tráfico long tail | Alta | Medio | ✅ Completado |
| C3 | "Checklist de apertura de restaurante: los 24 puntos que no puedes fallar" | checklist apertura | SEO + activar herramienta | Alta | Medio | ✅ Completado |
| C4 | "Qué es el prime cost y cómo controlarlo en tu restaurante" | prime cost restaurante | SEO informacional + calculadora | Alta | Medio | ✅ Completado |
| C5 | "Errores críticos antes de abrir un restaurante" | errores abrir restaurante | Atraer emprendedores | Alta | Medio | ✅ Completado |
| C6 | "Cómo calcular el food cost de tu restaurante correctamente" | calcular food cost | SEO informacional | Media | Medio | ✅ Completado |
| C7 | "Qué es el labour cost en hostelería y por qué se te dispara" | labour cost hostelería | SEO informacional | Media | Medio | ✅ Completado |
| C8 | "Cómo reducir la rotación de personal en tu restaurante" | rotación personal | SEO + consultoría operativa | Media | Medio | ✅ Completado |
| C9 | "Revenue management en restaurantes: qué es y cómo aplicarlo" | revenue management | Autoridad + servicios | Media | Alto | ✅ Completado |
| C10 | "Cómo construir un equipo de restaurante que no dependa de ti" | gestión equipo | SEO + consultoría operativa | Media | Medio | ✅ Completado |
| C11 | "Guía para auditar proveedores de tu restaurante" | auditoría proveedores | SEO + herramienta auditoría | Baja | Medio | ⛔ No procede (duplicado con artículo existente) |
| C12 | "El Método ADRIÁN explicado: cómo gestionar un restaurante con criterio" | método gestión restaurantes | Autoridad de marca + libro | Baja | Alto | ⏸ Aparcado hasta lanzamiento del libro |

---

## D. PRESENCIA EN DIRECTORIOS Y LINK BUILDING

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| D1 | Identificar directorios especializados en consultoría gastronómica | Backlinks de nicho | Media | Ninguna | Bajo | 🔄 En progreso |
| D2 | Preparar email tipo para solicitar inclusión en directorios | Estandarizar outreach | Media | D1 | Bajo | 🔄 En progreso |
| D3 | Enviar solicitudes de inclusión a directorios identificados | Obtener backlinks | Media | D2 | Bajo | 🔄 En progreso |
| D4 | Identificar blogs y medios donde proponer guest posts (Caternews, Hosteltur, Qamarero) | Backlinks + visibilidad | Media | Ninguna | Bajo | Pendiente |
| D5 | Preparar y enviar propuestas de guest post | Posicionamiento como experto + backlinks | Media | D4 | Alto | Pendiente |
| D6 | Solicitar inclusión en listas de expertos en gestión de restaurantes | Visibilidad y backlinks | Baja | D4 | Bajo | Pendiente |

---

## E. MARCA Y MÉTODO ADRIÁN

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| E1 | Crear página "/metodo-adrian" | Reforzar diferenciación de marca | Alta | Ninguna | Alto | ⏸ Aparcado hasta lanzamiento del libro |
| E2 | Integrar referencias al Método ADRIÁN en home y servicios | Coherencia de marca | Media | E1 | Bajo | ⏸ Aparcado hasta lanzamiento del libro |
| E3 | Integrar referencias al Método ADRIÁN en página del libro | Conectar método con oferta | Media | E1 | Bajo | ⏸ Aparcado hasta lanzamiento del libro |
| E4 | Publicar portada del libro en web | Credibilidad en página del libro | Alta | Adrián entrega portada | Bajo | Pendiente |

---

## F. EMBUDO Y UX DE CAPTACIÓN

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| F1 | Newsletter semanal en Mailchimp con plantilla HTML y calendario de envíos | Activar lista de suscriptores | Alta | Ninguna | Medio | Pendiente |
| F2 | CTAs contextuales post-resultado en todas las herramientas | Convertir usuarios en leads | Alta | Ninguna | Medio | Parcialmente completado — Verificado 5 sept: las 4 herramientas sí muestran un CTA de captura de email tras el resultado (componente EmailCapture), pero el copy es genérico y no varía según el resultado del usuario (score, nivel). No es "contextual" en el sentido que pedía el ítem. |
| F3 | Sección "Resultados" en home con métricas concretas | Aumentar credibilidad | Media | Adrián proporciona casos | Alto | Pendiente (depende de Adrián) |
| F4 | Bloque visual del embudo: Diagnóstico → Sesión → Propuesta → Implementación | Clarificar el proceso para el visitante | Media | Ninguna | Medio | ✅ Completado |
| F5 | Lead magnets adicionales por segmento (plantilla escandallo, checklist prime cost) | Captar emails cualificados | Baja | Ninguna | Alto | ✅ Completado (plantillas de pago) |
| F6 | Unificar copy de "Qué pasa después del diagnóstico" en todas las páginas | Reducir fricción | Baja | Ninguna | Bajo | ✅ Completado |
| F7 | Crear página puente post-diagnóstico: "Tu score indica que el problema principal está en X. ¿Lo revisamos en 20 minutos?" con CTA directo a Calendly | Conectar diagnóstico con sesión de conversión | Alta | Ninguna | Medio | Pendiente |

---

## G. TÉCNICO Y MANTENIMIENTO

| # | Descripción | Objetivo | Prioridad | Dependencias | Esfuerzo | Estado |
|---|-------------|----------|-----------|--------------|----------|--------|
| G1 | Verificar cada lunes que el GitHub Actions de publicación de blog se ejecutó correctamente | Mantener pipeline activo | Alta | Ninguna | Bajo | 🔄 Recurrente activo |
| G2 | Continuar indexación en Search Console | Acelerar indexación | Media | Ninguna | Bajo | 🔄 En progreso |
| G3 | Verificar mensualmente el cron de Vercel de emails de seguimiento | Mantener secuencia de emails activa | Alta | Ninguna | Bajo | Obsoleto — ver G28. El cron y sendFollowupEmail se eliminaron en junio 2026 (commit 808bbd6), reemplazados por automatización de Mailchimp. |
| G4 | Actualizar pipeline.json del blog cuando la cola baje de 5 artículos | Mantener publicación automática | Media | Ninguna | Bajo | 🔄 Recurrente activo |
| G5 | Auditoría de seguridad y endpoints públicos (junio 2026): rate limit persistente en Upstash para /api/chat (fail-closed), /api/contact, /api/newsletter, /api/libro y /api/herramientas/email (fail-open); honeypot + validación de timing en todos los formularios públicos; validación de payload reforzada (el email solo se validaba con .includes("@")); recuperado endpoint /api/herramientas/email que estaba vivo en producción pero ausente del git local por desincronización entre main remoto y checkout local | Cerrar superficie de abuso de coste (Anthropic) y de reputación de email (Resend/Mailchimp) | Alta | Ninguna | Alto | Completado |
| G6 | Corregido dominio canónico en Vercel: www.adrianpollan.com estaba configurado como Production, invirtiendo el redirect respecto a lo que indica el código (metadataBase, sitemap, canonicals, todos en adrianpollan.com sin www) y respecto al historial de Search Console, que solo existe para el dominio sin www | Evitar pérdida de señal SEO acumulada y alinear panel de Vercel con código | Alta | Ninguna | Bajo | Completado |
| G7 | Verificar en Search Console (2-3 semanas tras G6) que no aparecen errores nuevos de cobertura, caída de impresiones o páginas marcadas como duplicadas/no canónicas tras el cambio de dominio Production en Vercel | Confirmar que el cambio de canónico no generó pérdida de señal SEO | Media | G6 completado | Bajo | Pendiente |
| G8 | GDPR: bloqueado la carga de GA4 y Microsoft Clarity hasta consentimiento real del usuario (antes el banner solo escribía en localStorage sin bloquear nada); invalidadas las decisiones de consentimiento previas al cambio, ya que no representaban consentimiento real bajo el comportamiento anterior; expiración de la decisión a 365 días | Cumplimiento real de consentimiento previo, no solo registro decorativo | Alta | Ninguna | Medio | Completado |
| G9 | Completado .env.example con las 9 variables que faltaban (RESEND_API_KEY, ANTHROPIC_API_KEY, CRON_SECRET, LEMONSQUEEZY_SIGNING_SECRET, MAILCHIMP_PLANTILLAS_AUDIENCE_ID, MAILCHIMP_HERRAMIENTAS_AUDIENCE_ID, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, UNSPLASH_ACCESS_KEY) | Evitar confusión de configuración al clonar el repo o incorporar nuevas máquinas | Media | Ninguna | Bajo | Completado |
| G10 | Eliminada página fantasma /diagnostico/[id] (tracking de GA4 sin conexión real, nunca enlazada desde ningún flujo, residuo de un commit del 22 de mayo que nunca se completó) | Evitar pantalla en blanco sin contexto para cualquier visita accidental | Baja | Ninguna | Bajo | Completado |
| G11 | Limpieza de código muerto: eliminadas dependencias @microsoft/clarity y @radix-ui/react-accordion (sin uso), componente ClarityScript.tsx (nunca montado), endpoint /api/cron/newsletter y src/lib/newsletter-emails.ts (sin caller, confirmado que no hay cron externo en Railway ni cron-job.org apuntando ahí), variable CRON_SECRET retirada de .env.example y de Vercel | Reducir superficie de mantenimiento y confusión de configuración | Baja | Ninguna | Bajo | Completado |
| G12 | /herramientas-libro expone contraseña y enlaces de Drive en el bundle del cliente. Mover a control server-side o enlaces firmados antes del lanzamiento del libro | Proteger contenido exclusivo una vez tenga valor real | Media | Fecha de lanzamiento del libro definida | Medio | Pendiente |
| G13 | Actualizar dependencias vulnerables reportadas por npm audit (postcss vía next, @babel/core, js-yaml) en la cadencia normal de actualización de Next, sin npm audit fix --force | Mantener dependencias al día sin romper compatibilidad | Baja | Ninguna | Bajo | Pendiente |
| G20 | Añadir textos alt descriptivos a todas las imágenes principales de la web | Mejorar SEO y accesibilidad | Media | Ninguna | Bajo | Pendiente |
| G14 | Cerrado XSS en /api/herramientas/email: el campo data (nombre de plato, nivel) se insertaba sin escapar en HTML antes de enviar por Resend, permitiendo HTML/JS arbitrario en emails enviados desde el dominio. Añadida función escapeHtml() aplicada en los puntos de interpolación; confirmado que renderChecklistBlocks() y /api/libro no tienen este riesgo (no interpolan datos de usuario en HTML) | Cerrar vector de XSS vía email que usaba el remitente legítimo del negocio | Alta | Ninguna | Bajo | Completado |
| G15 | Cerrado XSS en el blog: sanitización HTML por allowlist (sanitize-html) aplicada tanto en create-article.mjs (al generar) como en blog/[slug]/page.tsx (al renderizar), defensa en dos capas. Migrados los 26 bloques CTA de style= inline a clases CSS predefinidas (blog-cta-block, blog-cta-title, blog-cta-btn), con el atributo class restringido a esos valores exactos en la allowlist, evitando reabrir el vector a través de clases arbitrarias | Cerrar vector de XSS en contenido generado automáticamente y publicado sin revisión humana | Alta | Ninguna | Medio | Completado |
| G16 | Endurecido /api/contact: límite de tamaño de body (10KB) aplicado antes del parseo JSON (antes se parseaba sin límite previo), y validación de email reforzada con el mismo regex que ya usan contact/newsletter/libro/herramientas | Cerrar el último endpoint público con validación más débil que el resto | Baja | Ninguna | Bajo | Completado |
| G17 | Implementadas cabeceras de seguridad en next.config.ts: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, y Content-Security-Policy (script-src con unsafe-inline; frame-ancestors 'none', object-src 'none'; dominios externos exactos: www.clarity.ms + scripts.clarity.ms para el tag y SDK de Clarity, googletagmanager.com para GA4). Páginas se mantienen estáticas | Defensa en profundidad contra clickjacking, MIME sniffing, fuga de referrer, sin sacrificar rendimiento estático | Media | G14, G15 completados | Medio | Completado |
| G18 | Corregido bug en AnalyticsScripts.tsx: el atributo id="clarity" en el `<Script>` colisionaba con el global window.clarity (el navegador promueve elementos con id a propiedades de window), dejando el SDK de Clarity cargado pero inerte desde el commit del bloque GDPR (0905a3b). Cambiado a id="clarity-sdk". Detectado durante la verificación del bloque G17 | Restaurar tracking de Clarity, roto silenciosamente sin que las pruebas de Network del bloque GDPR lo detectaran (confirmaban la petición de red, no que el SDK quedara funcional) | Alta | Ninguna | Bajo | Completado |
| G19 | Lección de verificación: una prueba con Playwright que solo escucha el evento "request" (no "requestfailed") puede reportar éxito en una petición que la CSP bloqueó después de iniciarse, dando un falso positivo. Esto causó que se revirtiera por error un wildcard de CSP necesario para Clarity (scripts.clarity.ms), dejando el SDK bloqueado en producción durante un tiempo hasta detectarlo y corregirlo con los dos hosts explícitos | Documentar el punto ciego para evitar que se repita en futuras verificaciones de CSP | Media | Ninguna | — | Nota de proceso |
| G21 | Cerrado hueco en /api/newsletter y /api/libro: ninguno tenía el límite de tamaño de body (MAX_BODY_BYTES, 10KB) aplicado antes de req.json(), a pesar de que el resumen original del bloque de seguridad inicial decía "mismo patrón que contact". Corregido con el mismo enfoque exacto que ya usa /api/contact. Verificado con curl/PowerShell real contra preview: 413 en payload >10KB, 200 ok:true en envío normal | Cerrar inconsistencia entre lo documentado como completado y lo realmente implementado | Media | Ninguna | Bajo | Completado |
| G22 | Resuelto el lint a 0 errores (antes 23): 8 casos de react/no-unescaped-entities corregidos directamente, 17 casos de react-hooks/set-state-in-effect resueltos (8 con eslint-disable justificado por depender de APIs solo-cliente como localStorage/IntersectionObserver/scroll, 2 simplificados en ChatBox moviendo sessionStorage.setItem del effect al handler de cada acción, eliminando un re-render innecesario). Quedan 6 warnings de variables sin usar, preexistentes, fuera de alcance | Permitir que CI ejecute lint sin bloquear el pipeline de producción | Baja | Ninguna | Medio | Completado |
| G23 | Añadido límite de tamaño (64KB) en /api/lemon/webhook, aplicado antes de leer el body y antes de verificar el HMAC. Límite calculado sobre el tamaño real de payloads order_created de Lemon Squeezy (3-8KB típico, ~20-30KB en casos extremos con metadata extensa), con margen de 8-20x. Verificado con payload de prueba (~70KB sin firma válida → 413). Sin venta real disponible para probar el flujo completo de extremo a extremo; pendiente confirmar en la primera venta real que el webhook se procesa con normalidad | Evitar consumo de memoria por payloads anómalos antes de que la firma los rechace | Media | Ninguna | Bajo | Completado |
| G24 | Unificada la configuración de sanitización del blog: create-article.mjs tenía su propia allowlist divergente de sanitize-blog.ts (permitía cualquier class en div, no conservaba clases CTA en p/a). Extraída a src/lib/sanitize-blog-options.mjs como fuente de verdad única (ESM puro con JSDoc para tipado), importada por ambos archivos. Verificado sobre los 27 artículos reales: 26 sin cambios, 11 con una diferencia de escape de & preexistente y sin efecto visual; 10 casos de ataque fabricados a mano correctamente rechazados | Eliminar divergencia entre dos allowlists que debían ser la misma, evitando que una se quede desactualizada respecto a la otra | Baja | G15 completado | Bajo | Completado |
| G25 | Actualizado next y eslint-config-next de 16.2.6 a 16.2.9 (solo parche, sin breaking changes verificados contra el changelog real de GitHub). Cerrada vulnerabilidad de postcss (CVE-2025-26964) vía override en package.json (`"next": { "postcss": "^8.5.10" }`), ya que ningún release 16.x actualiza el pin interno de Next (fijo en 8.4.31). Confirmado que el vector no era explotable en este proyecto (PostCSS solo procesa Tailwind/globals.css, nunca el HTML del blog generado por IA), pero se cerró igualmente por higiene y para no tener que reconstruir el análisis cada vez que un audit la liste. Quedan @babel/core y js-yaml, vulnerabilidades distintas y preexistentes, sin tocar | Cerrar la vulnerabilidad de postcss señalada en auditorías anteriores | Baja | Ninguna | Bajo | Completado |
| G26 | Verificar cada lunes que el GitHub Actions de publicación de blog se ejecutó correctamente | Mantener pipeline de contenido activo | Alta | Ninguna | Bajo | Recurrente |
| G27 | Continuar indexación en Search Console conforme se recupera la cuota diaria | Acelerar indexación | Media | Ninguna | Bajo | En progreso |
| G28 | ~~Verificar mensualmente que el cron de Vercel de emails de seguimiento del diagnóstico sigue ejecutándose~~ — **Obsoleto: ese cron y `sendFollowupEmail` se eliminaron en junio 2026 (commit 808bbd6) y se reemplazaron por automatizaciones de Mailchimp.** Tarea actualizada: verificar mensualmente que la automatización de Mailchimp con el tag `diagnostico-completado` sigue activa y con los links correctos | Mantener secuencia de emails activa | Alta | Ninguna | Bajo | Recurrente (redefinida 5 sept 2026) |
| G30 | Conectar Search Console, GA4 y eventos cross-domain con el subdominio de diagnóstico | Tener datos reales para decidir | Alta | Ninguna | Bajo | **Hecho y verificado en vivo (5 sept), la parte de GA4/eventos — ver SEO2 y "Completado".** Sigue pendiente la parte de Search Console de este ítem, ver SEO3 |
| G31 | Validar las plantillas FAQPage con Schema Markup Validator (validator.schema.org) | Confirmar que el schema no tiene errores | Media | Ninguna | Bajo | **Nuevo (auditoría) — ver SEO9** |
| G32 | Elegir la redirección definitiva para la página comercial duplicada, actualizar enlaces internos antes del redirect, confirmar que no hay cadenas ni loops, y que canonical/sitemap/breadcrumbs apuntan al destino elegido | Consolidar arquitectura comercial | Alta | SEO1 | Medio | **Hecho y verificado en vivo (5 sept):** redirect único /servicios → /consultoria-restaurantes-hosteleria en next.config.ts, sin cadenas (destino no redirige a su vez). Nav, footer, home, y 5 páginas más actualizadas para enlazar directo al destino final en vez de pasar por el redirect. Sitemap corregido. Subpáginas de servicio específico preservadas sin tocar. Adrián confirmó en producción: todo correcto |
| G33 | (1) Añadir una regla de dominio en Vercel que redirija todo `www.adrianpollan.com/*` a `https://adrianpollan.com/*`, para que se aplique antes que los redirects de slugs de blog. (2) Añadir redirects 301 puntuales para los slugs de blog renombrados sin redirect: `rotacion-personal-hosteleria-causas-reducir` → `como-reducir-rotacion-personal-restaurante`, `que-es-el-prime-cost-y-por-que-es-el-indicador-mas-importante` → `que-es-el-prime-cost-y-como-controlarlo-en-tu-restaurante`, `el-metodo-adrian-principios-fundamentales` se deja tal cual, sin redirect — Adrián confirmó que se perdió sin querer pero no le preocupa, es contenido relacionado con el libro (todavía no publicado), coherente con la decisión ya registrada de no destacar el Método ADRIÁN por ahora. (3) Adrián: forzar "Solicitar indexación" en Inspección de URLs de Search Console para las 4 URLs de "Redirect error" (rastreo obsoleto de mayo, ya resueltas) | Limpiar la cobertura de índice, evitar contenido duplicado y 404s innecesarios | Media | Ninguna | Bajo | **Nuevo (auditoría GSC, SEO3, 5 sept 2026)** — pendiente |

**Nota de proceso (junio 2026):** antes de dar por inexistente cualquier funcionalidad mencionada en una auditoría o en memoria de Claude, comprobar con curl directo contra producción, no solo con grep en el código local. Un endpoint puede estar vivo en Vercel sin estar en el git local si hubo desincronización entre el checkout y el remoto (ver G5).

---

## H. PLANTILLAS DE VENTA Y HERRAMIENTAS DE CAPTACIÓN

| # | Descripción | Estado |
|---|---|---|
| H1 | 10 productos en Lemon Squeezy (5 individuales + 5 bundles) con precios, descripciones, archivos e imágenes | Completado |
| H2 | Webhook /api/lemon/webhook en producción: captura compras y añade contactos a Mailchimp audiencia Clientes Plantillas | Completado |
| H3 | 10 Customer Journeys en Mailchimp con secuencia de 4 emails cada uno apuntando a consultoría | Completado |
| H4 | Página /herramientas/plantillas con copy SEO, FAQs, garantías y CTAs | Completado |
| H5 | 5 páginas individuales /herramientas/plantillas/[slug] con estructura de embudo, imágenes, upsell de bundles y Schema Product | Completado |
| H6 | Bloques de plantillas integrados en 22 artículos de blog | Completado |
| H7 | Script de autogeneración de blog actualizado para incluir bloques de plantillas en artículos futuros | Completado |
| H8 | Robi actualizado para recomendar plantillas según problema del visitante | Completado |
| H9 | Captura de email en 5 herramientas gratuitas con envío de resultado por Resend y alta en Mailchimp audiencia Usuarios Herramientas | Completado |
| H10 | 5 Customer Journeys en Mailchimp audiencia Usuarios Herramientas (2 emails por herramienta, días 3 y 7) | Completado |
| H11 | Schema Markup implementado en 7 páginas adicionales y verificado con Rich Results Test | Completado |
| H12 | Menú de navegación actualizado con dropdown Herramientas y regla del 5 | Completado |
| H13 | Micro-copy de CTAs actualizado en toda la web | Completado |
| H14 | Live mode activo en Lemon Squeezy con precios tax-inclusive | Completado |
| H15 | Lemon Squeezy: actualizar URLs de checkout a live mode en todo el proyecto | Pendiente |

---

## Resumen por prioridad

**Alta (ejecutar primero):**
B1, B2, B3, F1, F7, G1, G3

**Media:**
A4, B4, B6, D1, D2, D3, D4, D5, F3, G2, G4, G7, G12, G20

**Baja:**
D6, E4, F7, G13, H15

**Nota G13:** postcss cerrado vía G25. Quedan @babel/core y js-yaml; gestionar en próxima actualización de Next.

**Aparcados hasta lanzamiento del libro (>90 días):**
C12, E1, E2, E3
