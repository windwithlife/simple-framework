import React from 'react';

export const MenuData = [
  {
    path: '/demo',
    name: '测试菜单一',
  },
  {
    path: '/',
    name: '测试菜单二',
    children: [
      {
        path: '/welcome',
        name: '测试子菜单',
        children: [
          {
            path: '/welcome/welcome',
            name: '测试子菜单',
            exact: true,
          },
        ],
      },
    ],
  },
  
];


export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper ku6u4bmqqom-editor_css' },
  page: { className: 'home-page ku6u6f3c36j-editor_css' },
  logo: {
    className: 'header0-logo',
    // children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    children:  'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
   

  },
  Menu: {
    className: 'header0-menu',

  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://www.zhangyongqiao.com">Simple-Framework</a> All Rights
        Reserved
      </span>
    ),
  },
};
