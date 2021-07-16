const path = require('path');

module.exports = {
  title: 'MOV',
  decription: 'MOV docs',
  dest: path.join(__dirname, '../../dist'),
  // base: '/docs/',   // base URL  <img :src="$withBase('/foo.png')" alt="foo">
  port: 8085,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }]
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // logo: '/images/logo.png',
    // navbar: false,
    // search: false,  // 禁用搜索框
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    lastUpdated: 'Last Updated',
    // nextLinks: false,
    // prevLinks: false,
    smoothScroll: true,
    sidebarDepth: 1,  // 默认1
    displayAllHeaders: false, // 显示所有页面的标题链接  默认false
    // sidebar: 'auto',
    // sidebar: [],
    locales: {
      '/': {
        label: 'English',
        lang: 'en-US',
        title: 'Bytom 2,0',
        description: 'Bytom2.0 Developer Center',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/guide/': getGuideSidebar('Overview','Getting Started','Tools','Smart Contracts','Dapp Guide', 'Integration Guide'),
        },
      },
      '/zh/': {
        label: '简体中文',
        lang: 'zh-CN',
        title: 'Bytom 2,0',
        description: 'Bytom 2,0 开发者中心',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/api/': getApiSidebar(),
          '/zh/guide/': getGuideSidebar('概述','开发入门','开发工具','智能合约','Dapp案例', '生态接入指南'),
        }
      }
    },
  },

  locales: {
    '/': {
      label: 'English',
      lang: 'en-US',
      title: 'Bytom2.0',
      description: 'Bytom2.0 Developer Center',
    },
    '/zh/': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Bytom2.0',
      description: 'Bytom 2,0 开发者中心',
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '../public', // ！[Image from alias](~@alias/image.png)
      }
    }
  },
  markdown: {
    extendMarkdown: md => {
        md.set({
            html: true
        })
        md.use(require('markdown-it-katex'))
    }
  },
  plugins: [
    ['vuepress-plugin-right-anchor'],
    [
      'vuepress-plugin-right-anchor',
      {
        showLevel: 1,
        ignore: [
          '/faq/',
          '/zh/faq/'
        ]
      }
    ]
  ]
};

function getApiSidebar () {
  return [
    'bytomrpc',
    'vaporrpc',
    'blockmeta',
    'bapp',
    'blockcenter',
    'bycoin'
  ]
}

function getGuideSidebar (groupA, groupB, groupC, groupD, groupE, groupF) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        'what_is_bytom2',
        'consensus_algorithm',
        'key',
        'address',
        'account'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        'build_environment',
        'compile_node',
        'bytom2_api'
      ]
    },
    {
      title: groupC,
      collapsable: true,
      children: [
        'java_sdk',
      ]
    },
    {
      title: groupD,
      collapsable: true,
      children: [
      ]
    },
    {
      title: groupE,
      collapsable: true,
      children: [
      ]
    },
    {
      title: groupF,
      collapsable: true,
      children: [
      ]
    }
  ]
}