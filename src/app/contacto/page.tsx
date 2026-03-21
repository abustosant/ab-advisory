import type { Metadata } from 'next'
import ContactoContent from './ContactoContent'

export const metadata: Metadata = {
  title: 'Conversemos | AB Advisory — Agende una Reunión',
  description: 'Agende una reunión de trabajo con un socio de AB Advisory. Asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile.',
  alternates: { canonical: 'https://www.abadvisory.cl/contacto' },
  openGraph: {
    title: 'Agende una reunión de trabajo | AB Advisory',
    description: 'Reunión directa con el Director Fundador. Sin intermediarios. 35 minutos, formato Zoom. Empresas en Chile.',
    url: 'https://www.abadvisory.cl/contacto',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Conversemos | AB Advisory', description: 'Reunión directa con el Director Fundador. Sin intermediarios. 35 minutos, formato Zoom.' },
}

export default function Page() {
  return <ContactoContent />
}
