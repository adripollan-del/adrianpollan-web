export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Rentabilidad" | "Equipos" | "Aperturas" | "El Método";
  date: string;
  readTime: string;
  coverImage: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "por-que-tu-restaurante-no-es-rentable",
    title: "Por qué tu restaurante llena pero no es rentable",
    excerpt:
      "Mucha gente cree que el problema es que no tienen suficientes clientes. Suelen estar equivocados. El problema casi siempre está en los márgenes, la estructura de costes y cómo gestionan lo que ya tienen.",
    category: "Rentabilidad",
    date: "2025-04-10",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    body: `<p>He trabajado con docenas de restaurantes que llenan todos los fines de semana y aun así terminan el mes en rojo. ¿Cómo es posible?</p>

<p>La respuesta casi siempre tiene tres partes: un coste de producto demasiado alto, una estructura de personal sobredimensionada y una carta mal diseñada que vende lo que menos margen deja.</p>

<h2>El error del volumen</h2>

<p>Muchos operadores de hostelería piensan que más cubiertos equivale a más dinero. Y en teoría tienen razón. Pero en la práctica, llenar más mesas sin antes arreglar los márgenes solo significa perder dinero más rápido.</p>

<p>Antes de buscar más volumen, tienes que asegurarte de que cada cubierto que sirves genera un margen real. Eso implica revisar tu escandallo, tu pricing y tu ingeniería de menú.</p>

<h2>Los tres números que tienes que conocer de memoria</h2>

<p>El coste de materia prima como porcentaje de ventas (idealmente entre el 28% y el 32% en un restaurante a la carta). El coste de personal (entre el 30% y el 38%). Y el EBITDA real, no el que te da el gestor en abril del año siguiente.</p>

<p>Si no sabes estos tres números de memoria, ahí está el primer problema.</p>

<h2>Dónde mirar primero</h2>

<p>Mi metodología siempre empieza por los números: ¿Cuál es tu coste de materia prima real? ¿Y tu coste de personal como porcentaje de ventas? ¿Cuáles son los tres platos que más vendes y cuánto dejan realmente?</p>

<p>Esas respuestas ya te dicen dónde está el problema. El resto es ejecución.</p>`,
  },
  {
    slug: "como-construir-un-equipo-que-no-dependa-de-ti",
    title: "Cómo construir un equipo de sala que no dependa de ti",
    excerpt:
      "El síndrome del restaurador indispensable: el negocio solo funciona cuando el dueño está presente. Te cuento cómo salir de esa trampa construyendo un equipo autónomo y comprometido.",
    category: "Equipos",
    date: "2025-03-22",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80",
    body: `<p>Uno de los patrones más comunes que veo en mis auditorías: el restaurante funciona solo cuando el dueño está presente. En cuanto se va, la calidad baja, los errores aumentan y la experiencia del cliente se deteriora.</p>

<p>Esto no es un problema de equipo. Es un problema de sistema.</p>

<h2>El manual que nadie tiene</h2>

<p>¿Tienes documentados tus procesos? ¿Sabe tu equipo exactamente cómo debe ser el saludo de bienvenida, el tiempo máximo de espera entre platos, cómo gestionar una queja?</p>

<p>Sin estándares escritos, el equipo improvisa. Y cuando improvisa, cada persona lo hace de forma diferente. El resultado: inconsistencia y dependencia del criterio del jefe.</p>

<h2>Construir para la autonomía</h2>

<p>La clave no es controlar más. Es diseñar sistemas que permitan al equipo tomar buenas decisiones sin necesitar tu aprobación para cada cosa. Eso se consigue con tres herramientas: procesos documentados, criterios claros y formación que desarrolla criterio propio.</p>

<h2>El rol del responsable de sala</h2>

<p>El primer paso en casi todos los restaurantes que acompaño: crear o fortalecer la figura del responsable de sala o jefe de operaciones. Una persona que asume la responsabilidad del servicio cuando tú no estás. Parece obvio. La mayoría de los restaurantes no lo tienen.</p>`,
  },
  {
    slug: "los-10-errores-que-matan-una-apertura",
    title: "Los 10 errores que matan una apertura antes de los 6 meses",
    excerpt:
      "Después de acompañar más de una docena de aperturas, estos son los errores que se repiten una y otra vez. La buena noticia: todos son evitables si sabes dónde mirar.",
    category: "Aperturas",
    date: "2025-03-05",
    readTime: "10 min",
    coverImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
    body: `<p>La estadística dice que el 60% de los restaurantes cierran en su primer año. En mi experiencia, ese número podría reducirse drásticamente si los operadores supieran dónde se esconden los riesgos reales.</p>

<h2>Error 1: El business plan optimista</h2>

<p>Todo el mundo hace proyecciones. Casi nadie las hace bien. El error más común: estimar las ventas de los primeros meses basándose en la ocupación que esperan alcanzar en 6 meses, no en la que tendrán en la primera semana.</p>

<p>Un business plan honesto asume que los primeros tres meses van a ser duros. Que la caja va a apretar. Que vas a tener que aguantar mientras construyes clientela.</p>

<h2>Error 2: Abrir sin procesos</h2>

<p>Muchos locales abren con el equipo, la carta y la decoración listos, pero sin ningún manual operativo. Los primeros días son caóticos por definición. Sin procesos establecidos, el caos se convierte en el estándar.</p>

<h2>Error 3: Contratar tarde</h2>

<p>Fichar a tu equipo dos semanas antes de abrir es demasiado tarde. Necesitas tiempo para formarlos, hacer simulacros de servicio y detectar quién no encaja antes del día D.</p>

<h2>El patrón que se repite</h2>

<p>Detrás de la mayoría de cierres prematuros hay una combinación de los mismos factores: proyecciones irreales, falta de liquidez para aguantar la curva de aprendizaje y ausencia de sistemas operativos que permitan mantener la calidad cuando el founder no está mirando.</p>`,
  },
  {
    slug: "el-metodo-adrian-principios-fundamentales",
    title: "El Método ADRIÁN: los 6 principios que cambian un restaurante",
    excerpt:
      "Después de años trabajando con restaurantes de todo tipo, he destilado los principios que siempre marcan la diferencia. No son secretos. Son disciplina aplicada de forma consistente.",
    category: "El Método",
    date: "2025-02-18",
    readTime: "7 min",
    coverImage: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80",
    body: `<p>El Método ADRIÁN no es una fórmula mágica. Es un sistema de trabajo que pone en el centro lo que realmente importa: los números, las personas y la consistencia.</p>

<h2>A — Análisis antes de acción</h2>

<p>Nunca tomes decisiones sin datos. Antes de cambiar la carta, de contratar a alguien o de invertir en reformas, analiza: ¿qué dicen los números? ¿Qué dice el cliente?</p>

<h2>D — Diseño de sistemas</h2>

<p>Los negocios sostenibles no dependen de héroes. Dependen de sistemas bien diseñados que funcionen aunque el dueño no esté. Cada proceso, cada estándar, cada checklist es un ladrillo en esa construcción.</p>

<h2>R — Rentabilidad como norte</h2>

<p>La rentabilidad no es opcional. Un negocio que no es rentable no puede cumplir su propósito: crear empleo, ofrecer experiencias, crecer. La rentabilidad es la condición que lo hace posible todo.</p>

<h2>I, Á, N — Implementación, Aceleración y Norte</h2>

<p>Los tres últimos principios se centran en la ejecución real: cómo implementar cambios sin romper lo que funciona, cómo escalar cuando el modelo está probado, y cómo mantener el rumbo estratégico cuando el día a día te absorbe.</p>

<p>Son los principios más difíciles de aplicar. Y los más determinantes para el resultado final.</p>`,
  },
];
