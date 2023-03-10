// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Expresso TS',
  tagline: 'A lightweight, fast and easy to use TypeScript framework',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.expresso-ts.com', //'https://expressots.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'expressots', // Usually your GitHub org/user name.
  projectName: 'expresso-site-doc', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'warn', // 'throw' | 'warn' | 'ignore'
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Expresso TS',
        hideOnScroll: true,
        logo: {
          alt: 'Expresso TS',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/expressots/expressots',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      stylesheets: [
        {
          href: '/css/custom.css',
          type: 'text/css',
        },
      ],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitch TV',
                href: 'https://www.twitch.tv/richardzampieri',
              },
            ],
          },
          {
            title: 'Code',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: 'NPM Core',
                href: 'https://www.npmjs.com/package/@expressots/core',
              },
              {
                label: 'NPM CLI',
                href: 'https://www.npmjs.com/package/@expressots/cli',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/expressots',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Official ExpressoTS, Released under the MIT License.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
