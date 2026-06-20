// TODO: revisar con asesor legal antes de publicar
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Aviso Legal — Adrián Pollán" },
  description: "Información legal sobre la titularidad y condiciones de uso de adrianpollan.com.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-navy pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Información legal
          </p>
          <h1 className="font-display text-cream text-4xl lg:text-5xl font-light leading-tight">
            Aviso Legal
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
              prose-headings:font-display prose-headings:text-navy prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:font-body prose-p:text-ink/70 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-navy prose-strong:font-semibold
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
            "
          >
            <h2>1. Identificación del titular</h2>
            <p>
              En cumplimiento de las European Communities (Directive 2000/31/EC) Regulations
              2003 (S.I. No. 68/2003) de Irlanda, se informa de que el presente sitio web,
              adrianpollan.com, es titularidad de:
            </p>
            <p>
              <strong>Adrián Pollán</strong> — Profesional independiente (sole trader)<br />
              Domicilio: The Pier, Lisnard, Ballyvaughan, Co. Clare, Ireland. H91 W9TN<br />
              Correo electrónico: adrian@adrianpollan.com
            </p>

            <h2>2. Objeto y actividad</h2>
            <p>
              adrianpollan.com es el sitio web profesional de Adrián Pollán, consultor
              especializado en restauración y Food &amp; Beverage, a través del cual se ofrece
              información sobre servicios de consultoría, contenido editorial relacionado
              con la gestión hostelera, y la posibilidad de contratar sesiones de consultoría
              online.
            </p>

            <h2>3. Condiciones de uso</h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación de las presentes
              condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos
              y servicios disponibles, y a no emplearlos para actividades ilícitas, contrarias
              a la buena fe o al orden público.
            </p>
            <p>
              Adrián Pollán se reserva el derecho a modificar, suspender o interrumpir el
              acceso al sitio web en cualquier momento y sin previo aviso, sin que ello genere
              obligación de indemnización alguna.
            </p>

            <h2>4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos,
              estructura, diseño y código fuente, son propiedad de Adrián Pollán o de terceros
              que han autorizado su uso, y están protegidos por la legislación aplicable sobre
              propiedad intelectual e industrial.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución, transformación o
              comunicación pública de cualquier contenido de este sitio sin autorización
              escrita previa del titular.
            </p>

            <h2>5. Responsabilidad</h2>
            <p>
              Adrián Pollán no se hace responsable de los daños o perjuicios que pudieran
              derivarse del uso incorrecto del sitio web, de la presencia de virus o elementos
              lesivos introducidos por terceros, ni de la información contenida en páginas de
              terceros enlazadas desde este sitio.
            </p>
            <p>
              El titular realiza esfuerzos razonables para mantener la información publicada
              actualizada y veraz, pero no garantiza su exactitud, integridad o vigencia en
              todo momento.
            </p>

            <h2>6. Política de enlaces</h2>
            <p>
              Este sitio web puede contener enlaces a páginas de terceros. Dichos enlaces se
              incluyen únicamente con fines informativos. Adrián Pollán no tiene control sobre
              el contenido de esos sitios y no asume responsabilidad alguna por su
              disponibilidad o contenido.
            </p>

            <h2>7. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación de Irlanda. Para la
              resolución de cualquier controversia derivada del uso de este sitio web, las
              partes se someten a los tribunales de Irlanda, sin perjuicio de otros fueros
              que pudieran resultar de aplicación.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
