import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";

import styles from "./404.module.css";

const suggestions: Array<{ label: string; to: string; description: string }> = [
    {
        label: "Get started",
        to: "/docs/core/first-steps",
        description: "Install, run, and explore the framework",
    },
    {
        label: "CLI overview",
        to: "/docs/cli/overview",
        description: "Scaffold, generate, build, deploy",
    },
    {
        label: "Studio overview",
        to: "/docs/studio/overview",
        description: "Local developer experience platform",
    },
    {
        label: "What's new in v4",
        to: "/docs/prologue/release",
        description: "Release notes and migration guide",
    },
];

export default function NotFound(): JSX.Element {
    return (
        <Layout
            title={translate({ message: "theme.NotFound.title" })}
            description="The page you're looking for couldn't be found."
        >
            <main className={styles.notFound}>
                <div className={styles.container}>
                    <span className={styles.code}>404</span>
                    <h1 className={styles.title}>
                        {translate({ message: "theme.NotFound.title" })}
                    </h1>
                    <p className={styles.subtitle}>
                        {translate({ message: "theme.NotFound.p1" })} The page may
                        have moved, been renamed, or never existed. Here's where
                        most people who land here are heading:
                    </p>

                    <div className={styles.suggestions}>
                        {suggestions.map((s) => (
                            <Link
                                key={s.to}
                                to={s.to}
                                className={styles.suggestion}
                            >
                                <span className={styles.suggestionLabel}>
                                    {s.label}
                                </span>
                                <span className={styles.suggestionDescription}>
                                    {s.description}
                                </span>
                                <svg
                                    className={styles.suggestionArrow}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M13 6l6 6-6 6" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.help}>
                        <span>Still stuck?</span>
                        <Link to="https://github.com/expressots/expressots/issues" className={styles.helpLink}>
                            Open an issue
                        </Link>
                        <span className={styles.helpSep}>·</span>
                        <Link to="https://discord.gg/PyPJfGK" className={styles.helpLink}>
                            Ask on Discord
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
