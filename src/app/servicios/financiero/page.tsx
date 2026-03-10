import type { Metadata } from 'next'
import FinancieroContent from './FinancieroContent'

export const metadata: Metadata = {
  title: 'Asesoría Financiera | AB Advisory',
  description: 'Estructuración de deuda, modelamiento financiero DCF, Rolling Forecast y dashboards Power BI para CFOs y directorios en Chile. Rigor técnico de nivel corporativo.',
}

export default function Page() {
  return <FinancieroContent />
}