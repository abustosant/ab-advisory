import type { Metadata } from 'next'
import RRHHContent from './RRHHContent'

export const metadata: Metadata = {
  title: 'Gestión de RRHH & Remuneraciones | AB Advisory',
  description: 'Outsourcing de remuneraciones, liquidaciones de sueldo, compliance laboral y Ley 20.393 para empresas con dotaciones significativas en Chile. Sin errores ni riesgos laborales.',
  openGraph: {
    title: 'RRHH & Remuneraciones sin Riesgos Laborales | AB Advisory',
    description: 'Outsourcing de nómina, compliance Ley 20.393 y planificación tributaria de remuneraciones para empresas de 30 a 500+ colaboradores en Chile.',
    url: 'https://www.abadvisory.cl/servicios/rrhh',
    type: 'website',
  },
}

export default function Page() {
  return <RRHHContent />
}
