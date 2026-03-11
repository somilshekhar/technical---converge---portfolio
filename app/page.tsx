import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Digital Product Studio",
    description:
        "Converge Digitals designs and engineers MVPs, scalable web apps, and product experiences for startups building serious digital products.",
    path: "/",
    keywords: [
        "digital product studio",
        "mvp development",
        "web application development",
        "product design",
        "startup development partner",
    ],
});

const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services), {
    loading: () => <SectionSkeleton height="800px" />
});

const Process = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process), {
    loading: () => <SectionSkeleton height="1000px" />
});

const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then(mod => mod.CaseStudies), {
    loading: () => <SectionSkeleton height="900px" />
});

const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA), {
    loading: () => <SectionSkeleton height="600px" />
});

export default function Home() {
    return (
        <main className="w-full bg-[#0c0c0b] selection:bg-white selection:text-black">
            <Hero />
            <Services />
            <Process />
            <CaseStudies />
            <FinalCTA />
        </main>
    );
}
