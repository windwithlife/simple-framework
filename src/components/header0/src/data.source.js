import React from 'react';


export const HeaderMenu00={

demoData: [
  {
    path: '/demo',
    name: '测试菜单一',
    key: 'demo',
  },
  {
    path: '/ok',
    name: '测试菜单三',
    key: 'demo2',
    children: [
      {
        path: '/welcome',
        name: '测试子菜单',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
        title: "测试",
        key:'demo20',
        children: [
          {
            path: '/welcome/welcome',
            name: '测试子菜单',
            exact: true,
            key:'demo200',
          },
        ],
      },
    ],
  },
  
],
styles:{
  wrapper:{ className: 'header3-menu'},
  item:{
    className: 'header3-item',
    title:{className:'header3-item-block'},
    itemHref:{className:'header3-item-block'},
    subItem:{
      className:'item-sub',
      subItemCell:{
        className:'item-sub-item',
        img:{className:"item-image"},
        title:{className:'item-title'},
        content:{className:'item-content'}
      }
    }
  }
  
}
};


export const Nav00DataSource = {
  wrapper: { className: 'header0-wrapper' },
  page: { className: 'home-page ' },
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



