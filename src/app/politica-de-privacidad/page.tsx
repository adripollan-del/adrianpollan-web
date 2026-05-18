import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Adrián Pollán",
  description: "Cómo tratamos tus datos personales en adrianpollan.com de acuerdo con el RGPD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-navy pt-40 pb-12 lg:pt-48 lg:pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-body text-amber text-xs tracking-widest uppercase mb-4">
            Información legal
          </p>
          <h1 className="font-display text-cream text-4xl lg:text-5xl font-light leading-tight">
            Política de Privacidad
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
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>Adrián Pollán</strong><br />
              Domicilio: The Pier, Lisnard, Ballyvaughan, Co. Clare, Ireland. H91 W9TN<br />
              Correo electrónico: adrian@adrianpollan.com<br />
              Sitio web: adrianpollan.com
            </p>

            <h2>2. Qué datos recogemos y por qué</h2>
            <p>
              Recogemos únicamente los datos necesarios para prestar nuestros servicios y
              mantener la comunicación contigo. A continuación se detalla cada finalidad:
            </p>

            <h3>a) Formulario de contacto</h3>
            <p>
              <strong>Datos:</strong> nombre y correo electrónico.<br />
              <strong>Finalidad:</strong> atender tu consulta o solicitud.<br />
              <strong>Base legal:</strong> interés legítimo del responsable (art. 6.1.f del RGPD).<br />
              <strong>Conservación:</strong> hasta que la consulta quede resuelta, y durante el
              plazo de prescripción legal aplicable.
            </p>

            <h3>b) Suscripción al boletín</h3>
            <p>
              <strong>Datos:</strong> correo electrónico y, opcionalmente, nombre.<br />
              <strong>Finalidad:</strong> enviarte contenido editorial sobre gestión hostelera,
              restauración y F&amp;B, así como información sobre servicios y novedades
              profesionales.<br />
              <strong>Base legal:</strong> consentimiento expreso del interesado (art. 6.1.a del RGPD).<br />
              <strong>Conservación:</strong> mientras mantengas la suscripción activa. Puedes
              darte de baja en cualquier momento desde cualquier correo recibido.
            </p>

            <h3>c) Descarga del kit del libro (El Método ADRIÁN)</h3>
            <p>
              <strong>Datos:</strong> correo electrónico y, opcionalmente, nombre.<br />
              <strong>Finalidad:</strong> enviarte el material descargable vinculado al libro y
              comunicaciones relacionadas con su publicación.<br />
              <strong>Base legal:</strong> consentimiento expreso del interesado (art. 6.1.a del RGPD).<br />
              <strong>Conservación:</strong> mientras mantengas la suscripción activa o hasta que
              retires el consentimiento.
            </p>

            <h3>d) Reserva de consultoría</h3>
            <p>
              <strong>Datos:</strong> nombre, correo electrónico, datos de pago (gestionados por
              Stripe) e información que compartas voluntariamente en el proceso de reserva.<br />
              <strong>Finalidad:</strong> gestionar la contratación, el cobro y la prestación
              del servicio de consultoría.<br />
              <strong>Base legal:</strong> ejecución de un contrato (art. 6.1.b del RGPD).<br />
              <strong>Conservación:</strong> durante la relación contractual y, posteriormente,
              durante los plazos legales de conservación fiscal y mercantil (generalmente 5 años).
            </p>

            <h2>3. Encargados del tratamiento (terceros)</h2>
            <p>
              Para prestar nuestros servicios utilizamos las siguientes herramientas de terceros,
              que actúan como encargados del tratamiento y cuentan con sus propias políticas de
              privacidad y medidas de seguridad:
            </p>
            <ul>
              <li>
                <strong>Mailchimp</strong> (Intuit Inc.): gestión de listas de correo y envío de
                comunicaciones. mailchimp.com/legal/privacy
              </li>
              <li>
                <strong>Calendly</strong>: gestión de reservas y citas. calendly.com/privacy
              </li>
              <li>
                <strong>Stripe</strong>: procesamiento seguro de pagos. stripe.com/privacy
              </li>
              <li>
                <strong>Squarespace</strong>: plataforma de alojamiento del sitio web.
                squarespace.com/privacy
              </li>
            </ul>
            <p>
              Ninguno de estos proveedores está autorizado a utilizar tus datos para fines
              propios distintos de los descritos.
            </p>

            <h2>4. Transferencias internacionales de datos</h2>
            <p>
              Algunos de los proveedores mencionados están ubicados fuera del Espacio Económico
              Europeo (EEE). En todos los casos, dichas transferencias se realizan con las
              garantías adecuadas exigidas por el RGPD, como cláusulas contractuales tipo
              aprobadas por la Comisión Europea o marcos de adecuación reconocidos.
            </p>

            <h2>5. Tus derechos</h2>
            <p>Como interesado, tienes derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> saber qué datos tuyos tratamos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Supresión:</strong> solicitar que eliminemos tus datos cuando ya no sean necesarios.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
              <li><strong>Limitación:</strong> solicitar que restrinjamos el uso de tus datos en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
              <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escríbenos a adrian@adrianpollan.com
              indicando tu solicitud. Responderemos en un plazo máximo de un mes.
            </p>
            <p>
              Si consideras que el tratamiento de tus datos no es conforme al RGPD, tienes
              derecho a presentar una reclamación ante la autoridad de control competente.
              En España: la Agencia Española de Protección de Datos (www.aepd.es). En Irlanda:
              la Data Protection Commission (www.dataprotection.ie).
            </p>

            <h2>6. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos
              frente a accesos no autorizados, pérdida o alteración. No obstante, ningún
              sistema de transmisión por internet es completamente seguro, por lo que no
              podemos garantizar una seguridad absoluta.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Este sitio web utiliza cookies propias y de terceros. Para más información,
              consulta nuestra{" "}
              <Link href="/politica-de-cookies">Política de Cookies</Link>.
            </p>

            <h2>8. Modificaciones</h2>
            <p>
              Esta política puede actualizarse en cualquier momento para adaptarse a cambios
              normativos o en los servicios ofrecidos. La versión vigente estará siempre
              disponible en esta página.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
