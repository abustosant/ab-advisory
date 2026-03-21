import type { Metadata } from 'next'
import AuditoriaContent from './AuditoriaContent'

export const metadata: Metadata = {
  title: 'Auditoría & Control Interno | AB Advisory',
  description: 'Soporte técnico a procesos de auditoría interna y preparación para revisiones de auditores externos con estándares Big Four. Diseño de controles internos para empresas en Chile.',
  openGraph: {
    title: 'Auditoría & Control Interno con Criterio Big Four | AB Advisory',
    description: 'Diseño de controles internos, preparación para auditorías Big Four y remediación de hallazgos. Marcos COSO 2013 e IIA para empresas en Chile.',
    url: 'https://www.abadvisory.cl/servicios/auditoria',
    type: 'website',
  },
}

export default function Page() {
  return <AuditoriaContent />
}
