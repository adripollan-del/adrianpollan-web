export interface Service {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  includes: string[];
  notFor: string;
  ideal: string;
  closing: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Diagnóstico y Auditoría F&B",
    subtitle: "Antes de cambiar nada, hay que entender qué está pasando de verdad.",
    summary:
      "Muchos negocios de restauración llevan años tomando decisiones con información incompleta. Se cambia la carta, se ajusta el horario, se contrata o se despide, pero el problema real nunca se toca porque nadie lo ha identificado con claridad. El diagnóstico es el punto de partida para dejar de improvisar.\n\nAnalizo tu operación de forma integral: el concepto y si sigue siendo coherente con tu mercado, la estructura de costes y dónde se está yendo el margen, los procesos de sala y cocina, el rendimiento del equipo, y la experiencia que vive el cliente desde que entra hasta que paga.\n\nAl final del proceso recibes un mapa de acción claro: qué palancas mover primero, en qué orden, y por qué unas tienen más impacto inmediato que otras. Sin informe de cien páginas que nadie lee. Sin recomendaciones vagas. Solo las cosas que importan, explicadas con honestidad.",
    includes: [
      "Mapa de dónde se escapa el margen, con datos reales de tu negocio",
      "Análisis de food cost, prime cost y estructura de ingresos",
      "Evaluación de carta: qué vender más, qué eliminar, dónde ajustar precio",
      "Diagnóstico del equipo y sus dinámicas operativas",
      "Informe ejecutivo con las 3-5 palancas prioritarias y plan de acción concreto",
    ],
    notFor:
      "No tiene sentido si buscas que alguien te confirme lo que ya crees. El diagnóstico revela lo que hay, no lo que quieres oír.",
    ideal: "Restaurantes que trabajan duro, tienen buena ocupación y sin embargo no ven los números que esperaban.",
    closing: "A veces el mayor coste no está en la nómina ni en el food cost. Está en seguir sin saber qué arreglar.",
    image: "/servicio-1.webp",
    href: "/servicios/auditoria-fb-restaurantes",
  },
  {
    number: "02",
    title: "Consultoría Operativa Continuada",
    subtitle: "Un consultor que trabaja contigo, no uno que te deja un PDF y desaparece.",
    summary:
      "La mayoría de los problemas en restauración no se resuelven con un diagnóstico. Se resuelven con trabajo continuado y la capacidad de ajustar sobre la marcha cuando la realidad no encaja con el plan.\n\nTrabajo contigo de forma sostenida mientras el negocio sigue funcionando. No paro la operación, no exijo cambios traumáticos de golpe. Acompañamiento significa estar ahí cuando hay que tomar una decisión difícil, cuando el equipo necesita dirección, cuando surge una oportunidad que no estaba en el guion o cuando los números de un mes no cuadran y hay que entender por qué.\n\nEl objetivo es que cuando termine el acompañamiento, el negocio sea más sólido, más autónomo y más rentable de lo que era cuando empezamos.",
    includes: [
      "KPIs definidos desde el día uno: food cost, prime cost, ticket medio, cobertura",
      "Decisiones tomadas con datos, no con intuición",
      "Equipo de gestión con más autonomía y menos dependencia del propietario",
      "Procesos documentados que funcionan sin que estés tú encima",
      "Carta y turnos optimizados para mejorar margen sin bajar calidad",
      "Acceso directo entre sesiones para cuando surge algo que no puede esperar",
    ],
    notFor:
      "No tiene sentido si no hay voluntad real de cambiar. El acompañamiento requiere implicación tuya y de tu equipo. No funciona como servicio de emergencia puntual.",
    ideal: "Negocios que ya funcionan pero que quieren dar un salto real, no cosmético.",
    closing: "Los resultados no vienen de tener el mejor plan. Vienen de implementarlo bien, con alguien que sabe lo que está haciendo.",
    image: "/servicio-2.webp",
    href: "/servicios/consultoria-operativa-restaurantes",
  },
  {
    number: "03",
    title: "Acompañamiento a Aperturas",
    subtitle: "Abrir un restaurante es de las decisiones más costosas que tomarás. Tiene sentido hacerlo con alguien que ya ha estado ahí.",
    summary:
      "La mayoría de los errores que se cometen al abrir un restaurante no se cometen durante los primeros meses de operación. Se cometen meses antes, cuando se firma el local sin validar el tráfico real, cuando se diseña una cocina sin pensar en los tiempos de servicio, cuando se contrata a un equipo sin haber definido bien el concepto, o cuando se lanza una carta que nadie ha calculado en términos de margen.\n\nEntro en el proyecto desde la fase inicial para ayudarte a tomar mejores decisiones antes de que el dinero esté comprometido. He acompañado aperturas en España, Irlanda, Francia y Reino Unido, en contextos muy distintos, desde proyectos boutique hasta propiedades de lujo.",
    includes: [
      "Validación del concepto antes de comprometer la inversión",
      "Posicionamiento claro: a quién le hablas, qué ofreces, por qué te van a elegir",
      "Cocina y sala diseñadas para los tiempos de servicio reales, no para que queden bonitas en plano",
      "Carta calculada con márgenes reales desde el primer día",
      "Equipo dimensionado y perfilado según el concepto",
      "Acompañamiento durante los primeros meses, cuando más errores se cometen",
    ],
    notFor:
      "No tiene sentido si el local ya está firmado, el equipo contratado y la carta cerrada. Cuanto antes entro, más impacto tiene.",
    ideal: "Emprendedores con un proyecto entre manos que todavía están a tiempo de ajustar el rumbo.",
    closing: "No se trata de tener el restaurante perfecto desde el día uno. Se trata de no cometer los errores que luego son difíciles de deshacer.",
    image: "/servicio-3.webp",
    href: "/servicios/apertura-restaurante",
  },
];
