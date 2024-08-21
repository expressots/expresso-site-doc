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

    onBrokenLinks: "ignore", // 'throw' | 'warn' | 'ignore'
    onBrokenMarkdownLinks: "throw",

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
                    remarkPlugins: [
                        [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
                    ],
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
                    type: "doc",
                    docId: "governance",
                    position: "right",
                    label: "Governance",
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
                {
                    type: "search",
                    position: "left",
                },
            ],
        },
        stylesheets: [
            {
                href: "/css/custom.css",
                type: "text/css",
            },
        ],
        footer: {
            style: "light",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "docs/category/guides",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/expresso-ts/?viewAsMember=true",
                        },
                        {
                            label: "X (Twitter)",
                            href: "https://twitter.com/expressots",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.gg/PyPJfGK",
                        },
                    ],
                },
                {
                    title: "Code",
                    items: [
                        {
                            label: "NPM Core",
                            href: "https://www.npmjs.com/package/@expressots/core",
                        },
                        {
                            label: "NPM CLI",
                            href: "https://www.npmjs.com/package/@expressots/cli",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/expressots",
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
    },
};

export default config;
