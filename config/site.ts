/*
 * :file description:
 * :name: /kaola/config/site.ts
 * :author: 张德志
 * :copyright: (c) 2024, Tungee
 * :date created: 2024-01-23 19:30:47
 * :last editor: 张德志
 * :date last edited: 2024-01-23 20:09:52
 */
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '招才蛙',
  description: '简历代写平台',
  navItems: [
    {
      label: '首页',
      href: '/',
    },
    {
      label: '简历模板',
      href: '/resume-template',
    },
    {
      label: '我的简历',
      href: '/my-resume',
    },
    {
      label: '我要招聘',
      href: '/blog',
    },
    {
      label: '联系我们',
      href: '/contact-us',
    },
  ],
    
};
