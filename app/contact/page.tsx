"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { ContactSignals } from "@/components/sections/contact/ContactSignals";
import { ContactForm } from "@/components/sections/contact/ContactForm";

/**
 * CONTACT PAGE
 * Refactored for maintainability.
 * Signals extracted to src/components/sections/contact/ContactSignals.tsx
 * Form extracted to src/components/sections/contact/ContactForm.tsx
 */
export default function ContactPage() {
    const controls = useAnimation();
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://convergedigital.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://convergedigital.com/contact"
            }
        ]
    };

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <PageWrapper breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Start a Project' }
        ]}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="pb-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-[80px]">
                    <ContactSignals controls={controls} />
                    <ContactForm />
                </div>
            </div>
        </PageWrapper>
    );
}
