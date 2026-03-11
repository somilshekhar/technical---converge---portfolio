import type { Metadata } from 'next'
import { Inter, Outfit, DM_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig, siteJsonLd } from '@/lib/seo'
import './globals.css'

const displayFont = Outfit({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-display',
})

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-body',
})

const mono = DM_Mono({
    subsets: ['latin'],
    weight: ['300', '400'],
    variable: '--font-mono',
})

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: 'technology',
    referrer: 'origin-when-cross-origin',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: siteConfig.name,
        description: siteConfig.description,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${mono.variable}`}>
            <body className="bg-[#0c0c0b] text-white">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
                />
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    )
}
