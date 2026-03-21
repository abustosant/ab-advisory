import type { Metadata } from 'next'
import ComplianceContent from './ComplianceContent'

export const metadata: Metadata = {
  title: 'Compliance Corporativo | AB Advisory',
  description: 'Diseño e implementación de programas de cumplimiento normativo bajo Ley 20.393 y regulaciones sectoriales. Compliance Officer Certificado UAI para empresas en Chile.',
}

export default function Page() {
  return <ComplianceContent />
}
