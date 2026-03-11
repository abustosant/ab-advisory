import type { Metadata } from 'next'
import ContactoContent from './ContactoContent'

export const metadata: Metadata = {
  title: 'Contacto | AB Advisory — Diagnóstico Gratuito',
  description: 'Solicite un diagnóstico gratuito con Andrés Bustos A. Asesoría financiera, contabilidad IFRS y RRHH en Santiago de Chile. Respuesta en menos de 24 horas.',
}

export default function Page() {
  return <ContactoContent />
}
