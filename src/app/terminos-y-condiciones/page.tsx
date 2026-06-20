// TODO: revisar con asesor legal antes de publicar
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Términos y Condiciones — Adrián Pollán" },
  description: "Términos y condiciones de uso y contratación de servicios en adrianpollan.com.",
  robots: { index: false, follow: false },
};

export default function TerminosCondicionesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-navy pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Información legal
          </p>
          <h1 className="font-display text-cream text-4xl lg:text-5xl font-light leading-tight">
            Términos y Condiciones
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
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-body prose-p:text-ink/70 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-navy prose-strong:font-semibold
              prose-a:text-amber prose-a:no-underline hover:prose-a:underline
              prose-li:font-body prose-li:text-ink/70 prose-li:my-1.5
            "
          >
            <h2>1. Información general</h2>
            <p>
              Los presentes Términos y Condiciones regulan el acceso, la navegación y la
              contratación de servicios a través del sitio web adrianpollan.com, titularidad de:
            </p>
            <p>
              <strong>Adrián Pollán</strong> — Profesional independiente (sole trader)<br />
              Domicilio: The Pier, Lisnard, Ballyvaughan, Co. Clare, Ireland. H91 W9TN<br />
              Correo electrónico: adrian@adrianpollan.com
            </p>
            <p>
              El acceso y uso de este sitio implica la aceptación plena de estos términos.
              Si no estás de acuerdo con alguna de las condiciones aquí recogidas, te rogamos
              que no utilices el sitio.
            </p>

            <h2>2. Servicios ofrecidos</h2>
            <p>A través de adrianpollan.com se ofrecen los siguientes servicios:</p>

            <h3>a) Consulta gratuita de diagnóstico (20 minutos)</h3>
            <p>
              Sesión inicial sin coste, orientada a identificar las necesidades del negocio y
              valorar si existe encaje con los servicios de consultoría. Se gestiona a través
              de Calendly y no genera ninguna obligación contractual para ninguna de las
              partes.
            </p>

            <h3>b) Servicios de consultoría en restauración y F&amp;B</h3>
            <p>
              Servicios profesionales de asesoramiento a negocios gastronómicos y hosteleros,
              en modalidades, alcance y precios que se detallarán en cada propuesta o en la
              página de Servicios del sitio web. La contratación se formaliza a través del
              proceso de reserva habilitado en el sitio (Calendly, con Stripe como procesador
              de pagos integrado) o mediante acuerdo escrito previo entre las partes.
            </p>

            <h3>c) Contenido editorial y recursos gratuitos</h3>
            <p>
              El sitio incluye un blog y recursos descargables (como el kit del libro El
              Método ADRIÁN) de acceso gratuito, previo registro. Estos contenidos tienen
              carácter informativo y no constituyen asesoramiento profesional individualizado.
            </p>

            <h3>d) Plantillas digitales</h3>
            <p>
              El sitio ofrece recursos descargables de pago (plantillas y materiales de
              gestión hostelera) a través de Lemon Squeezy. La adquisición se formaliza a
              través de la plataforma de Lemon Squeezy, que gestiona el proceso de compra,
              la facturación y el IVA de la UE aplicable. Adrián Pollán actúa como vendedor
              y Lemon Squeezy como Merchant of Record.
            </p>

            <h2>3. Proceso de contratación</h2>
            <p>Para contratar un servicio de consultoría a través del sitio:</p>
            <ul>
              <li>Selecciona el servicio o sesión que deseas en la página correspondiente.</li>
              <li>Elige fecha y hora disponibles a través del calendario de Calendly.</li>
              <li>Completa tus datos de contacto y realiza el pago, si procede, a través del procesador de pagos integrado en Calendly.</li>
              <li>Recibirás una confirmación por correo electrónico con los detalles de la sesión.</li>
            </ul>
            <p>
              El contrato entre las partes se perfecciona en el momento en que recibes la
              confirmación de la reserva. Adrián Pollán se reserva el derecho a rechazar una
              solicitud de contratación si aprecia que el servicio no es adecuado para las
              necesidades del cliente, comunicándolo por correo electrónico y procediendo al
              reembolso íntegro del importe abonado.
            </p>

            <h2>4. Precios y forma de pago</h2>
            <p>
              Los precios de los servicios se indican en el sitio web en euros (EUR). Los
              servicios de consultoría no incluyen IVA salvo indicación expresa. Las plantillas
              digitales incluyen el IVA de la UE correspondiente al país del comprador,
              gestionado por Lemon Squeezy en su condición de Merchant of Record.
            </p>
            <p>
              El pago se realiza de forma segura a través de los procesadores integrados en
              cada plataforma: Stripe, dentro de Calendly (para sesiones de consultoría), y
              Stripe, dentro de Lemon Squeezy (para plantillas digitales). Adrián Pollán no
              integra Stripe directamente ni almacena datos de tarjeta bancaria en ningún
              momento; dicha información es gestionada íntegramente por los procesadores
              correspondientes bajo sus propios estándares de seguridad (PCI-DSS).
            </p>

            <h2>5. Política de cancelación y reembolso</h2>

            <h3>Cancelaciones por parte del cliente — servicios de consultoría</h3>
            <ul>
              <li>Cancelación con más de 48 horas de antelación a la sesión: reembolso íntegro del importe abonado.</li>
              <li>Cancelación con entre 24 y 48 horas de antelación: reembolso del 50% del importe abonado.</li>
              <li>Cancelación con menos de 24 horas de antelación o no presentación a la sesión: sin reembolso.</li>
            </ul>
            <p>
              Las cancelaciones deben comunicarse por correo electrónico a
              adrian@adrianpollan.com o a través del enlace de gestión incluido en el correo
              de confirmación de Calendly.
            </p>

            <h3>Cancelaciones por parte de Adrián Pollán</h3>
            <p>
              En el caso excepcional de que sea necesario cancelar o reprogramar una sesión
              desde el lado del prestador, se notificará al cliente con la mayor antelación
              posible y se ofrecerá una nueva fecha o el reembolso íntegro del importe abonado.
            </p>

            <h3>Plantillas digitales — derecho de desistimiento</h3>
            <p>
              Las plantillas digitales son productos de contenido digital de entrega inmediata.
              De conformidad con el artículo 16(m) de la Directiva 2011/83/UE sobre derechos
              de los consumidores, el consumidor pierde el derecho de desistimiento en el
              momento en que se inicia la descarga o el acceso al contenido digital, siempre
              que haya prestado su consentimiento expreso previo y haya reconocido que, al
              iniciarse la ejecución, pierde su derecho de desistimiento. Al proceder a la
              compra, el usuario acepta expresamente estas condiciones y confirma que comprende
              la pérdida de su derecho de desistimiento una vez iniciada la descarga o el
              acceso al material.
            </p>

            <h2>6. Obligaciones y responsabilidades del cliente</h2>
            <p>El cliente se compromete a:</p>
            <ul>
              <li>Facilitar información veraz y completa sobre su negocio para permitir una consultoría efectiva.</li>
              <li>Asistir a las sesiones contratadas en el horario acordado.</li>
              <li>Utilizar los contenidos, materiales y recomendaciones recibidas únicamente para los fines acordados, sin reproducirlos ni cederlos a terceros sin autorización escrita previa.</li>
            </ul>

            <h2>7. Propiedad intelectual</h2>
            <p>
              Todos los materiales, metodologías, documentos, plantillas y contenidos
              entregados en el marco de los servicios de consultoría (incluido El Método
              ADRIÁN y cualquier recurso derivado) son propiedad intelectual de Adrián Pollán
              y están protegidos por la legislación vigente.
            </p>
            <p>
              La contratación de un servicio no implica la cesión de ningún derecho de
              propiedad intelectual sobre dichos materiales. El cliente podrá utilizarlos para
              la gestión interna de su negocio, pero no podrá reproducirlos, distribuirlos,
              transformarlos ni explotarlos comercialmente sin autorización expresa y por
              escrito.
            </p>

            <h2>8. Limitación de responsabilidad</h2>
            <p>
              Los servicios de consultoría ofrecidos tienen carácter orientativo y
              estratégico. Adrián Pollán no garantiza resultados económicos concretos
              derivados de la aplicación de las recomendaciones, ya que el éxito de cualquier
              negocio depende de múltiples factores externos fuera de su control.
            </p>
            <p>
              La responsabilidad máxima de Adrián Pollán frente al cliente, en cualquier caso
              y por cualquier concepto, quedará limitada al importe efectivamente abonado por
              el servicio contratado.
            </p>
            <p>
              Adrián Pollán no será responsable de daños indirectos, lucro cesante, pérdida
              de datos o cualquier perjuicio derivado del uso o la imposibilidad de uso de los
              servicios, salvo en los casos en que la ley aplicable lo exija expresamente.
            </p>

            <h2>9. Protección de datos</h2>
            <p>
              El tratamiento de los datos personales facilitados durante la contratación y el
              uso del sitio se rige por la{" "}
              <Link href="/politica-de-privacidad">Política de Privacidad</Link> disponible
              en adrianpollan.com, en cumplimiento del Reglamento General de Protección de
              Datos (RGPD).
            </p>

            <h2>10. Modificaciones</h2>
            <p>
              Adrián Pollán se reserva el derecho a modificar estos Términos y Condiciones en
              cualquier momento. Los cambios serán efectivos desde su publicación en el sitio
              web. Para servicios ya contratados, se aplicarán las condiciones vigentes en el
              momento de la contratación.
            </p>

            <h2>11. Legislación aplicable y resolución de conflictos</h2>
            <p>
              Los presentes Términos y Condiciones se rigen por la legislación de Irlanda.
              Para la resolución de cualquier disputa derivada de su interpretación o
              cumplimiento, las partes se someten a los tribunales de Irlanda.
            </p>
            <p>
              En caso de conflicto con consumidores residentes en la Unión Europea, podrá
              accederse a la plataforma europea de resolución de litigios en línea:
              ec.europa.eu/consumers/odr
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
