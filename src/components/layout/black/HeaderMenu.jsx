import React from 'react';
import { Menu } from 'antd';
const { Item, SubMenu } = Menu;

import './less/antMotionStyle.less'


import {
  MenuData
} from './data.source';


class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);
    if(props.menuData){
      this.menuData = props.menuData;
    }else{
      this.menuData = MenuData;
    }
    
  
  }

  componentDidMount() {
   
  }
 
  render() {
    let {RightContent, ...props } = this.props;
    let menuData = this.menuData;
    if(!menuData){
      menuData=[];
    }
    console.log('menuData in headermenu-framework v14', menuData);
    const navChildren = menuData.map((menuItem) => {
      const { name, children } = menuItem;
      if (children) {
        return (
          <SubMenu
            key={menuItem.name}

            title={
              <div
                className='header0-item-block header0-item'
              >

                {menuItem.name}
              </div>
            }
            popupClassName="header0-item-child"
          >
            {children.map(($item, ii) => {
              return (
                <Item className='item-sub' key={$item.name || ii.toString()} >
                   <div className='item-sub-item'>
                  {$item.name}
                </div>
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menuItem.name + 'key'}>
          <div className='header0-item-block header0-item'>
            {menuItem.name}
          </div>
        </Menu.Item>
      );
    });

   
    return (

      <Menu
        mode='horizontal'
        theme="dark"
      >
        {navChildren}

      </Menu>
     
    );
  }
}

export default HeaderMenu;
