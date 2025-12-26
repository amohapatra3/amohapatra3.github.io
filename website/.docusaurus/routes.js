import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b5f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '943'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '65d'),
            routes: [
              {
                path: '/docs/about',
                component: ComponentCreator('/docs/about', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-docs/data-types',
                component: ComponentCreator('/docs/api-docs/data-types', 'b1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api-docs/operations',
                component: ComponentCreator('/docs/api-docs/operations', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/broader-initiatives/cli-sdk-examples',
                component: ComponentCreator('/docs/broader-initiatives/cli-sdk-examples', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/broader-initiatives/infrastructure-as-code',
                component: ComponentCreator('/docs/broader-initiatives/infrastructure-as-code', 'c26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/broader-initiatives/open-source-tutorials',
                component: ComponentCreator('/docs/broader-initiatives/open-source-tutorials', '465'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/broader-initiatives/scenario-based-content-refactoring',
                component: ComponentCreator('/docs/broader-initiatives/scenario-based-content-refactoring', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/api-documentation',
                component: ComponentCreator('/docs/category/api-documentation', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/broader-documentation-initiatives',
                component: ComponentCreator('/docs/category/broader-documentation-initiatives', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/developer-documentation',
                component: ComponentCreator('/docs/category/developer-documentation', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/ui-text',
                component: ComponentCreator('/docs/category/ui-text', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-guide/ecs-ebs-integration',
                component: ComponentCreator('/docs/dev-guide/ecs-ebs-integration', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dev-guide/shared-namespaces',
                component: ComponentCreator('/docs/dev-guide/shared-namespaces', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-text/ecs-ebs-integration-ui',
                component: ComponentCreator('/docs/ui-text/ecs-ebs-integration-ui', '062'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ui-text/ecs-restart-policy-ui',
                component: ComponentCreator('/docs/ui-text/ecs-restart-policy-ui', '71d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
