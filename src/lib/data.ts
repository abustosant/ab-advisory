// ═══════════════════════════════════════
// AB Advisory — Datos centralizados del sitio
// ═══════════════════════════════════════

export const SITE = {
  name: 'AB Advisory',
  tagline: 'Asesoría Financiera · Contable · RRHH',
  description: 'Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile. Excelencia técnica de multinacional, dedicación exclusiva.',
  phone: '(+56) 9 9308 4548',
  phoneRaw: '+56993084548',
  email: 'contacto@abadvisory.cl',
  linkedin: 'https://linkedin.com/in/andresbustosant',
  location: 'Santiago de Chile · Presencial y remoto',
  schedule: 'Lunes a viernes · 9:00 – 18:30',
  year: new Date().getFullYear().toString(),
  web3forms: 'https://api.web3forms.com/submit',
  web3formsKey: 'd4aaabdb-3cca-4359-9e6d-2ba442945287',
}

export const FOUNDER = {
  name: 'Andrés Bustos A.',
  nameShort: 'Andrés Bustos',
  role: 'Founder & Director Ejecutivo · AB Advisory',
  eyebrow: 'Director Fundador',
  statement: '"Las empresas que aspiran a competir en los más altos estándares merecen asesoría con la misma profundidad analítica y disciplina técnica de las grandes firmas internacionales — y la atención exclusiva que solo una boutique puede ofrecer."',
  expertise: [
    'Finanzas Corporativas',
    'IFRS & Consolidación',
    'Reestructuración de Deuda',
    'Compliance Corporativo',
    'Transformación de Procesos',
    'Reporting Ejecutivo',
  ],
  sectors: [
    'Aeronáutico', 'Industrial', 'Logística', 'Retail',
    'BPO Internacional', 'Holdings & Grupos', 'Construcción',
  ],
}

export const METRICS = [
  { value: 20, suffix: '+', label: 'Años en finanzas\ncorporativas' },
  { value: 20, suffix: '+', label: 'Procesos de reestructuración\ncon mejora de caja >20%' },
  { value: 34, label: 'Empresas consolidadas\nIFRS sin observaciones' },
  { value: 500, prefix: 'USD ', suffix: 'K', label: 'Ahorros anuales via\nnegociación estratégica' },
]

export const KPIS = [
  { value: 'USD 500K', label: 'Ahorros anuales' },
  { value: '40%', label: 'Reducción en cierres' },
  { value: '+25%', label: 'Precisión proyecciones' },
  { value: '100%', label: 'Cumplimiento SII' },
]

export const SERVICES = [
  {
    num: '01',
    category: 'Finanzas Corporativas',
    title: 'Asesoría Financiera',
    description: 'Estructuración de deuda, modelamiento financiero y planificación estratégica para CFOs y directorios que exigen respaldo técnico de primer nivel.',
    image: '/images/servicios/financiero.webp',
    items: [
      'Reestructuración y refinanciamiento de deuda',
      'Modelos DCF, valorización y M&A support',
      'Rolling Forecast 6QTR methodology',
      'Dashboards Power BI para directorio',
    ],
    href: '/servicios/financiero',
    cta: 'Conocer la metodología',
    ctaSub: 'Acceso directo al socio · sin intermediarios',
    color: '#0F4C7A',
  },
  {
    num: '02',
    category: 'Contabilidad · IFRS',
    title: 'Contabilidad & IFRS',
    description: 'Implementación IFRS/NIC y outsourcing contable para grupos empresariales con exigencias de reporte internacional y auditorías Big Four.',
    image: '/images/servicios/contable.webp',
    items: [
      'Implementación y actualización IFRS/NIC',
      'Consolidación de grupos (hasta 34+ entidades)',
      'Shared Services Center contable',
      'Preparación auditorías Big Four',
    ],
    href: '/servicios/contable',
    cta: 'Ver proceso de implementación',
    ctaSub: 'Mandatos con confidencialidad absoluta',
    color: '#138040',
  },
  {
    num: '03',
    category: 'Recursos Humanos',
    title: 'Gestión de RRHH',
    description: 'Outsourcing de remuneraciones, cumplimiento laboral y Compliance RRHH para empresas con dotaciones significativas y alta complejidad.',
    image: '/images/servicios/rrhh.webp',
    items: [
      'Liquidaciones de sueldo y nómina electrónica',
      'Contratos, finiquitos y calificaciones',
      'Compliance Ley 20.393',
      'Planificación tributaria de remuneraciones',
    ],
    href: '/servicios/rrhh',
    cta: 'Conocer el enfoque de compliance',
    ctaSub: 'Dedicación exclusiva en cada mandato',
    color: '#7C3AED',
  },
]

