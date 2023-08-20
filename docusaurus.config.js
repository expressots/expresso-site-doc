// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { default: axios } = require('axios');

module.exports = async () => {
  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Expresso TS',
    tagline: 'A lightweight, fast and easy to use TypeScript framework',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://doc.expresso-ts.com', //'https://expressots.github.io/',
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
      locales: ['en', 'pt'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        pt: {
          label: 'Português',
        },
      },
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
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
        image: 'img/expressots-discord-banner-darkbg.png',
        metadata: [{
          name: 'keywords', content: "expressots, framework, nodejs, typescript, javascript"
        }],
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
        algolia: {
          apiKey: "dbc1e8899aa815b7cfdf66b7d4627e74",
          indexName: "expresso-ts",
          contextualSearch: true,
          insights: true,
          placeholder: "Search the docs (Press / to focus)",
          appId: "3UANWN5EUQ",
        },
        navbar: {
          title: 'Expresso TS',
          hideOnScroll: true,
          logo: {
            alt: 'Expresso TS',
            src: 'img/logo.png'
          },
          items: [
            {
              type: 'doc',
              docId: 'hello',
              position: 'right',
              label: 'Documentation',
            },
            {
              type: 'doc',
              docId: 'governance',
              position: 'right',
              label: 'Governance',
            },
            {
              href: 'https://github.com/expressots/expressots',
              label: 'GitHub',
              position: 'right',           
              'aria-label': 'GitHub repository',
            },
            {
              type: 'localeDropdown',
              label: 'Language',
              position: 'right',
            },
          ],
        },
        announcementBar: {
          id: 'supportus',
          content:
            `Current Version: v0.0.0`,
          backgroundColor: '#111',
          textColor: '#19CE59',
          isCloseable: false,
        },
        stylesheets: [
          {
            href: '/css/custom.css',
            type: 'text/css',
          },
        ],
        footer: {
          style: 'light',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Tutorial',
                  to: '/docs/tutorials/overview',
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
          copyright: `Copyright © ${new Date().getFullYear()} Official ExpressoTS, Released under the MIT License.`,        
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };

  // Fetch the content asynchronously using Axios
  try {
    const response = await axios.get('https://api.github.com/repos/expressots/expressots/releases');
    const latestRelease = response.data[0];
    const version = latestRelease.tag_name;

    const newContent = `Current Version: v${version}`;
    // @ts-ignore
    config.themeConfig.announcementBar.content = newContent;

    return config;
  } catch (error) {
    console.error('Error fetching current Version from Github:', error);
    return config;
  }
};