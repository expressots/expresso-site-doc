import * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import expressotsDarkTheme from "./src/css/prism.dark-theme";
import expressotsLightTheme from "./src/css/prism.light-theme";

const config: Config = {
    title: "ExpressoTS",
    tagline: "A lightweight, fast and easy to use TypeScript framework",
    favicon: "img/favicon.ico",

    url: "https://doc.expresso-ts.com",
    baseUrl: "/",

    organizationName: "expressots",
    projectName: "expresso-site-doc",
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    onBrokenLinks: "throw", // 'throw' | 'warn' | 'ignore'

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl:
                        "https://github.com/expressots/expresso-site-doc/edit/main/",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    breadcrumbs: true,
                    remarkPlugins: [
                        [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
                    ],
                    lastVersion: "4.0.0",
                    onlyIncludeVersions: ["4.0.0", "3.0.0", "2.0.0"],
                    versions: {
                        "4.0.0": {
                            label: "4.0.0",
                            banner: "none",
                        },
                        "3.0.0": {
                            label: "3.0.0",
                        },
                        "2.0.0": {
                            label: "2.0.0",
                        },
                    },
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/expressots-discord-banner-darkbg.png",
        metadata: [
            {
                name: "keywords",
                content: "expressots, framework, nodejs, typescript, javascript",
            },
        ],
        announcementBar: {
            id: "v4_ga",
            content:
                'ExpressoTS v4.0 is officially here! Interceptors, events, lazy loading, Studio, and more. <a href="/docs/prologue/release">See what\'s new</a>',
            backgroundColor: "#80f5a8",
            textColor: "#1f1f22",
            isCloseable: true,
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        algolia: {
            apiKey: "dbc1e8899aa815b7cfdf66b7d4627e74",
            indexName: "expresso-ts",
            contextualSearch: true,
            insights: true,
            appId: "3UANWN5EUQ",
        },
        navbar: {
            title: "ExpressoTS",
            hideOnScroll: false,
            logo: {
                alt: "ExpressoTS",
                src: "img/logo.png",
            },
            items: [
                {
                    to: "/docs/core/first-steps",
                    position: "left",
                    label: "Getting Started",
                    activeBaseRegex:
                        "^/docs/(?:[\\w.-]+/)?(?:core|prologue|why-expressots|features|guides)(?:/|$)",
                },
                {
                    to: "/docs/cli/overview",
                    position: "left",
                    label: "CLI",
                    activeBaseRegex: "^/docs/(?:[\\w.-]+/)?cli(?:/|$)",
                },
                {
                    to: "/docs/studio/overview",
                    position: "left",
                    label: "Studio",
                    activeBaseRegex: "^/docs/(?:[\\w.-]+/)?studio(?:/|$)",
                },
                {
                    to: "/docs/governance",
                    position: "left",
                    label: "Governance",
                    activeBaseRegex: "^/docs/(?:[\\w.-]+/)?governance(?:/|$)",
                },
                {
                    type: "search",
                    position: "left",
                },
                {
                    type: "docsVersionDropdown",
                    label: "latest",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: "https://github.com/expressots/expressots",
                    position: "right",
                    "aria-label": "GitHub repository",
                    className: "header-github-link",
                },
                {
                    href: "https://www.linkedin.com/company/expresso-ts/?viewAsMember=true",
                    position: "right",
                    "aria-label": "LinkedIn profile",
                    className: "header-linkedin-link",
                },
            ],
        },
        footer: {
            style: "dark",
            logo: {
                alt: "ExpressoTS",
                src: "img/logo.png",
                href: "https://www.expresso-ts.com",
                height: 48,
            },
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Getting Started",
                            to: "/docs/core/first-steps",
                        },
                        {
                            label: "CLI",
                            to: "/docs/cli/overview",
                        },
                        {
                            label: "Studio",
                            to: "/docs/studio/overview",
                        },
                        {
                            label: "Upgrade Guide",
                            to: "/docs/prologue/upgrade_guide",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/PyPJfGK",
                        },
                        {
                            label: "X (Twitter)",
                            href: "https://twitter.com/expressots",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/expresso-ts/?viewAsMember=true",
                        },
                        {
                            label: "YouTube",
                            href: "https://www.youtube.com/@expressots",
                        },
                    ],
                },
                {
                    title: "Code",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/expressots",
                        },
                        {
                            label: "@expressots/core",
                            href: "https://www.npmjs.com/package/@expressots/core",
                        },
                        {
                            label: "@expressots/cli",
                            href: "https://www.npmjs.com/package/@expressots/cli",
                        },
                        {
                            label: "@expressots/studio",
                            href: "https://www.npmjs.com/package/@expressots/studio",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Official ExpressoTS, Released under the MIT License.`,
        },
        prism: {
            theme: expressotsLightTheme,
            darkTheme: expressotsDarkTheme,
        },
    } satisfies Preset.ThemeConfig,
    themes: ["@docusaurus/theme-mermaid"],
    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: "throw",
        },
    },
};

export default config;
