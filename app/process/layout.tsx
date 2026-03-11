import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
    title: 'Process',
    description:
        'Explore the Converge Digitals process for discovery, design, engineering, and delivery of scalable digital products.',
    path: '/process',
    keywords: [
        'product development process',
        'startup delivery process',
        'web product design workflow',
        'engineering process',
    ],
})

export default function ProcessLayout({
    children,
}: {
    children: ReactNode
}) {
    return children
}
