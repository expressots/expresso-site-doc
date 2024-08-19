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

    onBrokenLinks: "warn", // 'throw' | 'warn' | 'ignore'
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en", "pt"],
        localeConfigs: {
            en: {
                label: "EN",
            },
            pt: {
                label: "PT",
            },
        },
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
            disableSwitch: false,
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
            hideOnScroll: true,
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
                    type: "localeDropdown",
                    label: "Language",
                    position: "right",
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
                            to: "docs/category/tutorials",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Twitch TV",
                            href: "https://www.twitch.tv/richardzampieri",
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