export const DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Formación Big Four, enfoque boutique',
    body: 'Entrenado en los estándares de auditoría y reporte de los entornos corporativos más exigentes — LATAM Airlines Group, grupos multisociedad, procesos Big Four. Ese criterio se aplica íntegramente en cada mandato, sin importar el tamaño del cliente.',
  },
  {
    num: '02',
    title: 'Acceso directo al socio, sin intermediarios',
    body: 'No hay delegación. Cada proyecto es gestionado directamente por el Director Fundador, con la misma atención que un socio de firma internacional dedica a su cliente más importante. Usted habla con quien toma las decisiones.',
  },
  {
    num: '03',
    title: 'Honorarios transparentes, alcance definido',
    body: 'Propuesta detallada antes de comenzar: alcance, plazos y entregables específicos. Sin sorpresas en la facturación final ni costos por horas no acordadas.',
  },
]

export const SERVICES_ADDITIONAL = [
  {
    num: '04',
    category: 'Auditoría',
    title: 'Auditoría & Control Interno',
    description: 'Soporte técnico a procesos de auditoría interna y preparación para revisiones de auditores externos con estándares Big Four.',
    items: [
      'Diseño y ejecución de auditorías internas',
      'Revisión de controles internos y procesos',
      'Preparación para auditorías Big Four',
      'Informes de hallazgos y recomendaciones',
    ],
    href: '/servicios/auditoria',
    cta: 'Ver alcance de auditoría',
    ctaSub: 'Experiencia directa en procesos Big Four',
  },
  {
    num: '05',
    category: 'Compliance',
    title: 'Compliance Corporativo',
    description: 'Diseño e implementación de programas de cumplimiento normativo bajo Ley 20.393 y regulaciones sectoriales vigentes en Chile.',
    items: [
      'Programa de cumplimiento Ley 20.393',
      'Matriz de riesgos y controles corporativos',
      'Políticas internas y manuales de cumplimiento',
      'Capacitación a equipos directivos',
    ],
    href: '/servicios/compliance',
    cta: 'Ver programa de compliance',
    ctaSub: 'Compliance Officer Certificado · UAI',
  },
  {
    num: '06',
    category: 'Due Diligence',
    title: 'Due Diligence Financiero',
    description: 'Análisis financiero profundo para procesos de M&A, inversión o desinversión. Informes ejecutivos para directorio e inversionistas.',
    items: [
      'Due diligence financiero y contable',
      'Revisión de estados financieros históricos',
      'Identificación de contingencias y riesgos',
      'Informe ejecutivo para directorio o inversionistas',
    ],
    href: '/servicios/due-diligence',
    cta: 'Ver metodología de due diligence',
    ctaSub: 'Mandatos con confidencialidad absoluta',
  },
]

export const PROCESS = [
  {
    num: '01',
    title: 'Diagnóstico Inicial',
    description: 'Primera conversación. Entendemos su operación, identificamos brechas y definimos el alcance exacto del trabajo necesario.',
  },
  {
    num: '02',
    title: 'Propuesta a Medida',
    description: 'Alcance, plazos y honorarios transparentes. Sin sorpresas ni letra chica. Usted aprueba cada paso antes de comenzar.',
  },
  {
    num: '03',
    title: 'Implementación',
    description: 'Metodologías probadas en grandes corporaciones: IFRS, Power BI y procesos estandarizados con reportería ejecutiva.',
  },
  {
    num: '04',
    title: 'Soporte Continuo',
    description: 'Acompañamiento permanente, actualización normativa proactiva y optimización continua de sus procesos financieros.',
  },
]

