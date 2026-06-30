import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad — Adrián Pollán" },
  description: "Cómo tratamos tus datos personales en adrianpollan.com de acuerdo con el RGPD.",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-grafito pt-40 pb-12 lg:pt-48 lg:pb-16">
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
              prose-headings:font-display prose-headings:text-grafito prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-body prose-p:text-ink/70 prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-grafito prose-strong:font-semibold
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

            <h3>d) Acceso a herramientas gratuitas de gestión</h3>
            <p>
              <strong>Datos:</strong> correo electrónico.<br />
              <strong>Finalidad:</strong> enviarte por correo el resultado de la herramienta
              utilizada (escandallo, prime cost, checklists o auditoría de proveedores) e
              incorporarte a la lista de audiencia de herramientas gratuitas para comunicaciones
              relacionadas.<br />
              <strong>Base legal:</strong> consentimiento expreso del interesado (art. 6.1.a del RGPD).<br />
              <strong>Conservación:</strong> el resultado se procesa en memoria y se entrega
              inmediatamente por correo; no se almacena de forma persistente en ningún sistema
              propio. El correo electrónico se conserva en la lista de Mailchimp mientras
              mantengas la suscripción activa.
            </p>

            <h3>e) Diagnóstico F&amp;B (diagnostico.adrianpollan.com)</h3>
            <p>
              <strong>Datos:</strong> respuestas al cuestionario de diagnóstico (67 preguntas
              sobre 8 áreas de gestión) y correo electrónico.<br />
              <strong>Finalidad:</strong> generar y enviarte un informe personalizado de
              diagnóstico de tu negocio e incorporarte a la lista de audiencia correspondiente.<br />
              <strong>Base legal:</strong> consentimiento expreso del interesado (art. 6.1.a del RGPD).<br />
              <strong>Conservación:</strong> las respuestas al cuestionario se almacenan durante
              90 días para la generación del informe; el correo electrónico se conserva mientras
              mantengas la suscripción activa o hasta que retires el consentimiento.
            </p>

            <h3>f) Test Dirige — ¿Sabes cuánto gana tu restaurante? (test.adrianpollan.com)</h3>
            <p>
              <strong>Datos:</strong> respuestas al test de números del negocio (indicadores
              financieros y operativos), nombre del negocio y correo electrónico.<br />
              <strong>Finalidad:</strong> generar y enviarte un resultado personalizado con el
              diagnóstico financiero de tu negocio e incorporarte a la lista de audiencia
              correspondiente.<br />
              <strong>Base legal:</strong> consentimiento expreso del interesado (art. 6.1.a del RGPD).<br />
              <strong>Conservación:</strong> los datos del test se almacenan durante 90 días para
              permitir el acceso al resultado; el correo electrónico se conserva mientras
              mantengas la suscripción activa o hasta que retires el consentimiento.
            </p>

            <h3>g) Reserva de consultoría</h3>
            <p>
              <strong>Datos:</strong> nombre, correo electrónico, datos de pago (gestionados por
              Stripe a través de Calendly) e información que compartas voluntariamente en el
              proceso de reserva.<br />
              <strong>Finalidad:</strong> gestionar la contratación, el cobro y la prestación
              del servicio de consultoría.<br />
              <strong>Base legal:</strong> ejecución de un contrato (art. 6.1.b del RGPD).<br />
              <strong>Conservación:</strong> durante la relación contractual y, posteriormente,
              durante los plazos legales de conservación fiscal y mercantil aplicables en Irlanda
              (6 años desde la fecha de la transacción, conforme al artículo 886 del Taxes
              Consolidation Act 1997).
            </p>

            <h3>h) Compra de plantillas digitales</h3>
            <p>
              <strong>Datos:</strong> nombre y correo electrónico, gestionados por Lemon Squeezy
              como plataforma de venta.<br />
              <strong>Finalidad:</strong> gestionar la transacción, la emisión de la factura, el
              IVA de la UE aplicable y el acceso al material adquirido.<br />
              <strong>Base legal:</strong> ejecución de un contrato (art. 6.1.b del RGPD).<br />
              <strong>Conservación:</strong> conforme a los plazos legales de conservación fiscal
              aplicables en Irlanda (6 años).
            </p>

            <h3>i) Chat del sitio web</h3>
            <p>
              <strong>Datos:</strong> el contenido de las conversaciones que inicies con el
              asistente del sitio.<br />
              <strong>Finalidad:</strong> responder tus preguntas y ofrecerte orientación sobre
              los servicios disponibles.<br />
              <strong>Base legal:</strong> interés legítimo del responsable (art. 6.1.f del RGPD).<br />
              <strong>Conservación:</strong> las conversaciones se procesan en tiempo real por el
              proveedor de IA (Anthropic) y no se almacenan de forma persistente en sistemas
              propios.
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
                comunicaciones (newsletter, audiencias de herramientas gratuitas, diagnóstico,
                test Dirige y compradores de plantillas). mailchimp.com/legal/privacy
              </li>
              <li>
                <strong>Calendly</strong>: gestión de reservas y citas de consultoría.
                calendly.com/privacy
              </li>
              <li>
                <strong>Lemon Squeezy</strong> (Lemon Squeezy LLC): plataforma de venta de
                plantillas digitales y gestión del IVA de la UE. lemonsqueezy.com/privacy
              </li>
              <li>
                <strong>Resend</strong>: envío de correos electrónicos transaccionales
                (confirmaciones de contacto, entrega de resultados de herramientas, diagnóstico
                y test Dirige). resend.com/privacy
              </li>
              <li>
                <strong>Upstash</strong>: almacenamiento temporal de datos para control de tasa
                de uso (rate limiting) de formularios y del chat en adrianpollan.com, y para el
                almacenamiento de resultados del diagnóstico (90 días) y del test Dirige (90 días)
                en sus respectivos subdominios. upstash.com/privacy
              </li>
              <li>
                <strong>Anthropic</strong>: procesamiento de conversaciones del chat del sitio y
                generación de contenido personalizado del diagnóstico F&amp;B.
                anthropic.com/privacy
              </li>
            </ul>
            <p>
              Stripe actúa como procesador de pagos dentro de las plataformas Calendly (para
              reservas de consultoría) y Lemon Squeezy (para compras de plantillas digitales).
              Adrián Pollán no integra Stripe directamente ni almacena datos de tarjeta en ningún
              momento. stripe.com/privacy
            </p>
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
              La autoridad principal es la <strong>Data Protection Commission (DPC) de
              Irlanda</strong> (www.dataprotection.ie). Si resides en España, también puedes
              dirigirte a la Agencia Española de Protección de Datos (www.aepd.es).
            </p>

            <h2>6. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos
              frente a accesos no autorizados, pérdida o alteración. No obstante, ningún
              sistema de transmisión por internet es completamente seguro, por lo que no
              podemos garantizar una seguridad absoluta.
            </p>

            <h2>7. Cookies y almacenamiento local</h2>
            <p>
              Este sitio web utiliza cookies de terceros y almacenamiento local del navegador.
              Para más información, consulta nuestra{" "}
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
