import type { Metadata } from 'next'
import NosotrosContent from './NosotrosContent'

export const metadata: Metadata = {
  title: 'Nosotros | AB Advisory — Firma Boutique de Asesoría Financiera',
  description: 'Conoce a Andrés Bustos A., fundador de AB Advisory. 20+ años en finanzas corporativas, IFRS, SAP y reestructuración de deuda. Santiago de Chile.',
}

export default function Page() {
  return <NosotrosContent />
}