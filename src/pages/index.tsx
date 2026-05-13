import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import BannerImage from "@site/static/img/expressoTS-Banner.png";
import { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
    return (
        <header className={clsx("hero customHeroBanner", styles.heroBanner)}>
            <div className="container">
                <div className={styles.heroBadge}>
                    <span className={styles.heroBadgeDot} />
                    {translate({ message: "homepageVersionBadge" })}
                </div>
                <h1 className="hero__title">
                    <img
                        className={styles.heroLogo}
                        height="180px"
                        width="auto"
                        src={BannerImage}
                        alt="ExpressoTS"
                    />
                </h1>
                <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
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
                    </Link>
                    <Link
                        className={clsx(
                            "button button--secondary button--lg",
                            styles.button,
                            styles.buttonSecondary,
                        )}
                        to="/docs/prologue/release"
                    >
                        {translate({ message: "homepageWhatsNew" })}
                    </Link>
                </div>
                <div className={styles.installContainer}>
                    <code className={styles.installCommand}>
                        npx @expressots/cli new my-app
                    </code>
                </div>
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
