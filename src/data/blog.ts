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
    slug: "como-calcular-el-food-cost-de-tu-restaurante",
    title: "Cómo calcular el food cost de tu restaurante paso a paso",
    excerpt:
      "Aprende a calcular el food cost de tu restaurante con una fórmula clara y ejemplos reales. Descubre por qué este indicador es clave para la rentabilidad de tu negocio.",
    category: "Rentabilidad",
    date: "2026-05-18",
    readTime: "8 min",
    coverImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1792&q=80",
    body: `<p>Hay una pregunta que me hacen casi siempre en la primera sesión con un propietario: "¿Por qué vendo bien y aun así no me queda dinero a fin de mes?" La respuesta, en la mayoría de los casos, está en el food cost. No porque sea el único problema, sino porque es el primero que hay que entender.</p>

<p>El food cost es el porcentaje de tus ingresos que se va en materia prima. Si vendes 10.000 euros al mes y gastas 3.500 en comida, tu food cost es del 35%. Parece simple. Y lo es, si se calcula bien. El problema es que muy pocos restaurantes lo calculan bien.</p>

<h2>Qué es exactamente el food cost</h2>

<p>El food cost es la relación entre el coste de los ingredientes que usas y los ingresos que generan esos ingredientes. Se expresa en porcentaje y se calcula así:</p>

<p><strong>Food cost (%) = (Coste de materia prima / Ventas) × 100</strong></p>

<p>Si un plato cuesta 4 euros producirlo y lo vendes a 14 euros, su food cost es del 28,5%. Si tu restaurante en conjunto gasta 8.000 euros en materia prima y factura 25.000, tu food cost global es del 32%.</p>

<p>Hasta aquí la teoría. El problema empieza cuando intentas aplicarlo en la práctica.</p>

<h2>Por qué la mayoría de restaurantes no saben su food cost real</h2>

<p>He trabajado con propietarios que creían tener un food cost del 28% y en realidad estaban en el 41%. La diferencia entre lo que creían y la realidad se explicaba por tres motivos muy frecuentes.</p>

<p>El primero es que calculaban el food cost sobre lo que compraban, no sobre lo que realmente consumían. Las compras y el consumo no son lo mismo. Si compras 10 kilos de carne pero tiras 2 por caducidad o merma, tu coste real es sobre los 10 kilos, no sobre los 8 que cocinaste.</p>

<p>El segundo motivo es que no contabilizaban las mermas, los errores de cocina, las invitaciones al equipo o las comidas de personal. Todo eso es coste de materia prima aunque no aparezca en ninguna comanda.</p>

<p>El tercero, y el más habitual, es que simplemente no tenían un sistema para medirlo. Miraban la factura del proveedor a final de mes y hacían una estimación. Una estimación no es un dato.</p>

<h2>La fórmula correcta</h2>

<p>Para calcular el food cost real de tu restaurante necesitas este dato:</p>

<p><strong>Consumo real = Inventario inicial + Compras del período − Inventario final</strong></p>

<p>Y luego:</p>

<p><strong>Food cost (%) = (Consumo real / Ventas del período) × 100</strong></p>

<p>Por ejemplo: si empiezas el mes con 2.000 euros en stock, compras 6.000 euros durante el mes y terminas con 1.500 euros en stock, tu consumo real es de 6.500 euros. Si ese mes facturaste 20.000 euros, tu food cost es del 32,5%.</p>

<p>Este cálculo requiere hacer inventario. No hay forma de saltárselo si quieres un dato fiable.</p>

<h2>¿Cuál debería ser tu food cost?</h2>

<p>No existe un número universalmente correcto. Depende del tipo de negocio, del ticket medio, del modelo de servicio y de los costes fijos. Pero hay rangos orientativos.</p>

<p>En restauración a la carta con ticket medio-alto, un food cost entre el 28% y el 35% suele ser sostenible. En menús del día o cocina de volumen, puede bajar al 25%–30%. En negocios de alta gastronomía, puede subir al 38%–42% porque el margen se compensa con el precio.</p>

<p>Lo que sí es universal es esto: si tu food cost supera el 40% de forma consistente y no tienes un ticket muy alto, tienes un problema que resolver.</p>

<h2>Qué hacer cuando el food cost es demasiado alto</h2>

<p>Antes de tomar decisiones, hay que entender dónde se escapa el dinero. Las causas más frecuentes son la carta demasiado larga con muchos ingredientes que rotan poco, las porciones sin estandarizar, la falta de escandallos, las mermas no controladas y los proveedores sin negociación.</p>

<p>Subir precios es la palanca más obvia pero no siempre la más inteligente. A veces reducir la carta en un 30% mejora el food cost más que cualquier otra medida, porque concentras el volumen en menos referencias y reduces merma, complejidad y error.</p>

<h2>El food cost es un síntoma, no la enfermedad</h2>

<p>Un food cost alto casi nunca es el problema en sí. Es la señal de que algo más profundo no está funcionando: la carta, los procesos, los proveedores, el control de stock o la forma en que se diseñaron los precios.</p>

<p>Por eso calcularlo bien es el primer paso, pero no el último. La rentabilidad de un restaurante se construye entendiendo todos los indicadores juntos, no cada uno por separado.</p>

<p>Si quieres saber cómo está el food cost de tu negocio y qué lo está afectando, la herramienta de diagnóstico gratuito puede darte una primera foto en menos de cinco minutos.</p>

<p><a href="https://diagnostico.adrianpollan.com" target="_blank" rel="noopener noreferrer">Haz el diagnóstico gratuito de tu restaurante →</a></p>`,
  },
  {
    slug: "que-es-un-escandallo-y-por-que-lo-necesitas",
    title: "Qué es un escandallo y por qué sin él no controlas tu negocio",
    excerpt:
      "Descubre qué es un escandallo, cómo se hace y por qué es la herramienta más importante para controlar costes y rentabilidad en tu restaurante.",
    category: "Rentabilidad",
    date: "2026-05-11",
    readTime: "9 min",
    coverImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1792&q=80",
    body: `<p>Si hay una herramienta que separa a los restaurantes que controlan su negocio de los que simplemente trabajan y esperan que los números cuadren, esa es el escandallo. No es una palabra complicada ni una técnica reservada para grandes cadenas. Es una ficha de coste por plato. Y sin ella, estás fijando precios a ciegas.</p>

<p>Lo he visto cientos de veces. Un propietario que lleva años en el sector, que conoce su cocina mejor que nadie, que ha desarrollado una carta con criterio gastronómico real, pero que no sabe exactamente cuánto le cuesta producir cada plato. Sabe aproximadamente. Y aproximadamente, en hostelería, es sinónimo de margen incontrolado.</p>

<h2>Qué es un escandallo exactamente</h2>

<p>Un escandallo es un documento que recoge todos los ingredientes necesarios para elaborar un plato, con sus cantidades exactas y su coste por unidad. El resultado es el coste de producción de ese plato, que comparado con su precio de venta te da el food cost específico de ese plato y el margen que genera.</p>

<p>Un escandallo básico incluye: nombre del plato, lista de ingredientes con cantidad exacta, precio de compra de cada ingrediente, coste de cada ingrediente en la cantidad usada, coste total de producción, precio de venta con y sin IVA, food cost del plato en porcentaje y margen bruto por plato.</p>

<p>No es más complicado que eso. Una hoja de cálculo bien hecha es suficiente para empezar.</p>

<h2>Por qué la mayoría de restaurantes no tienen escandallos</h2>

<p>La respuesta más habitual es que no hay tiempo. Y es verdad que hacerlo bien requiere dedicación. Hay que pesar ingredientes, consultar facturas, calcular mermas y actualizar los datos cuando cambian los precios de los proveedores.</p>

<p>Pero la razón más profunda es que muchos propietarios y cocineros tienen miedo de lo que van a encontrar. Porque cuando haces el escandallo de un plato que llevas años vendiendo, a veces descubres que tiene un food cost del 48% y que cada vez que lo vendes estás ganando mucho menos de lo que creías.</p>

<p>Esa incomodidad es exactamente la razón por la que hay que hacerlo.</p>

<h2>Cómo hacer un escandallo paso a paso</h2>

<p>El proceso es más sencillo de lo que parece si se hace con orden.</p>

<p>El primer paso es elegir un plato y listar todos sus ingredientes con las cantidades exactas que se usan en cada ración. No las que deberían usarse en teoría, sino las que realmente se usan en cocina. Para eso hay que pesar, no estimar.</p>

<p>El segundo paso es calcular el coste de cada ingrediente. Si el lomo de cerdo cuesta 8 euros el kilo y usas 180 gramos por ración, el coste de ese ingrediente es 1,44 euros. Repite el proceso con cada ingrediente de la receta.</p>

<p>El tercer paso es sumar todos los costes para obtener el coste total de producción del plato. A ese número hay que añadirle un porcentaje de merma, que varía según el ingrediente pero que suele estar entre el 5% y el 20% dependiendo del producto.</p>

<p>El cuarto paso es comparar ese coste con el precio de venta del plato sin IVA y calcular el food cost: <strong>coste dividido entre precio de venta, multiplicado por cien.</strong></p>

<p>El quinto paso, y el más importante, es decidir qué hacer con esa información. Si el food cost de un plato es del 45% y tu objetivo está en el 32%, tienes tres opciones: subir el precio, reformular la receta para reducir el coste, o eliminar el plato de la carta.</p>

<h2>Qué pasa cuando los precios de los proveedores suben</h2>

<p>Uno de los problemas más frecuentes con los escandallos es que se hacen una vez y no se actualizan. Si el aceite sube un 30%, el coste de todos los platos en los que aparece sube también. Sin un sistema de actualización, el escandallo queda obsoleto en semanas.</p>

<p>La solución no es rehacerlo todo cada mes. Es identificar los ingredientes con mayor peso en el coste y actualizarlos cuando haya variaciones significativas de precio. En la práctica, con revisar el escandallo cada trimestre y cuando haya cambios de precio relevantes es suficiente para mantenerlo útil.</p>

<h2>El escandallo no es solo para cocina</h2>

<p>Una variante del escandallo que muchos restaurantes ignoran es la que aplica a las bebidas y a los cócteles. Un cóctel con cinco ingredientes puede tener un food cost muy alto si no está calculado con precisión. Lo mismo ocurre con las referencias de vino por copa o con los postres de producción propia.</p>

<p>Cualquier producto que elaboras y vendes en tu restaurante debería tener su escandallo. No solo los platos principales.</p>

<h2>Sin escandallo no hay carta inteligente</h2>

<p>El escandallo no es una herramienta contable. Es una herramienta de diseño de negocio. Cuando tienes los costes de todos tus platos calculados, puedes diseñar una carta que equilibre rentabilidad y atractivo gastronómico. Puedes identificar qué platos te interesa potenciar, cuáles deberías reformular y cuáles simplemente no tienen sentido mantener.</p>

<p>Un restaurante con escandallos actualizados toma decisiones de carta basadas en datos. Un restaurante sin escandallos toma decisiones basadas en intuición. Y en hostelería, la intuición sola es muy cara.</p>

<p>Si quieres saber si el control de costes de tu restaurante está donde debería estar, empieza por el diagnóstico gratuito. En menos de cinco minutos obtienes una primera foto de las áreas donde tu negocio puede estar perdiendo margen.</p>

<p><a href="https://diagnostico.adrianpollan.com" target="_blank" rel="noopener noreferrer">Haz el diagnóstico gratuito de tu restaurante →</a></p>`,
  },
  {
    slug: "labour-cost-en-hosteleria-cuanto-gastar-en-personal",
    title: "Labour cost en hostelería: cuánto deberías gastar en personal",
    excerpt:
      "Aprende qué es el labour cost, cómo calcularlo y cuánto debería representar el coste de personal en un restaurante o negocio de hostelería rentable.",
    category: "Rentabilidad",
    date: "2026-05-04",
    readTime: "9 min",
    coverImage:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1792&q=80",
    body: `<p>El coste de personal es, en la mayoría de los restaurantes, el gasto más grande después de la materia prima. Y también el más difícil de gestionar, porque detrás de cada número hay personas, horarios, contratos y decisiones que tienen consecuencias reales.</p>

<p>El labour cost, o coste laboral, es el porcentaje de tus ingresos que se destina a pagar al equipo. Incluye salarios, seguridad social, pagas extras y cualquier otro coste asociado a tener personas trabajando en tu negocio. Si no lo mides, no lo controlas. Y si no lo controlas, puede comerse tu margen sin que te des cuenta.</p>

<h2>Cómo se calcula el labour cost</h2>

<p>La fórmula es directa:</p>

<p><strong>Labour cost (%) = (Coste total de personal / Ventas) × 100</strong></p>

<p>Si en un mes pagas 12.000 euros en personal y facturas 40.000 euros, tu labour cost es del 30%. Parece sencillo, pero hay un error frecuente: incluir solo los salarios brutos y olvidar la seguridad social a cargo de la empresa, que en España supone aproximadamente un 30% adicional sobre el salario bruto.</p>

<p>Si un camarero cobra 1.500 euros brutos al mes, el coste real para el negocio es de aproximadamente 1.950 euros contando la seguridad social. Ese es el número que tiene que entrar en el cálculo, no el salario bruto.</p>

<h2>¿Cuál debería ser tu labour cost?</h2>

<p>Como ocurre con el food cost, no existe un número único válido para todos los negocios. Depende del tipo de restaurante, del nivel de servicio, del ticket medio y del modelo operativo. Pero hay rangos de referencia útiles.</p>

<p>En restauración a la carta con servicio completo, un labour cost entre el 28% y el 35% suele ser sostenible. En restaurantes de menú del día o de alto volumen con servicio más sencillo, puede bajar al 22%–28%. En negocios de alta gastronomía con equipos grandes y altamente cualificados, puede superar el 40% si el ticket lo permite.</p>

<p>Lo que sí puedo decirte con certeza es que si tu labour cost supera el 40% de forma sostenida en un restaurante de ticket medio, tienes un problema estructural que no se resuelve solo trabajando más horas.</p>

<h2>Por qué el labour cost se descontrola</h2>

<p>He visto restaurantes con un labour cost del 48% que no entendían por qué sus números no cuadraban. Cuando analizábamos la situación, las causas siempre eran parecidas.</p>

<p>La primera es la sobredotación de turnos. Tener más personal del necesario para el volumen de trabajo real. Esto ocurre especialmente cuando los horarios se planifican por costumbre y no por previsión de ventas.</p>

<p>La segunda es la falta de flexibilidad en la plantilla. Una estructura muy rígida, con todo el equipo a jornada completa sin posibilidad de ajustar según la demanda, hace muy difícil controlar el coste cuando las ventas bajan.</p>

<p>La tercera es no medir la productividad. ¿Cuántos euros de venta genera cada hora trabajada? Si no tienes ese dato, no sabes si tu equipo está dimensionado correctamente para el negocio que tienes.</p>

<p>La cuarta, y menos evidente, es el absentismo no gestionado. Las bajas, las sustituciones de última hora y las horas extra no planificadas pueden disparar el coste laboral real muy por encima del presupuestado.</p>

<h2>La métrica que más me gusta: ventas por hora trabajada</h2>

<p>El labour cost en porcentaje es útil, pero tiene un límite: no te dice si el problema es de ventas o de personal. Si tus ventas bajan un mes, tu labour cost sube automáticamente aunque hayas mantenido exactamente el mismo equipo.</p>

<p>Por eso me gusta complementarlo con las ventas por hora trabajada. Es simple: divide las ventas del período entre las horas totales trabajadas por el equipo. Si ese número baja de forma sostenida, tienes un problema de productividad o de dimensionamiento.</p>

<h2>Reducir el labour cost sin destruir el equipo</h2>

<p>Cuando el labour cost es demasiado alto, la reacción instintiva es recortar personal. A veces es necesario, pero casi nunca es la primera medida que hay que tomar.</p>

<p>Antes de recortar, hay que revisar la planificación de turnos. ¿Están los turnos alineados con los picos de demanda reales? ¿Hay momentos del día o de la semana donde tienes personal de más y momentos donde tienes personal de menos?</p>

<p>Hay que revisar también la estructura de contratos. En muchos restaurantes hay margen para introducir más flexibilidad sin perder calidad de servicio ni comprometer los derechos del equipo.</p>

<p>Y hay que revisar los procesos. A veces el equipo es suficiente pero los procesos son tan ineficientes que se necesitan más personas para hacer el mismo trabajo. Mejorar los flujos de cocina o de sala puede reducir las horas necesarias sin tocar la plantilla.</p>

<h2>El labour cost y el food cost juntos</h2>

<p>En restauración hay un indicador combinado que me parece especialmente útil: el prime cost, que es la suma del food cost y el labour cost. Si tu prime cost supera el 65%–70% de las ventas, tienes muy poco margen para cubrir el resto de gastos fijos y generar beneficio.</p>

<p>Gestionar el prime cost como un todo, en lugar de mirar food cost y labour cost por separado, te da una visión más completa de la salud económica de tu negocio.</p>

<p>Si quieres saber cómo está el coste de personal de tu restaurante y si hay margen de mejora, el diagnóstico gratuito puede darte una primera orientación en menos de cinco minutos.</p>

<p><a href="https://diagnostico.adrianpollan.com" target="_blank" rel="noopener noreferrer">Haz el diagnóstico gratuito de tu restaurante →</a></p>`,
  },
  {
    slug: "como-mejorar-el-margen-de-un-restaurante-sin-subir-precios",
    title: "Cómo mejorar el margen de un restaurante sin subir precios",
    excerpt:
      "Descubre las palancas reales para mejorar el margen de tu restaurante sin tocar los precios. Estrategias prácticas basadas en operativa real.",
    category: "Rentabilidad",
    date: "2026-04-27",
    readTime: "8 min",
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1792&q=80",
    body: `<p>Cuando un restaurante tiene problemas de margen, la primera solución que aparece en la cabeza del propietario es subir precios. Es comprensible. Si el problema es que no queda suficiente dinero, parece lógico cobrar más por lo mismo. Pero subir precios sin entender por qué el margen es bajo puede ser un error caro.</p>

<p>A veces el precio no es el problema. Y subirlo sin haber resuelto lo que sí lo es simplemente aplaza la crisis.</p>

<p>He trabajado con restaurantes que tenían precios correctos para su mercado y aun así márgenes muy bajos. En todos los casos, el problema estaba en otro sitio. Y en casi todos, había palancas para mejorar el margen sin tocar la carta de precios.</p>

<h2>Primero, entiende dónde se escapa el dinero</h2>

<p>Antes de actuar, hay que saber exactamente dónde está el problema. Un margen bajo puede venir de un food cost alto, de un labour cost descontrolado, de unos gastos fijos que no corresponden al volumen de negocio, de una mezcla de ventas desfavorable o de una combinación de varios de estos factores.</p>

<p>Sin ese diagnóstico, cualquier acción es un disparo a ciegas. El punto de partida siempre es la misma pregunta: ¿dónde se está yendo el dinero exactamente?</p>

<h2>Palanca 1: Rediseña tu carta con criterio de margen</h2>

<p>La carta es la herramienta de venta más importante de un restaurante y también una de las más descuidadas desde el punto de vista económico. Muchos restaurantes tienen cartas largas con platos que generan márgenes muy distintos, y no saben cuáles son cuáles.</p>

<p>Cuando haces el escandallo de todos tus platos y los ordenas por margen, casi siempre aparece el mismo patrón: hay un grupo reducido de platos que generan la mayor parte del margen, y hay platos que se venden bien pero que contribuyen poco o nada a la rentabilidad.</p>

<p>Una carta más corta, diseñada con criterio económico, casi siempre mejora el margen. Además reduce la complejidad operativa, baja las mermas y facilita la formación del equipo.</p>

<h2>Palanca 2: Controla las mermas</h2>

<p>Las mermas son uno de los grandes agujeros invisibles de la rentabilidad en hostelería. Son invisibles porque no aparecen en ninguna comanda, no generan ninguna queja y nadie las contabiliza de forma activa.</p>

<p>Sin embargo, en muchos restaurantes las mermas representan entre el 3% y el 8% del coste de materia prima. En un restaurante que gasta 10.000 euros al mes en producto, eso son entre 300 y 800 euros mensuales que se van a la basura.</p>

<p>Controlar las mermas requiere estandarizar porciones, mejorar la gestión del stock, rotar correctamente los productos y tener procesos claros de cocina. No es glamuroso, pero el impacto en el margen es inmediato y medible.</p>

<h2>Palanca 3: Optimiza la mezcla de ventas</h2>

<p>La mezcla de ventas es la proporción en la que tus clientes eligen cada plato o producto de tu carta. Y tiene un impacto enorme en el margen real, aunque el precio promedio no cambie.</p>

<p>Se puede influir en la mezcla de ventas a través del diseño de la carta, la disposición visual de los platos, las recomendaciones del equipo de sala y las descripciones de los platos. Un equipo bien formado que sabe cuáles son los platos más rentables y cómo recomendarlos puede mejorar el margen de forma significativa.</p>

<h2>Palanca 4: Revisa tus costes fijos</h2>

<p>Los costes fijos son los que tienes independientemente de cuánto vendas: alquiler, suministros, seguros, software, servicios externos. Una revisión anual de todos los contratos y servicios recurrentes casi siempre encuentra margen de reducción.</p>

<p>También hay que revisar si el volumen de negocio justifica los costes fijos que tienes. Si tu estructura de costes fijos está diseñada para un volumen de ventas que no estás alcanzando, el margen nunca va a ser suficiente independientemente de lo que hagas en la operativa.</p>

<h2>Palanca 5: Mejora la productividad del equipo</h2>

<p>Mejorar la productividad no significa necesariamente reducir personal. Significa asegurarse de que las horas trabajadas se utilizan de la forma más eficiente posible.</p>

<p>Turnos mejor planificados, procesos más claros, formación adecuada y una buena organización de la cocina pueden mejorar significativamente la productividad sin tocar la plantilla. Y esa mejora se traduce directamente en margen.</p>

<h2>El margen se construye en los detalles</h2>

<p>No existe una sola palanca que resuelva un problema de margen. Casi siempre es la combinación de varias mejoras moderadas lo que genera un cambio real. Una reducción del food cost del 2%, una mejora de la mezcla de ventas, una reducción de mermas del 1% y una optimización de turnos pueden sumarse para transformar la rentabilidad de un negocio.</p>

<p>Por eso el diagnóstico es tan importante. Antes de actuar, hay que saber exactamente dónde están las oportunidades de mejora más grandes para tu negocio concreto.</p>

<p>Si quieres una primera foto de dónde está perdiendo margen tu restaurante, el diagnóstico gratuito puede ayudarte a verlo en menos de cinco minutos.</p>

<p><a href="https://diagnostico.adrianpollan.com" target="_blank" rel="noopener noreferrer">Haz el diagnóstico gratuito de tu restaurante →</a></p>`,
  },
  {
    slug: "por-que-tu-restaurante-no-es-rentable",
    title: "Por qué tu restaurante llena pero no es rentable",
    excerpt:
      "Mucha gente cree que el problema es que no tienen suficientes clientes. Suelen estar equivocados. El problema casi siempre está en los márgenes, la estructura de costes y cómo gestionan lo que ya tienen.",
    category: "Rentabilidad",
    date: "2026-04-20",
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
    date: "2026-04-13",
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
    date: "2026-04-06",
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
    slug: "por-que-tu-restaurante-no-es-rentable-aunque-este-lleno",
    title: "Por qué tu restaurante no es rentable aunque esté lleno",
    excerpt:
      "Muchos restaurantes tienen buena ocupación y aun así no generan el beneficio que deberían. Descubre por qué ocurre y qué palancas actuar primero.",
    category: "Rentabilidad",
    date: "2026-03-30",
    readTime: "8 min",
    coverImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1792&q=80",
    body: `<p>Es una de las situaciones más frustrantes que existen en hostelería. El restaurante tiene vida, los clientes vienen, la sala se llena los fines de semana y el equipo trabaja duro. Y sin embargo, a fin de mes los números no cuadran. O cuadran por muy poco. O directamente no cuadran.</p>

<p>"No lo entiendo, estamos siempre llenos." Lo he escuchado más veces de las que puedo contar. Y siempre digo lo mismo: llenar el restaurante y ganar dinero con el restaurante son dos cosas distintas. Relacionadas, pero distintas.</p>

<p>La ocupación es una condición necesaria para la rentabilidad, pero no suficiente. Puedes tener el restaurante lleno y perder dinero. Y puedes tener el restaurante a media capacidad y ser rentable. La diferencia está en lo que pasa entre que el cliente entra por la puerta y que el dinero llega a tu cuenta.</p>

<h2>El error más común: confundir facturación con rentabilidad</h2>

<p>Cuando un propietario dice "vendemos bien", casi siempre está hablando de facturación. De cuánto entra por caja. Pero la facturación no es beneficio. Es el punto de partida del cálculo, no el resultado.</p>

<p>Lo que determina si un restaurante es rentable no es cuánto vende, sino cuánto le cuesta producir lo que vende y qué estructura de gastos tiene detrás. Un restaurante puede facturar 50.000 euros al mes y tener un beneficio de 1.000 euros. O puede facturar 25.000 y tener un beneficio de 4.000. La cifra de ventas no te dice nada sobre la salud económica del negocio.</p>

<h2>Dónde se escapa el dinero</h2>

<p>Hay cinco lugares donde el margen desaparece con más frecuencia en restaurantes con buena ocupación.</p>

<p>El primero es el food cost descontrolado. Si no tienes escandallos actualizados, si las porciones no están estandarizadas o si las mermas no se controlan, puedes estar perdiendo entre el 5% y el 12% de tu facturación sin saberlo. En un restaurante que factura 30.000 euros al mes, eso son entre 1.500 y 3.600 euros que se van sin aparecer en ninguna comanda.</p>

<p>El segundo es el labour cost sobredimensionado. Tener más personal del necesario para el volumen real de trabajo es uno de los gastos más silenciosos en hostelería. No duele en el momento porque es un coste que parece inevitable, pero se acumula mes a mes y puede representar varios puntos de margen que nunca recuperas.</p>

<p>El tercero es una carta con mala rentabilidad media. Si los platos que más salen son los que tienen menor margen, tu rentabilidad baja aunque el ticket medio parezca razonable. La mezcla de ventas importa tanto como el precio de cada plato.</p>

<p>El cuarto es una estructura de costes fijos desproporcionada. El alquiler, los suministros, los servicios externos y los contratos recurrentes son gastos que se pagan independientemente de cuánto vendas. Si esa estructura fue diseñada para un volumen de negocio mayor al que tienes, el margen nunca va a ser suficiente.</p>

<p>El quinto, y el menos visible, es la falta de control sobre los números. Muchos restaurantes no tienen un sistema real de seguimiento de indicadores. No saben su food cost real, no calculan el labour cost correctamente, no hacen inventario con regularidad. Toman decisiones basadas en la impresión general, no en datos. Y sin datos, los problemas se acumulan antes de que sean visibles.</p>

<h2>Por qué la solución no siempre es vender más</h2>

<p>Cuando el margen es bajo, la reacción natural es intentar aumentar las ventas. Más clientes, más turnos, más eventos, más marketing. A veces tiene sentido. Pero si los problemas están en los costes o en la estructura, vender más solo amplifica el problema.</p>

<p>Si por cada euro que factura tu restaurante te quedan 3 céntimos de margen, vender el doble te va a dejar 6 céntimos. Seguirás trabajando el doble para ganar muy poco.</p>

<p>La rentabilidad no se construye únicamente desde las ventas. Se construye desde el control de lo que cuesta producir, desde una estructura de costes razonable y desde decisiones de carta y operativa basadas en datos reales.</p>

<h2>Qué hacer si reconoces esta situación</h2>

<p>El primer paso es siempre el mismo: entender exactamente qué está pasando. No de forma aproximada, sino con datos concretos. Cuánto es tu food cost real, cuánto representa el personal sobre las ventas, qué platos tienen mejor y peor margen, qué costes fijos tienes y si son razonables para tu volumen.</p>

<p>Con esa información, las decisiones son mucho más claras. Sin ella, cualquier cambio es una apuesta.</p>

<p>Si llevas tiempo con la sensación de que algo no cuadra pero no consigues identificar exactamente qué es, el diagnóstico gratuito puede ser un buen punto de partida. En menos de cinco minutos obtienes una primera foto de las áreas donde tu negocio puede estar perdiendo rentabilidad.</p>

<p><a href="https://diagnostico.adrianpollan.com" target="_blank" rel="noopener noreferrer">Haz el diagnóstico gratuito de tu restaurante →</a></p>`,
  },
];
