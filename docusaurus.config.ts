import * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import axios from "axios";

const coreVersion = async (): Promise<string> => {
    try {
        const response = await axios.get(
            "https://api.github.com/repos/expressots/expressots/releases"
        );
        const latestRelease = response.data[0];
        return latestRelease.tag_name;
    } catch (error) {
        console.error("Error fetching current version from GitHub:", error);
        return "2.0.0"; // Fallback version
    }
};

const adapterVersion = async (): Promise<string> => {
    try {
        const response = await axios.get(
            "https://api.github.com/repos/expressots/adapter-express/releases"
        );

        const latestRelease = response.data[0];
        return latestRelease.tag_name;
    } catch (error) {
        console.error("Error fetching current version from GitHub:", error);
        return "2.0.0"; // Fallback version
    }
};

const cliVersion = async (): Promise<string> => {
    try {
        const response = await axios.get(
            "https://api.github.com/repos/expressots/expressots-cli/releases"
        );

        const latestRelease = response.data[0];
        return latestRelease.tag_name;
    } catch (error) {
        console.error("Error fetching current version from GitHub:", error);
        return "2.0.0"; // Fallback version
    }
};

const config: Config = {
    title: "Expresso TS",
    tagline: "A lightweight, fast and easy to use TypeScript framework",
    favicon: "img/favicon.ico",

    url: "https://doc.expresso-ts.com",
    baseUrl: "/",

    organizationName: "expressots",
    projectName: "expresso-site-doc",
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    onBrokenLinks: "throw", // 'throw' | 'warn' | 'ignore'
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en", "pt"],
        localeConfigs: {
            en: {
                label: "English",
            },
            pt: {
                label: "Português",
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
            defaultMode: "light",
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
            title: "Expresso TS",
            hideOnScroll: true,
            logo: {
                alt: "Expresso TS",
                src: "img/logo.png",
            },
            items: [
                {
                    type: "doc",
                    docId: "hello",
                    position: "right",
                    label: "Documentation",
                },
                {
                    type: "doc",
                    docId: "governance",
                    position: "right",
                    label: "Governance",
                },
                {
                    href: "https://github.com/expressots/expressots",
                    label: "GitHub",
                    position: "right",
                    "aria-label": "GitHub repository",
                },
                {
                    type: "localeDropdown",
                    label: "Language",
                    position: "right",
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
            theme: themes.github,
            darkTheme: themes.vsDark,
        },
    } satisfies Preset.ThemeConfig,
    themes: ["@docusaurus/theme-mermaid"],
    markdown: {
        mermaid: true,
    },
};

export default async function asyncConfig(): Promise<Config> {
    const core = await coreVersion();
    const adapter = await adapterVersion();
    const cli = await cliVersion();

    config.themeConfig.announcementBar = {
        id: "supportus",
        content: `@core v${core} / @adapter-express v${adapter} / @cli v${cli}`,
        backgroundColor: "#111",
        textColor: "#19CE59",
        isCloseable: false,
    };
    return config;
}
