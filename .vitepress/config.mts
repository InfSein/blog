import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  lang: 'zh-CN',
  base: '/blog/',
  
  title: "InfSein's Blog",
  titleTemplate: "Blog",
  description: "Record, Archive, Share.",

  appearance: true,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    siteTitle: "个人博客",
    logo: '/icon/logo.svg',
    outline: {
      level: 'deep',
      label: '快速导航',
    },
    editLink: {
      pattern: 'https://github.com/peiyanlu/vite-press/edit/docs-deploy/docs/:path',
      text: `编辑此页`,
    },
    lastUpdated: {
      text: '上次更新',
    },
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: '示例文档', link: '/markdown-examples' },
        ]
      },
    ],

    footer: {
      message: '基于 VitePress 构建。',
      copyright: `Copyright © 2025-${ new Date().getFullYear() } InfSein`,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InfSein/blog' }
    ]
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
})
