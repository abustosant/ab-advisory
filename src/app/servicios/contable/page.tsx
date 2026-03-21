import type { Metadata } from 'next'
import ContableContent from './ContableContent'

export const metadata: Metadata = {
  title: 'Contabilidad & IFRS | AB Advisory',
  description: 'Implementación IFRS/NIC, consolidación de grupos empresariales y outsourcing contable para empresas con exigencias de reporte internacional y auditorías Big Four en Chile.',
  openGraph: {
    title: 'Contabilidad IFRS & Consolidación | AB Advisory',
    description: 'Implementación IFRS, consolidación de grupos empresariales y preparación para auditorías Big Four. 34 empresas consolidadas sin observaciones.',
    url: 'https://www.abadvisory.cl/servicios/contable',
    type: 'website',
  },
}

export default function Page() {
  return <ContableContent />
}