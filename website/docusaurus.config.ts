import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Anupras Mohapatra",
  tagline:
    "Technical writer with an interest in content strategy and developer experience.",
  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://amohapatra3.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "amohapatra3", // Usually your GitHub org/user name.
  projectName: "amohapatra3.github.io", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  //onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Redirect a single deleted page
          {
            to: "/about",
            from: "/docs/about", // 'from' can be a string or array of strings
          },
          // You can add more redirect rules here
        ],
        // You can also use createRedirects to automatically generate redirects
        // based on existing pages' paths if you follow a specific pattern (e.g., when restructuring)
        // createRedirects(existingPath) {
        //   if (existingPath.includes('/docs/')) {
        //     return existingPath.replace('/docs/', '/');
        //   }
        //   return undefined;
        // },
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Anupras Mohapatra",
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: "/about", label: "About Me", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Portfolio",
          to: "/docs/intro",
        },
        // { to: "/blog", label: "About me", position: "left" },
        {
          href: "https://github.com/amohapatra3",
          label: "GitHub",
          position: "right",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/~anupras",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Portfolio",
          items: [
            {
              label: "Developer guide documentation",
              to: "/docs/category/developer-documentation",
            },
            {
              label: "Broader documentation initiatives",
              to: "/docs/category/broader-documentation-initiatives/",
            },
            {
              label: "API documentation",
              to: "/docs/category/api-documentation",
            },
            {
              label: "UI text",
              to: "/docs/category/ui-text",
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "About me",
              to: "/about",
            },
            {
              label: "GitHub",
              href: "https://github.com/amohapatra3",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/~anupras",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anupras Mohapatra. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
