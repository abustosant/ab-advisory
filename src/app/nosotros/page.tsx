import type { Metadata } from 'next'
import NosotrosContent from './NosotrosContent'

export const metadata: Metadata = {
  title: 'Nosotros | AB Advisory — Firma Boutique de Asesoría Financiera',
  description: 'Conoce a Andrés Bustos A., fundador de AB Advisory. 20+ años en finanzas corporativas, IFRS y reestructuración de deuda. Santiago de Chile.',
  openGraph: {
    title: 'Andrés Bustos A. — Fundador & Director | AB Advisory',
    description: '20+ años en finanzas corporativas, IFRS y reestructuración de deuda. Ex-Head of Corporate Accounting en LATAM Airlines Group. Firma boutique en Santiago, Chile.',
    url: 'https://www.abadvisory.cl/nosotros',
    type: 'profile',
  },
}

export default function Page() {
  return <NosotrosContent />
}