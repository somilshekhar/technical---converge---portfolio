import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate'
import { buildMetadata } from '@/lib/seo'

export function generateMetadata({
    params
}: {
    params: { slug: string }
}): Metadata {
    const project = projects.find(p => p.slug === params.slug)

    if (!project) {
        return {
            title: 'Project not found',
            robots: {
                index: false,
                follow: false,
            },
        }
    }

    return buildMetadata({
        title: `${project.name} Case Study`,
        description: project.problem.headline,
        path: `/work/${project.slug}`,
        keywords: [
            project.name,
            project.category.toLowerCase(),
            project.scope.toLowerCase(),
            'case study',
            'product development',
        ],
        type: 'article',
    })
}

export default function CaseStudyPage({
    params
}: {
    params: { slug: string }
}) {
    const project = projects.find(p => p.slug === params.slug)
    if (!project) notFound()

    const currentIndex = projects.indexOf(project)
    const nextProject = projects[(currentIndex + 1) % projects.length]
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

    return (
        <CaseStudyTemplate
            project={project}
            nextProject={nextProject}
            prevProject={prevProject}
        />
    )
}

export function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }))
}
