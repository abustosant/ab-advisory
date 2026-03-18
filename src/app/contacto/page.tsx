import type { Metadata } from 'next'
import ContactoContent from './ContactoContent'

export const metadata: Metadata = {
  title: 'Conversemos | AB Advisory — Agende una Reunión',
  description: 'Agende una reunión inicial con un socio de AB Advisory. Asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile.',
}

export default function Page() {
  return <ContactoContent />
}
