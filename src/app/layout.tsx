import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'AB Advisory | Asesoría Financiera, Contable y RRHH — Santiago, Chile',
  description: 'Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile. Rigor técnico de multinacional, dedicación exclusiva.',
  keywords: 'asesoría financiera chile, IFRS contabilidad, gestión RRHH, consulting santiago',
  openGraph: {
    title: 'AB Advisory | Asesoría Financiera Corporativa',
    description: 'Firma boutique de nivel Big Four para empresas en Chile.',
    type: 'website',
    locale: 'es_CL',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