export const IMPACT = [
  {
    sector: 'Holdings & Grupos Empresariales',
    title: 'Consolidación financiera de 34 entidades bajo IFRS',
    description: 'Diseño e implementación de un Shared Services Center contable para un grupo multisociedad. Estados financieros consolidados con cero observaciones en auditorías Big Four durante múltiples periodos consecutivos.',
    metric: '40% reducción en tiempos de cierre financiero',
  },
  {
    sector: 'Reestructuración Financiera',
    title: 'Reestructuración de deuda corporativa con mejora documentada de caja',
    description: 'Liderazgo de proceso de reestructuración de deuda corporativa en contexto de alta complejidad operativa. Implementación de Rolling Forecast 6QTR con mejora del 25% en precisión de proyecciones de liquidez.',
    metric: '+20% eficiencia de caja · USD 500K ahorros anuales',
  },
  {
    sector: 'Aviación Comercial',
    title: 'Contabilidad corporativa en el mayor grupo aéreo de Latinoamérica',
    description: 'Gestión contable en entorno multinacional, multi-divisa y con exigencias regulatorias de estándar internacional. Implementación y mantención de normas IFRS en operaciones de múltiples países simultáneos.',
    metric: 'Auditorías internacionales sin observaciones',
  },
  {
    sector: 'Industria & Manufactura',
    title: 'Transformación digital del área financiera con Power BI',
    description: 'Diseño de dashboards ejecutivos en Power BI para reportería a directorio. Estandarización de más de 50 procesos financieros con reducción de errores operacionales.',
    metric: '+50 procesos estandarizados · Reportería en tiempo real',
  },
]

export const TESTIMONIALS = [
  {
    initials: 'RC',
    name: 'Ricardo C.',
    role: 'CFO · Empresa Industrial · 800 empleados',
    text: 'Andrés lideró nuestra migración a IFRS en tiempo récord. Su conocimiento técnico fue determinante. Las Big Four nos cotizaron el triple y con menos profundidad en el análisis.',
  },
  {
    initials: 'MV',
    name: 'Marcela V.',
    role: 'Gerente General · Holding de Servicios',
    text: 'La reestructuración generó USD 15M de alivio financiero con impacto directo en el flujo de caja. Valoro el acceso directo al experto — sin intermediarios ni juniors.',
  },
  {
    initials: 'FP',
    name: 'Felipe P.',
    role: 'Director · Grupo Retail · 3 empresas',
    text: 'El outsourcing de remuneraciones eliminó errores y reclamos. El dashboard Power BI nos dio visibilidad real del costo de personal por área por primera vez en 10 años.',
  },
]

