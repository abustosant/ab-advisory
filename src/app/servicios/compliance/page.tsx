import type { Metadata } from 'next'
import ComplianceContent from './ComplianceContent'

export const metadata: Metadata = {
  title: 'Compliance Corporativo | AB Advisory',
  description: 'Diseño e implementación de programas de cumplimiento normativo bajo Ley 20.393 y regulaciones sectoriales. Compliance Officer Certificado UAI para empresas en Chile.',
  openGraph: {
    title: 'Compliance Corporativo Ley 20.393 | AB Advisory',
    description: 'Diseño de programas de prevención de delitos, matrices de riesgo y canales de denuncia. Compliance Officer Certificado UAI. Sin zonas grises.',
    url: 'https://www.abadvisory.cl/servicios/compliance',
    type: 'website',
  },
}

export default function Page() {
  return <ComplianceContent />
}
