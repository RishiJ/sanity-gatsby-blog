export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1702e2d2b961badd3a825f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-miawijbq',
                  apiId: '5e4b9fda-7dc9-4886-b827-d59a1732ea9f'
                },
                {
                  buildHookId: '5e1702e35dc8ce548e7d491d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tk16w2fq',
                  apiId: 'd7dc72ba-0608-47c1-b087-7387aa158bb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RishiJ/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tk16w2fq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
