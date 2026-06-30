import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Política de Cookies — Adrián Pollán" },
  description: "Información sobre las cookies que utiliza adrianpollan.com y cómo gestionarlas.",
  robots: { index: false, follow: true },
};

type CookieRow = { name: string; origin: string; purpose: string; duration: string };

const analytics: CookieRow[] = [
  { name: "_ga", origin: "Google Analytics 4", purpose: "Distingue usuarios únicos", duration: "2 años" },
  { name: "_ga_[ID]", origin: "Google Analytics 4", purpose: "Mantiene el estado de sesión de GA4", duration: "2 años" },
  { name: "_gid", origin: "Google Analytics 4", purpose: "Distingue usuarios entre sesiones de 24 horas", duration: "24 horas" },
  { name: "_clck", origin: "Microsoft Clarity", purpose: "Identifica al usuario para análisis de comportamiento (mapas de calor y grabaciones de sesión)", duration: "1 año" },
  { name: "_clsk", origin: "Microsoft Clarity", purpose: "Conecta múltiples vistas de página de una misma sesión", duration: "30 minutos" },
];

const terceros = [
  { provider: "Calendly", purpose: "Widget de reservas de consultoría", url: "calendly.com/privacy" },
  { provider: "Stripe (vía Calendly y Lemon Squeezy)", purpose: "Seguridad y prevención del fraude en pagos", url: "stripe.com/privacy" },
  { provider: "Mailchimp", purpose: "Formularios de suscripción incrustados", url: "mailchimp.com/legal/privacy" },
  { provider: "Lemon Squeezy", purpose: "Widget de compra de plantillas digitales", url: "lemonsqueezy.com/privacy" },
];

function CookieTable({ rows }: { rows: CookieRow[] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-grafito/20">
            <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3 pr-4">Cookie</th>
            <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3 pr-4">Origen</th>
            <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3 pr-4">Finalidad</th>
            <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3">Duración</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.name} className="border-b border-grafito/8">
              <td className="font-body text-grafito font-medium py-3 pr-4 align-top">{c.name}</td>
              <td className="font-body text-ink/70 py-3 pr-4 align-top">{c.origin}</td>
              <td className="font-body text-ink/70 py-3 pr-4 align-top">{c.purpose}</td>
              <td className="font-body text-ink/70 py-3 align-top">{c.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PoliticaCookiesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-grafito pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Información legal
          </p>
          <h1 className="font-display text-cream text-4xl lg:text-5xl font-light leading-tight">
            Política de Cookies
          </h1>
          <p className="font-body text-cream/50 text-sm mt-5">
            Última actualización: mayo de 2026
          </p>
        </div>
      </section>

      {/* ── CONTENIDO ──────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <article
            className="
              prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-grafito prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-body prose-p:text-ink/70 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-grafito prose-strong:font-semibold
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
              prose-li:font-body prose-li:text-ink/70 prose-li:my-1.5
            "
          >
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
              dispositivo cuando los visitas. Sirven para que el sitio funcione correctamente,
              recuerde tus preferencias y, en algunos casos, para recopilar información sobre
              cómo navegas.
            </p>

            <h2>2. ¿Qué almacena este sitio en tu navegador?</h2>
            <p>adrianpollan.com utiliza los siguientes mecanismos de almacenamiento:</p>

            <h3>Almacenamiento local del navegador (localStorage)</h3>
            <p>
              Este sitio no establece cookies propias. La única información que se guarda en
              tu dispositivo desde el propio dominio adrianpollan.com es tu preferencia de
              consentimiento sobre cookies, almacenada en el espacio de almacenamiento local
              del navegador (localStorage) bajo la clave <strong>cookie-consent</strong>. Este
              valor caduca automáticamente a los 12 meses o puede eliminarse en cualquier
              momento borrando los datos de sitio desde tu navegador. No se transmite a ningún
              servidor.
            </p>

            <h3>Cookies de análisis y rendimiento</h3>
            <p>
              Estas cookies solo se instalan si aceptas las cookies no esenciales cuando aparece
              el aviso de cookies. Nos ayudan a entender cómo interactúan los visitantes con el
              sitio, qué páginas se visitan más y dónde se producen errores. La información es
              agregada y anónima.
            </p>
            <CookieTable rows={analytics} />

            <h3>Cookies de servicios integrados (terceros)</h3>
            <p>
              Cuando interactúas con determinadas funciones del sitio (reservas, pagos,
              formularios de suscripción, compra de plantillas), los proveedores externos pueden
              establecer sus propias cookies. Adrián Pollán no tiene control directo sobre ellas.
            </p>
            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-grafito/20">
                    <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3 pr-4">Proveedor</th>
                    <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3 pr-4">Finalidad</th>
                    <th className="text-left font-body text-amber text-xs tracking-widest uppercase pb-3">Más información</th>
                  </tr>
                </thead>
                <tbody>
                  {terceros.map((t) => (
                    <tr key={t.provider} className="border-b border-grafito/8">
                      <td className="font-body text-grafito font-medium py-3 pr-4 align-top">{t.provider}</td>
                      <td className="font-body text-ink/70 py-3 pr-4 align-top">{t.purpose}</td>
                      <td className="font-body text-ink/70 py-3 align-top">{t.url}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>3. ¿Cómo gestionar o desactivar las cookies?</h2>
            <p>
              Puedes controlar y eliminar las cookies desde la configuración de tu navegador.
              Ten en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del
              sitio.
            </p>
            <p>Instrucciones para los navegadores más habituales:</p>
            <ul>
              <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios</li>
              <li><strong>Firefox:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Gestionar datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies</li>
            </ul>
            <p>
              Para optar por no participar en Google Analytics, puedes usar el complemento
              oficial: tools.google.com/dlpage/gaoptout
            </p>
            <p>
              Para optar por no participar en Microsoft Clarity, puedes utilizar la herramienta
              de exclusión de Microsoft: choice.microsoft.com
            </p>

            <h2>4. Tu consentimiento</h2>
            <p>
              Cuando accedes por primera vez a adrianpollan.com, verás un aviso que te permite
              aceptar o rechazar las cookies no esenciales. Las cookies de análisis (Google
              Analytics 4 y Microsoft Clarity) solo se cargan si aceptas expresamente. Puedes
              modificar tu elección eliminando los datos de sitio desde tu navegador o
              contactando con nosotros en adrian@adrianpollan.com.
            </p>

            <h2>5. Actualizaciones de esta política</h2>
            <p>
              Esta política puede modificarse para reflejar cambios en las cookies utilizadas
              o en la normativa aplicable. La versión vigente estará siempre disponible en
              esta página.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
