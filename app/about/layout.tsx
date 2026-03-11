import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
    title: 'About',
    description:
        'Learn how Converge Digitals combines product strategy, design, and engineering to build web products for modern startups.',
    path: '/about',
    keywords: [
        'about converge digitals',
        'digital product studio',
        'startup product partner',
        'product strategy and engineering',
    ],
})

export default function AboutLayout({
    children,
}: {
    children: ReactNode
}) {
    return children
}
