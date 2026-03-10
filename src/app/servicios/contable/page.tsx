import type { Metadata } from 'next'
import ContableContent from './ContableContent'

export const metadata: Metadata = {
  title: 'Contabilidad & IFRS | AB Advisory',
  description: 'Implementación IFRS/NIC, consolidación de grupos empresariales y outsourcing contable para empresas con exigencias de reporte internacional y auditorías Big Four en Chile.',
}

export default function Page() {
  return <ContableContent />
}