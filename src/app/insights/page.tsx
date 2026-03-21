import type { Metadata } from 'next'
import InsightsContent from './InsightsContent'

export const metadata: Metadata = {
  title: 'Insights | AB Advisory — Artículos sobre IFRS, Finanzas y RRHH',
  description: 'Artículos técnicos sobre IFRS, finanzas corporativas, reestructuración de deuda y gestión de RRHH en Chile. Por Andrés Bustos A., fundador de AB Advisory.',
  alternates: { canonical: 'https://www.abadvisory.cl/insights' },
  openGraph: {
    title: 'Insights IFRS & Finanzas Corporativas | AB Advisory',
    description: 'Análisis técnico para CFOs y equipos financieros. IFRS 18, reestructuración de deuda, compliance y reporting ejecutivo en Chile.',
    url: 'https://www.abadvisory.cl/insights',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Insights IFRS & Finanzas | AB Advisory', description: 'Análisis técnico para CFOs: IFRS 18, reestructuración de deuda, compliance y Power BI para directorios.' },
}

export default function Page() {
  return <InsightsContent />
}
