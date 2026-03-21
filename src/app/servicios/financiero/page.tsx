import type { Metadata } from 'next'
import FinancieroContent from './FinancieroContent'

export const metadata: Metadata = {
  title: 'Asesoría Financiera | AB Advisory',
  description: 'Estructuración de deuda, modelamiento financiero DCF, Rolling Forecast y dashboards Power BI para CFOs y directorios en Chile. Estándar técnico de nivel corporativo.',
  openGraph: {
    title: 'Asesoría Financiera Corporativa | AB Advisory',
    description: 'Reestructuración de deuda, modelos DCF y Rolling Forecast para CFOs y directorios. Firma boutique con estándar Big Four en Santiago, Chile.',
    url: 'https://www.abadvisory.cl/servicios/financiero',
    type: 'website',
  },
}

export default function Page() {
  return <FinancieroContent />
}