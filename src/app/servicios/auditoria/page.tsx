import type { Metadata } from 'next'
import AuditoriaContent from './AuditoriaContent'

export const metadata: Metadata = {
  title: 'Auditoría & Control Interno | AB Advisory',
  description: 'Soporte técnico a procesos de auditoría interna y preparación para revisiones de auditores externos con estándares Big Four. Diseño de controles internos para empresas en Chile.',
}

export default function Page() {
  return <AuditoriaContent />
}
