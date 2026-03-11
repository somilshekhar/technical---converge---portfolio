import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
    title: 'Work',
    description:
        'Browse Converge Digitals case studies covering MVP development, scalable web apps, and product design engagements.',
    path: '/work',
    keywords: [
        'case studies',
        'product development portfolio',
        'web app case studies',
        'startup project portfolio',
    ],
})

export default function WorkLayout({
    children,
}: {
    children: ReactNode
}) {
    return children
}