export const INSIGHTS = [
  {
    slug: 'ifrs-18-presentacion',
    category: 'IFRS · Normativa',
    title: 'IFRS 18: La nueva norma de presentación de estados financieros que entrará en vigor en 2027',
    author: 'AB Advisory',
    readTime: '7 min lectura',
    date: 'Marzo 2026',
    image: '/images/insights/ifrs-18.webp',
    featured: true,
    href: '/insights/ifrs-18-presentacion',
    relatedServices: [
      { label: 'Contabilidad & IFRS', href: '/servicios/contable' },
      { label: 'Auditoría & Control Interno', href: '/servicios/auditoria' },
    ],
    description: 'El IASB publicó la IFRS 18 para reemplazar la IAS 1. La nueva norma introduce cambios estructurales en la presentación del estado de resultados, con tres categorías obligatorias que afectarán cómo las empresas chilenas comunican su desempeño a partir del 1 de enero de 2027.',
    body: [
      {
        type: 'paragraph',
        text: 'En abril de 2024, el IASB publicó la IFRS 18 "Presentación e Información a Revelar en los Estados Financieros", reemplazando a la IAS 1 vigente desde 1997. Esta nueva norma, de aplicación obligatoria para ejercicios iniciados el 1 de enero de 2027, introduce cambios estructurales que los CFOs y equipos contables deben comenzar a analizar hoy.',
      },
      {
        type: 'heading',
        text: 'Las tres categorías obligatorias del estado de resultados',
      },
      {
        type: 'paragraph',
        text: 'El cambio más relevante de la IFRS 18 es la introducción de tres categorías obligatorias en el estado de resultados: actividades de operación, actividades de inversión y actividades de financiamiento. Esto elimina la flexibilidad actual de la IAS 1 y exige que cada partida quede clasificada de forma consistente y comparable entre empresas.',
      },
      {
        type: 'list',
        items: [
          'Categoría de operación: incluye todos los ingresos y gastos que no sean de inversión ni financiamiento, más los elementos definidos como "principales" por la norma.',
          'Categoría de inversión: retornos de activos que generan ingresos de forma independiente de otras actividades del negocio.',
          'Categoría de financiamiento: costos de financiamiento del pasivo y rendimientos del efectivo y equivalentes.',
        ],
      },
      {
        type: 'heading',
        text: 'El concepto de "subtotal de beneficio operativo de gestión" (MPM)',
      },
      {
        type: 'paragraph',
        text: 'La IFRS 18 introduce los Management-defined Performance Measures (MPM): métricas de rendimiento definidas por la administración que se incluyen en comunicaciones públicas y deben ser conciliadas en los estados financieros. Si su empresa utiliza EBITDA ajustado, NOI u otras métricas propias, deberá revelar una conciliación detallada con las líneas del estado de resultados bajo IFRS.',
      },
      {
        type: 'heading',
        text: 'Impacto práctico para empresas chilenas',
      },
      {
        type: 'list',
        items: [
          'Revisar la clasificación actual de todas las partidas del estado de resultados bajo los nuevos criterios.',
          'Evaluar si las métricas de rendimiento comunicadas a directorios e inversionistas califican como MPM y requerirán revelación formal.',
          'Actualizar sistemas ERP y plataformas contables para permitir la extracción de datos bajo la nueva estructura.',
          'Preparar comparativos del ejercicio 2026 bajo IFRS 18, ya que la norma exige presentación retroactiva.',
          'Capacitar al equipo contable y alinear con el auditor externo con al menos 12 meses de anticipación.',
        ],
      },
      {
        type: 'paragraph',
        text: 'En AB Advisory acompañamos procesos de convergencia y actualización normativa IFRS en empresas chilenas con exigencias de reporte internacional. Si necesita evaluar el impacto específico de la IFRS 18 en sus estados financieros, contáctenos para una evaluación técnica de su caso.',
      },
    ],
  },
  {
    slug: 'ifrs-2025',
    category: 'IFRS · Normativa',
    title: 'Cambios críticos en IFRS 17 y 9 para empresas chilenas: lo que su CFO debe saber',
    author: 'AB Advisory',
    readTime: '8 min lectura',
    date: 'Marzo 2026',
    relatedServices: [
      { label: 'Contabilidad & IFRS', href: '/servicios/contable' },
      { label: 'Auditoría & Control Interno', href: '/servicios/auditoria' },
    ],
    image: '/images/insights/ifrs-2025.webp',
    featured: false,
    href: '/insights/ifrs-2025',
    description: 'Las actualizaciones a IFRS 17 (contratos de seguros) e IFRS 9 (instrumentos financieros) generan impactos concretos en los estados financieros de empresas chilenas. Este artículo analiza los cambios más relevantes y cómo prepararse.',
    body: [
      {
        type: 'paragraph',
        text: 'Las International Financial Reporting Standards no son un cuerpo normativo estático. Cada ciclo de actualización del IASB trae consigo cambios que, aunque parezcan técnicos y distantes, tienen impacto directo en cómo su empresa reconoce ingresos, valora activos y reporta a sus stakeholders.',
      },
      {
        type: 'heading',
        text: 'IFRS 9: Lo que cambia en instrumentos financieros',
      },
      {
        type: 'paragraph',
        text: 'La última enmienda a IFRS 9 introduce ajustes en el modelo de pérdidas crediticias esperadas (ECL) y en la clasificación de activos financieros. Para empresas chilenas con cartera de cuentas por cobrar significativa o con deuda estructurada, esto significa revisar los modelos de deterioro existentes y actualizar las políticas contables.',
      },
      {
        type: 'paragraph',
        text: 'El punto más crítico: las empresas que no hayan actualizado sus modelos de ECL enfrentarán observaciones en sus próximas auditorías. Si su empresa tiene deuda con covenants financieros, un cambio en la clasificación de instrumentos puede alterar el cumplimiento de esos covenants sin que haya ocurrido ningún evento operacional.',
      },
      {
        type: 'heading',
        text: 'IFRS 17: El impacto en grupos con empresas aseguradoras o contratos de tipo seguro',
      },
      {
        type: 'paragraph',
        text: 'Si bien IFRS 17 aplica directamente a compañías de seguros, su alcance se extiende a cualquier contrato que transfiera riesgo de seguro. Grupos empresariales con subsidiarias en el sector financiero o con contratos de garantía financiera deben evaluar si alguno de sus acuerdos cae dentro del alcance de esta norma.',
      },
      {
        type: 'paragraph',
        text: 'La adopción completa de IFRS 17 requiere un sistema de medición de contratos de seguro bajo tres modelos posibles: General Measurement Model (GMM), Premium Allocation Approach (PAA) y Variable Fee Approach (VFA). La elección incorrecta del modelo puede generar volatilidad innecesaria en el estado de resultados.',
      },
      {
        type: 'heading',
        text: 'Pasos concretos para su CFO',
      },
      {
        type: 'list',
        items: [
          'Realizar un diagnóstico de impacto específico para su empresa antes del cierre anual.',
          'Revisar todos los contratos que podrían caer bajo el alcance de IFRS 17.',
          'Actualizar el modelo de ECL para cuentas por cobrar e instrumentos financieros.',
          'Comunicar los impactos esperados al directorio antes del cierre anual.',
          'Asegurarse de que el auditor externo esté alineado con las políticas adoptadas.',
        ],
      },
      {
        type: 'paragraph',
        text: 'En AB Advisory hemos acompañado múltiples procesos de convergencia IFRS en empresas chilenas con exigencias de reporte internacional. Si necesita un diagnóstico técnico para su caso, contáctenos para coordinar una revisión.',
      },
    ],
  },
  {
    slug: 'reestructuracion-deuda',
    category: 'Finanzas Corporativas',
    title: 'Cuándo y cómo reestructurar la deuda sin perder la clasificación crediticia',
    author: 'AB Advisory',
    readTime: '5 min',
    date: 'Marzo 2026',
    relatedServices: [
      { label: 'Asesoría Financiera', href: '/servicios/financiero' },
      { label: 'Due Diligence Financiero', href: '/servicios/due-diligence' },
    ],
    image: '/images/insights/reestructuracion.webp',
    featured: false,
    href: '/insights/reestructuracion-deuda',
    description: 'Reestructurar deuda no es sinónimo de crisis. Cuando se hace bien y en el momento correcto, es una herramienta de gestión financiera que mejora el flujo de caja y protege la clasificación crediticia.',
    body: [
      {
        type: 'paragraph',
        text: 'Uno de los errores más costosos que cometen los CFOs es esperar a estar en una posición de debilidad negociadora antes de abordar una reestructuración de deuda. La reestructuración proactiva, realizada cuando la empresa aún cumple sus compromisos, es radicalmente diferente — tanto en términos de condiciones obtenidas como de impacto en la clasificación crediticia.',
      },
      {
        type: 'heading',
        text: '¿Cuándo es el momento correcto?',
      },
      {
        type: 'paragraph',
        text: 'Hay señales tempranas que justifican iniciar una evaluación: margen de cobertura de intereses cayendo hacia 2x, concentración de vencimientos en los próximos 18 meses, o cambios estructurales en el negocio que alteran el perfil de flujos. Esperar a que los covenants sean incumplidos elimina prácticamente todo el poder de negociación.',
      },
      {
        type: 'heading',
        text: 'El proceso en cuatro etapas',
      },
      {
        type: 'list',
        items: [
          'Diagnóstico de estructura de pasivos: análisis de vencimientos, tasas, covenants y garantías vigentes.',
          'Modelamiento de escenarios: construcción de un modelo de flujo de caja a 3-5 años con distintos supuestos operacionales.',
          'Estrategia de negociación: definición de la estructura objetivo y priorización de acreedores.',
          'Implementación y monitoreo: cierre de acuerdos, actualización de contratos y seguimiento post-reestructuración.',
        ],
      },
      {
        type: 'heading',
        text: 'Proteger la clasificación crediticia',
      },
      {
        type: 'paragraph',
        text: 'Las clasificadoras de riesgo (Fitch, Moody\'s, Humphreys en Chile) evalúan una reestructuración en función de si responde a una gestión proactiva del pasivo o a dificultades operacionales. La narrativa importa tanto como los números. Una reestructuración bien comunicada, con un plan de negocios sólido y acceso al experto en el proceso, puede mantener o incluso mejorar la clasificación.',
      },
      {
        type: 'paragraph',
        text: 'En AB Advisory hemos liderado múltiples procesos de reestructuración de deuda corporativa, con mejoras documentadas en eficiencia de caja superiores al 20%. Si está evaluando una reestructuración o quiere entender las opciones disponibles para su estructura de pasivos, contáctenos para coordinar una revisión.',
      },
    ],
  },
  {
    slug: 'power-bi-directorios',
    category: 'Tecnología Financiera',
    title: 'Power BI para directorios: 5 dashboards que transformaron la toma de decisiones ejecutiva',
    author: 'AB Advisory',
    readTime: '6 min',
    date: 'Marzo 2026',
    relatedServices: [
      { label: 'Asesoría Financiera', href: '/servicios/financiero' },
      { label: 'Contabilidad & IFRS', href: '/servicios/contable' },
    ],
    image: '/images/insights/power-bi.webp',
    featured: false,
    href: '/insights/power-bi-directorios',
    description: 'Los directorios más efectivos toman decisiones sobre información en tiempo real, no sobre reportes de 40 páginas preparados semanas después del cierre. Así implementamos cinco dashboards que cambiaron la dinámica de tres grupos empresariales chilenos.',
    body: [
      {
        type: 'paragraph',
        text: 'El reporte mensual de directorio de 40 páginas preparado tres semanas después del cierre es una práctica que tiene los días contados. En un entorno donde los ciclos de decisión se acortan, los directorios que operan con información rezagada asumen un riesgo competitivo concreto.',
      },
      {
        type: 'heading',
        text: 'El problema de los reportes tradicionales',
      },
      {
        type: 'paragraph',
        text: 'El modelo clásico tiene tres fallas estructurales: el tiempo de preparación genera información obsoleta al momento de ser presentada; el formato estático no permite explorar hipótesis en la sala de directorio; y la dependencia del área financiera para cualquier consulta crea cuellos de botella que frenan la toma de decisiones.',
      },
      {
        type: 'heading',
        text: 'Los 5 dashboards que implementamos',
      },
      {
        type: 'list',
        items: [
          'Dashboard de P&L en tiempo real: resultado operacional, EBITDA y márgenes por unidad de negocio, actualizado al día anterior al cierre.',
          'Monitor de flujo de caja: posición de caja diaria, proyección a 13 semanas y alertas de tensión de liquidez.',
          'Tablero de KPIs comerciales: pipeline, conversión, ticket promedio y proyección de ingresos vs. presupuesto.',
          'Dashboard de RRHH y costo de dotación: headcount por área, costo total de personal y desviaciones vs. budget.',
          'Indicadores de cumplimiento: estado de covenants financieros, obligaciones tributarias y cumplimiento normativo SII.',
        ],
      },
      {
        type: 'heading',
        text: 'Resultados medibles',
      },
      {
        type: 'paragraph',
        text: 'En los tres grupos donde implementamos esta arquitectura de datos, el tiempo de preparación del reporte de directorio se redujo de 3 semanas a 2 días. Más importante: las sesiones de directorio pasaron de revisar el pasado a discutir el futuro — con modelos de escenarios disponibles en tiempo real.',
      },
      {
        type: 'paragraph',
        text: 'La implementación técnica en Power BI, conectada al ERP de la empresa, toma entre 6 y 10 semanas dependiendo de la complejidad de las fuentes de datos. Si quiere evaluar si esta solución aplica para su grupo empresarial, conversemos.',
      },
    ],
  },
]

export const TICKER_ITEMS = [
  ['IFRS Especialista', 'Universidad de Chile'],
  ['Compliance Officer Cert.', 'UAI · Adolfo Ibáñez'],
  ['Mágister Finanzas', 'U. de Chile · en curso'],
  ['Big Four Audits', 'Cero observaciones'],
  ['LATAM Airlines Group', 'Gestión contable multinacional'],
  ['Besalco Maquinarias', 'Sub Gerente de Contabilidad Corporativa'],
  ['Grupo LatamWin', 'CFO · Finanzas Corporativas'],
  ['Reestructuración', 'Deuda · mejora de caja >20%'],
  ['34 empresas', 'Consolidadas bajo IFRS'],
  ['Ingeniería Comercial', 'UTEM · Santiago'],
  ['Contador Auditor', 'UTEM · Santiago'],
]
