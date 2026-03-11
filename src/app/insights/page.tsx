import type { Metadata } from 'next'
import InsightsContent from './InsightsContent'

export const metadata: Metadata = {
  title: 'Insights | AB Advisory — Artículos sobre IFRS, Finanzas y RRHH',
  description: 'Artículos técnicos sobre IFRS, finanzas corporativas, reestructuración de deuda y gestión de RRHH en Chile. Por Andrés Bustos A., fundador de AB Advisory.',
}

export default function Page() {
  return <InsightsContent />
}
