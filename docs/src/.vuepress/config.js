const { description } = require('../../package')

module.exports = {
  dest: '.vuepress/deploy', 
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Big Tex Quest',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Categories',
        ariaLabel: 'Catagories',
        items: [
          { text: 'Animals', link: '/animals/' },
          { text: 'Food', link: '/food/' },
          { text: 'Midway', link: '/midway/' },
          { text: 'Sights', link: '/sights/' },
          { text: 'Other', link: '/other/' }
        ]
      }, 
      {
        text: 'Fair Map',
        link: 'https://bigtex.com/plan-your-visit/map/'
      }, 
      {
        text: 'Fair Schedule',
        link: 'https://bigtex.com/wp-content/uploads/2023/09/2023-SFT_Downloadable-Schedule.pdf'
      }
    ],
    sidebar: {
      '/about/': [
        ''
      ],
      '/animals/': [
        ''
      ],
      '/food/': [
        ''
      ],
      '/midway/': [
        ''
      ],
      '/other/': [
        ''
      ],
      '/sights/': [
        ''
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
