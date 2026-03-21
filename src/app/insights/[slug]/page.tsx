import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { INSIGHTS } from '@/lib/data'
import InsightDetailContent from './InsightDetailContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const insight = INSIGHTS.find(i => i.slug === slug)
  if (!insight) return { title: 'No encontrado | AB Advisory' }
  return {
    title: `${insight.title} | AB Advisory`,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      url: `https://www.abadvisory.cl${insight.href}`,
      type: 'article',
      images: insight.image ? [{ url: `https://www.abadvisory.cl${insight.image}` }] : undefined,
    },
  }
}

export function generateStaticParams() {
  return INSIGHTS.map(i => ({ slug: i.slug }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const insight = INSIGHTS.find(i => i.slug === slug)
  if (!insight) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.description,
    author: {
      '@type': 'Person',
      name: 'Andrés Bustos A.',
      url: 'https://www.abadvisory.cl/nosotros',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AB Advisory',
      url: 'https://www.abadvisory.cl',
    },
    url: `https://www.abadvisory.cl${insight.href}`,
    image: insight.image ? `https://www.abadvisory.cl${insight.image}` : undefined,
    articleSection: insight.category,
    inLanguage: 'es-CL',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <InsightDetailContent insight={insight} />
    </>
  )
}
