import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
    title: 'Contact',
    description:
        'Start a project with Converge Digitals and discuss your MVP, product design, or scalable web application requirements.',
    path: '/contact',
    keywords: [
        'contact converge digitals',
        'start a project',
        'mvp development inquiry',
        'web app development contact',
    ],
})

export default function ContactLayout({
    children,
}: {
    children: ReactNode
}) {
    return children
}
