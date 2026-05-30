import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BannerImage from "@site/static/img/expressoTS-Banner.png";
import { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

const INSTALL_COMMAND = "npx @expressots/cli new my-app";

function InstallPill() {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(INSTALL_COMMAND).then(() => {
                setCopied(true);
                window.setTimeout(() => setCopied(false), 1800);
            });
        }
    };

    return (
        <div className={styles.installPill}>
            <span className={styles.installPrompt} aria-hidden="true">
                $
            </span>
            <code className={styles.installCommand}>{INSTALL_COMMAND}</code>
            <button
                type="button"
                className={styles.installCopy}
                onClick={onCopy}
                aria-label={translate({ message: "homepageInstallCopy" })}
                data-copied={copied || undefined}
            >
                {copied ? (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                ) : (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <rect x="9" y="9" width="12" height="12" rx="2" />
                        <path d="M5 15V5a2 2 0 012-2h10" />
                    </svg>
                )}
                <span className={styles.installCopyLabel}>
                    {copied
                        ? translate({ message: "homepageInstallCopied" })
                        : translate({ message: "homepageInstallCopy" })}
                </span>
            </button>
        </div>
    );
}

function HomepageHeader() {
    return (
        <header className={clsx("hero customHeroBanner", styles.heroBanner)}>
            <div className={clsx("container", styles.heroContainer)}>
                <div className={styles.heroBadge}>
                    <span className={styles.heroBadgeDot} aria-hidden="true" />
                    {translate({ message: "homepageVersionBadge" })}
                </div>

                <img
                    className={styles.heroLogo}
                    src={BannerImage}
                    alt="ExpressoTS"
                />

                <h1 className={styles.heroTitle}>
                    {translate({ message: "homepageHeroH1" })}
                    <span className={styles.heroTitleAccent}>
                        {translate({ message: "homepageHeroH1Accent" })}
                    </span>
                </h1>

                <p className={styles.heroSubtitle}>
                    {translate({ message: "homepageTagline" })}
                </p>

                <div className={styles.btnContainer}>
                    <Link
                        className={clsx(
                            "button button--lg",
                            styles.button,
                            styles.buttonPrimary,
                        )}
                        to="/docs/core/first-steps"
                    >
                        {translate({ message: "homepageGetStarted" })}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                    <Link
                        className={clsx(
                            "button button--lg",
                            styles.button,
                            styles.buttonSecondary,
                        )}
                        to="/docs/prologue/release"
                    >
                        {translate({ message: "homepageWhatsNew" })}
                    </Link>
                </div>

                <InstallPill />
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={siteConfig.title}
            description="ExpressoTS: a TypeScript framework for building scalable server-side applications on Node.js. Dependency injection, interceptors, events, lazy loading, and Studio."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
