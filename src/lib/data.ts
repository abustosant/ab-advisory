// ═══════════════════════════════════════
// AB Advisory — Datos centralizados del sitio
// ═══════════════════════════════════════

export const SITE = {
  name: 'AB Advisory',
  tagline: 'Asesoría Financiera · Contable · RRHH',
  description: 'Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile. Rigor técnico de multinacional, dedicación exclusiva.',
  phone: '(+56) 9 9308 4548',
  phoneRaw: '+56993084548',
  email: 'info@abadvisory.com',
  linkedin: 'https://linkedin.com/in/andresbustosant',
  whatsapp: 'https://wa.me/56993084548?text=Hola%20Andrés%2C%20quiero%20consultar%20sobre%20asesoría%20para%20mi%20empresa',
  whatsappCTA: 'https://wa.me/56993084548?text=Hola%20Andrés%2C%20me%20interesa%20una%20conversación%20inicial%20sobre%20asesoría',
  location: 'Santiago de Chile · Presencial y remoto',
  schedule: 'Lunes a viernes · 9:00 – 18:30',
  year: '2025',
  formspree: 'https://formspree.io/f/XXXXXXXX', // Reemplazar con tu endpoint real
}

export const FOUNDER = {
  name: 'Andrés Bustos A.',
  nameShort: 'Andrés Bustos',
  role: 'Founder & Director Ejecutivo · AB Advisory',
  eyebrow: 'Director Fundador',
  statement: '"Cada empresa en Chile — sin importar su tamaño — merece el mismo estándar técnico que exigen las empresas de alto desempeño global. Eso no es un privilegio: es la base para crecer con solidez."',
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
  { value: 15, prefix: 'USD ', suffix: 'M', label: 'Deuda reestructurada\n+20% eficiencia de caja' },
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
    description: 'Estructuración de deuda, modelamiento financiero y planificación estratégica para CFOs y directorios que exigen rigor técnico real.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=85',
    items: [
      'Reestructuración y refinanciamiento de deuda',
      'Modelos DCF, valorización y M&A support',
      'Rolling Forecast 6QTR methodology',
      'Dashboards Power BI para directorio',
    ],
    href: '/servicios/financiero',
    color: '#1A73A7',
  },
  {
    num: '02',
    category: 'Contabilidad · IFRS',
    title: 'Contabilidad & IFRS',
    description: 'Implementación IFRS/NIC y outsourcing contable para grupos empresariales con exigencias de reporte internacional y auditorías Big Four.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85',
    items: [
      'Implementación y actualización IFRS/NIC',
      'Consolidación de grupos (hasta 34+ entidades)',
      'Shared Services Center contable',
      'Preparación auditorías Big Four',
    ],
    href: '/servicios/contable',
    color: '#138040',
  },
  {
    num: '03',
    category: 'Recursos Humanos',
    title: 'Gestión de RRHH',
    description: 'Outsourcing de remuneraciones, cumplimiento laboral y Compliance RRHH para empresas con dotaciones significativas y alta complejidad.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=85',
    items: [
      'Liquidaciones de sueldo y nómina electrónica',
      'Contratos, finiquitos y calificaciones',
      'Compliance Ley 20.393',
      'Planificación tributaria de remuneraciones',
    ],
    href: '/servicios/rrhh',
    color: '#7C3AED',
  },
]

export const COMPARISON_TABLE = [
  { feature: 'IFRS / NIC completo', ab: 'check', indie: 'partial', big4: 'check' },
  { feature: 'Modelamiento financiero', ab: 'check', indie: 'none', big4: 'check' },
  { feature: 'Acceso directo al experto', ab: 'check', indie: 'check', big4: 'none' },
  { feature: 'SAP FI/CO avanzado', ab: 'check', indie: 'none', big4: 'check' },
  { feature: 'Tarifa accesible', ab: 'check', indie: 'check', big4: 'none' },
  { feature: 'Experiencia multinacional', ab: 'check', indie: 'none', big4: 'check' },
  { feature: 'Power BI / Reporting', ab: 'check', indie: 'none', big4: 'check' },
]

export const PROCESS = [
  {
    num: '01',
    title: 'Diagnóstico Inicial',
    description: 'Reunión sin costo. Entendemos su operación, identificamos brechas y definimos el alcance exacto del trabajo necesario.',
  },
  {
    num: '02',
    title: 'Propuesta a Medida',
    description: 'Alcance, plazos y honorarios transparentes. Sin sorpresas ni letra chica. Usted aprueba cada paso antes de comenzar.',
  },
  {
    num: '03',
    title: 'Implementación',
    description: 'Metodologías probadas en multinacionales: SAP, IFRS, Power BI y procesos estandarizados con reportería ejecutiva.',
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
    title: 'USD 15 millones reestructurados con mejora de caja',
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
    title: 'Transformación digital del área financiera con SAP y Power BI',
    description: 'Implementación como Key User de SAP FI/CO/MM HANA. Diseño de dashboards ejecutivos en Power BI para reportería a directorio. Estandarización de más de 50 procesos financieros con reducción de errores operacionales.',
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
    category: 'IFRS · Normativa',
    title: 'Cambios críticos en IFRS 17 y 9 para empresas chilenas en 2025: lo que su CFO debe saber antes de diciembre',
    author: 'Andrés Bustos',
    readTime: '8 min lectura',
    date: 'Noviembre 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85',
    featured: true,
    href: '/insights/ifrs-2025',
  },
  {
    category: 'Finanzas Corporativas',
    title: 'Cuándo y cómo reestructurar la deuda sin perder la clasificación crediticia',
    readTime: '5 min',
    date: 'Octubre 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=85',
    featured: false,
    href: '/insights/reestructuracion-deuda',
  },
  {
    category: 'Tecnología Financiera',
    title: 'Power BI para directorios: 5 dashboards que transformaron la toma de decisiones ejecutiva',
    readTime: '6 min',
    date: 'Septiembre 2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=85',
    featured: false,
    href: '/insights/power-bi-directorios',
  },
]

export const TICKER_ITEMS = [
  ['IFRS Especialista', 'Universidad de Chile'],
  ['Compliance Officer Cert.', 'UAI · Adolfo Ibáñez'],
  ['SAP FI/CO HANA Key User', 'Implementación corporativa'],
  ['Mágister Finanzas', 'U. de Chile · en curso'],
  ['Big Four Audits', 'Cero observaciones'],
  ['LATAM Airlines Group', 'Gestión contable multinacional'],
  ['Besalco Maquinarias', 'CFO · Finanzas corporativas'],
  ['USD 15M', 'Deuda reestructurada'],
  ['34 empresas', 'Consolidadas bajo IFRS'],
  ['Ingeniería Comercial', 'UTEM · Santiago'],
  ['Contador Auditor', 'UTEM · Santiago'],
]
