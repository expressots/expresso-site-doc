import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    description: string;
    icon: string;
    to: string;
    cta: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: translate({ message: "featureStudioTitle" }),
        description: translate({ message: "featureStudioDesc" }),
        icon: "studio",
        to: "/docs/studio/overview",
        cta: translate({ message: "featureExploreCta" }),
    },
    {
        title: translate({ message: "featureInterceptorsTitle" }),
        description: translate({ message: "featureInterceptorsDesc" }),
        icon: "interceptors",
        to: "/docs/features/interceptors",
        cta: translate({ message: "featureLearnCta" }),
    },
    {
        title: translate({ message: "featureEventsTitle" }),
        description: translate({ message: "featureEventsDesc" }),
        icon: "events",
        to: "/docs/features/events",
        cta: translate({ message: "featureLearnCta" }),
    },
    {
        title: translate({ message: "featureLazyTitle" }),
        description: translate({ message: "featureLazyDesc" }),
        icon: "lazy",
        to: "/docs/features/lazy-loading",
        cta: translate({ message: "featureLearnCta" }),
    },
    {
        title: translate({ message: "featureCliTitle" }),
        description: translate({ message: "featureCliDesc" }),
        icon: "cli",
        to: "/docs/cli/overview",
        cta: translate({ message: "featureExploreCta" }),
    },
    {
        title: translate({ message: "featureGuardsTitle" }),
        description: translate({ message: "featureGuardsDesc" }),
        icon: "guards",
        to: "/docs/features/guards",
        cta: translate({ message: "featureLearnCta" }),
    },
];

function FeatureIcon({ name }: { name: string }) {
    const common = {
        width: 36,
        height: 36,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.75,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };
    switch (name) {
        case "studio":
            return (
                <svg {...common} aria-hidden="true">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M8 20h8" />
                    <path d="M12 18v2" />
                    <path d="M7 10l2 2-2 2" />
                    <path d="M12 14h4" />
                </svg>
            );
        case "interceptors":
            return (
                <svg {...common} aria-hidden="true">
                    <path d="M4 12h6" />
                    <path d="M14 12h6" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 4v3" />
                    <path d="M12 17v3" />
                </svg>
            );
        case "events":
            return (
                <svg {...common} aria-hidden="true">
                    <path d="M5 12a7 7 0 0114 0v3l1 2H4l1-2v-3z" />
                    <path d="M10 19a2 2 0 004 0" />
                </svg>
            );
        case "lazy":
            return (
                <svg {...common} aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            );
        case "cli":
            return (
                <svg {...common} aria-hidden="true">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 10l3 2-3 2" />
                    <path d="M13 14h4" />
                </svg>
            );
        case "guards":
            return (
                <svg {...common} aria-hidden="true">
                    <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            );
        default:
            return null;
    }
}

function Feature({ title, description, icon, to, cta }: FeatureItem) {
    return (
        <div className={clsx("col col--4", styles.featureCol)}>
            <Link to={to} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                    <FeatureIcon name={icon} />
                </div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
                <span className={styles.featureCta}>
                    {cta}
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="M13 6l6 6-6 6" />
                    </svg>
                </span>
            </Link>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        {translate({ message: "featuresSectionTitle" })}
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        {translate({ message: "featuresSectionSubtitle" })}
                    </p>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
