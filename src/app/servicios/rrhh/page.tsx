import type { Metadata } from 'next'
import RRHHContent from './RRHHContent'

export const metadata: Metadata = {
  title: 'Gestión de RRHH & Remuneraciones | AB Advisory',
  description: 'Outsourcing de remuneraciones, liquidaciones de sueldo, compliance laboral y Ley 20.393 para empresas con dotaciones significativas en Chile. Sin errores ni riesgos laborales.',
}

export default function Page() {
  return <RRHHContent />
}
