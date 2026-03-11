import { statSync } from 'node:fs'
import { join } from 'node:path'
import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { absoluteUrl } from '@/lib/seo'

function getLastModified(...relativePaths: string[]) {
    const timestamps = relativePaths
        .map((relativePath) => {
            try {
                return statSync(join(process.cwd(), relativePath)).mtime
            } catch {
                return null
            }
        })
        .filter((value): value is Date => value instanceof Date)

    if (!timestamps.length) {
        return new Date()
    }

    return new Date(
        Math.max(...timestamps.map((timestamp) => timestamp.getTime()))
    )
}

export default function sitemap(): MetadataRoute.Sitemap {
    const sitePages: MetadataRoute.Sitemap = [
        {
            url: absoluteUrl('/'),
            lastModified: getLastModified(
                'app/page.tsx',
                'src/components/sections/Hero.tsx',
                'src/components/sections/Services.tsx',
                'src/components/sections/CaseStudies.tsx'
            ),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: absoluteUrl('/about'),
            lastModified: getLastModified(
                'app/about/layout.tsx',
                'app/about/page.tsx',
                'src/components/sections/about/AboutHero.tsx'
            ),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: absoluteUrl('/process'),
            lastModified: getLastModified(
                'app/process/layout.tsx',
                'app/process/page.tsx',
                'src/components/sections/process/ProcessHero.tsx'
            ),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: absoluteUrl('/work'),
            lastModified: getLastModified(
                'app/work/layout.tsx',
                'app/work/page.tsx',
                'src/data/projects.ts'
            ),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: absoluteUrl('/contact'),
            lastModified: getLastModified(
                'app/contact/layout.tsx',
                'app/contact/page.tsx',
                'src/components/sections/contact/ContactSignals.tsx'
            ),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    const caseStudyLastModified = getLastModified(
        'app/work/[slug]/page.tsx',
        'src/data/projects.ts',
        'src/components/templates/CaseStudyTemplate.tsx'
    )

    const caseStudyPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: absoluteUrl(`/work/${project.slug}`),
        lastModified: caseStudyLastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    return [...sitePages, ...caseStudyPages]
}
