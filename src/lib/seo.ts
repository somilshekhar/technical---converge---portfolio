import type { Metadata } from 'next'

export const siteConfig = {
    name: 'Converge Digitals',
    url: 'https://convergedigital.com',
    description:
        'We design and engineer digital products built to grow with your business.',
    email: 'contact@convergedigital.com',
    locale: 'en_US',
}

type MetadataInput = {
    title: string
    description: string
    path?: string
    keywords?: string[]
    type?: 'website' | 'article'
}

export function absoluteUrl(path = '/') {
    if (!path || path === '/') {
        return siteConfig.url
    }

    return new URL(path, `${siteConfig.url}/`).toString()
}

export function buildMetadata({
    title,
    description,
    path = '/',
    keywords = [],
    type = 'website',
}: MetadataInput): Metadata {
    const canonical = absoluteUrl(path)
    const fullTitle = `${title} | ${siteConfig.name}`

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonical,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type,
        },
        twitter: {
            card: 'summary',
            title: fullTitle,
            description,
        },
    }
}

export const siteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.email,
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    email: siteConfig.email,
                    url: absoluteUrl('/contact'),
                },
            ],
        },
        {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            name: siteConfig.name,
            url: siteConfig.url,
            inLanguage: 'en',
            publisher: {
                '@id': `${siteConfig.url}/#organization`,
            },
        },
    ],
}
