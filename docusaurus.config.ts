import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Raaghu Documentation Center',
  tagline: 'Raaghu Frontend Suite built using React 18, Raaghu Design System and Docusaurus, provides robust, modular architecture, fully compatible with ABP Commercial.',
  favicon: 'https://raaghustorageaccount.blob.core.windows.net/raaghu-blob/Raaghu%20Logo%20SD.svg',

  staticDirectories: ['public', 'static'],
  // Set the production url of your site here
  url: 'https://docs.raaghu.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Raaghu Frontend Suite by Wai Technologies', // Usually your GitHub org/user name.
  projectName: 'raaghu-docs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'pt-BR','zh-Hans'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
          path:'en'
        },
        'zh-Hans': {
          label: '简体中文',
          direction: 'ltr',
          path: 'zh-Hans', // Make sure the path is specified
        },
        'pt-BR': {
          label: 'Português (Brasil)',
          direction: 'ltr',
          path: 'pt-BR', // Make sure the path is specified
        },
    }
  },

  presets: [
    [
     '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this to '/' to directly load the docs at the root path
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed:true,
        /*  If you want to enable the edit option then remove the comment

          editUrl:
          'https://github.com/Wai-Technologies/raaghu-docs',

      */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wai-Technologies/raaghu-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: 
  [ 
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexDocs: true,
      },
    ],
],
  themeConfig: {
  
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },

    image: 'img/raaghu-social-card.png',
    navbar: {
        logo: {
        alt: 'Raaghu Documentation Logo',
        src: 'https://raaghustorageaccount.blob.core.windows.net/raaghu-blob/raaghu-docs-lightmode.png',
        srcDark: 'https://raaghustorageaccount.blob.core.windows.net/raaghu-blob/raaghu-docs-darkmode.png',
      },
      items: [
       {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          label: 'Platform', // Custom dropdown label
          position: 'right',
          items: [
            {
              label: 'ABP ',
              to: '/',  // Change to the respective route
              dropdownActiveClassDisabled: true,
            },
            {
              label: ' Universal',
              to: '/Universal',
              dropdownActiveClassDisabled: true,
            },
            {
              label: ' ANZ',
              href: 'https://github.com/utkarshanik',  // External link
              dropdownActiveClassDisabled: true,
            },
          ],
        },
        
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{ to: '/versions',}],
          dropdownActiveClassDisabled: true,
        },
    
        // DROPDOWN VALUE
        // {
        //   label: 'Platform',
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'ABP',
        //       to: '/',
        //       dropdownActiveClassDisabled: true,
        //     },
        //     {
        //       label: 'Universal',
        //       to: '/Universal',
        //       dropdownActiveClassDisabled: true,
        //     },
        //     {
        //       label: 'ANZ',
        //       href: 'https://github.com/utkarshanik',
        //       dropdownActiveClassDisabled: true,
        //     },
        //   ],
        // },

        // {
        //   label: 'Custom Dropdown', // Custom label
        //   position: 'right',
        //   items: [
        //     {
        //       label: 'Option 1',
        //       to: '/option1', // Link to Option 1
        //     },
        //     {
        //       label: 'Option 2',
        //       to: '/option2', // Link to Option 2
        //     },
        //   ],
        // },

       

      {
          type: 'localeDropdown',
          position: 'right',
      },
       //{to: '/blog', label: 'Blog', position: 'left'},
      {
        href: 'https://github.com/Wai-Technologies/raaghu-docs',
        position: 'right',
        className: 'header-github-link',
      },
      {
        href: 'https://www.linkedin.com/company/waitechnologies',
        position:'right',
        className:'header-linkedIn-link',
      },
      {
        href: 'https://vimeo.com/user9603091',
        position:'right',
        className:'header-vimeo-link',
      },
      {
          href: 'https://www.youtube.com/@wai-technologies',
          position:'right',
          className:'header-youtube-link',
      },
      {
          href: 'https://twitter.com/waitechnologies',
          position:'right',
          className:'header-twitter-link',
      },

      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Getting Started',
              to: '/Getting Started/Setup-Your-Development-Environment',
            },
            {
              label: 'Tutorials',
              to: '/tutorials/The-Book-List-Page',
            },
            {
              label: 'CLI',
              to: '/CLI/',
            },
            {
              label: 'Samples',
              to: '/Samples/create-a-page',
            },
            {
              label: 'Startup Templates',
              to: '/Startup Templates/Solution-Structure',
            },
            {
              label: 'Application Modules',
              to: '/Application modules/Overall',
            },
            {
              label: 'UI Theme',
              to: '/UI Theme/UI-Theme',
            },
            {
              label: 'Storybook',
              to: '/Storybook/Components',
            },
            {
              label: 'React UI',
              to: '/React UI/Cutomization',
            },
            {
              label: 'Release Infromation',
              to: '/Release Information/Realse Notes',
            },
            {
              label: 'Deployment',
              to :'/Deployment/Raaghu Code Deployment'
            },
          ],
        },
        {
          title: 'Application Modules',
          items: [
            {
              label: 'Overall',
              to: '/Application Modules/Overall',
            },
            {
              label: 'Account',
              to: '/Application Modules/Account-Module',
            },
            {
              label: 'Audit Logging',
              to: '/Application Modules/Audit-Logging',
            },
            {
              label: 'Chat',
              to: '/Application Modules/Chat-Module',
            },
            {
              label: 'CMS Kit Pro',
              to: '/Application Modules/CMS-KIt-Pro',
            },
            {
              label: 'File Management',
              to: '/Application Modules/File-Management',
            },
            {
              label: 'Forms',
              to: '/Application Modules/Forms',
            },
            {
              label: 'GDPR',
              to: '/Application Modules/GDPR',
            },
            {
              label: 'Identity',
              to: '/Application Modules/Identity',
            },
            {
              label: 'OpenIddict',
              to: '/Application Modules/OpenIddict',
            },
            {
              label: 'Language Management',
              to: '/Application Modules/Language-Management',
            },
            {
              label: 'Payment',
              to: '/Application Modules/Payment',
            },
            {
              label: 'SaaS',
              to: '/Application Modules/SaaS',
            },
            {
              label: 'Text Template Management',
              to: '/Application Modules/Text-Template-Management',
            },
          ],
        },
        {
          title: 'More',
          items: [
            
            {
              label: 'GitHub',
              href: 'https://github.com/Wai-Technologies/raaghu-docs',
            },
            {
              label: 'Vimeo',
              href: 'https://vimeo.com/user9603091',

            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/waitechnologies',

            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@wai-technologies',

            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/waitechnologies',

            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wai Technologies. Built with Raaghu Design System.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};
export default config;
