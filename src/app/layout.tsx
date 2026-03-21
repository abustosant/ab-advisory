import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.abadvisory.cl'),
  title: 'AB Advisory | Asesoría Financiera, Contable y RRHH — Santiago, Chile',
  description: 'Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile. Excelencia técnica de multinacional, dedicación exclusiva.',
  keywords: 'asesoría financiera chile, IFRS contabilidad, gestión RRHH, consulting santiago, due diligence, compliance ley 20393, reestructuración deuda',
  alternates: {
    canonical: 'https://www.abadvisory.cl',
  },
  openGraph: {
    title: 'AB Advisory | Asesoría Financiera Corporativa',
    description: 'Firma boutique de nivel Big Four para empresas en Chile.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.abadvisory.cl',
    siteName: 'AB Advisory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AB Advisory | Asesoría Financiera Corporativa',
    description: 'Firma boutique de nivel Big Four para empresas en Chile.',
    site: '@abadvisory',
  },
  verification: {
    google: 'xPmG9m4embv01nhginP2ltv_Y2gR4IbhRIkC3y1uuvs',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AB Advisory',
  description: 'Firma boutique de asesoría financiera, contabilidad IFRS y gestión de RRHH para empresas en Chile.',
  url: 'https://www.abadvisory.cl',
  telephone: '+56993084548',
  email: 'contacto@abadvisory.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressCountry: 'CL',
  },
  founder: {
    '@type': 'Person',
    name: 'Andrés Bustos A.',
    jobTitle: 'Founder & Director Ejecutivo',
    url: 'https://www.abadvisory.cl/nosotros',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Asesoría',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asesoría Financiera Corporativa' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contabilidad & IFRS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión de RRHH & Remuneraciones' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditoría & Control Interno' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Corporativo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Due Diligence Financiero' } },
    ],
  },
  sameAs: ['https://linkedin.com/in/andresbustosant'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
      </body>
    </html>
  )
}
