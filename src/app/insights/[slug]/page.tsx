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
  }
}

export function generateStaticParams() {
  return INSIGHTS.map(i => ({ slug: i.slug }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const insight = INSIGHTS.find(i => i.slug === slug)
  if (!insight) notFound()
  return <InsightDetailContent insight={insight} />
}
