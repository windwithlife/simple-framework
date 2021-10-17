import React from 'react';
import { Menu } from 'antd';
const { Item, SubMenu } = Menu;




import {
  HeaderMenu00
} from './data.source';

let matchItem = undefined;
const findMenuItemByKey = function (menuData, key) {

  for (let i = 0; i < menuData.length; i++) {
    let item = menuData[i];
    if (item.key == key) {
      matchItem = item;
      return matchItem;
    }
    if ((item.children) && findMenuItemByKey(item.children, key)) {
      return matchItem;
    }
  }
  return matchItem;


}

class HeaderMenu extends React.Component {

  constructor(props) {
    super(props);
    if (props.menuData) {
      this.menuData = props.menuData;
    } else {
      this.menuData = HeaderMenu00.demoData;
    }


  }

  componentDidMount() {

  }

  handleClick = e => {
    //console.log('click ', e);
    let clickedItem = findMenuItemByKey(this.menuData, e.key);
    if (this.props.menuClick){
      this.props.menuClick(clickedItem);
    }
    //console.log('match menu item', clickedItem);

  }
  render() {
    let that = this;
    let { RightContent, ...props } = this.props;
    let menuData = this.menuData;
    if (!menuData) {
      menuData = [];
    }

    const styles = HeaderMenu00.styles;

    // console.log('menuData in headermenu-framework v16', menuData);
    // console.log('menuData', menuData);
    const navChildren = menuData.map((menuItem) => {
      const { name, children } = menuItem;
      if (children) {
        return (
          <SubMenu
            key={menuItem.key}
            {...styles.item}

            title={
              <div
                {...styles.item.title}

              >
                {menuItem.name}
              </div>
            }
            popupClassName="header3-item-child"
          >
            {children.map(($item, ii) => {
              let keyIndex = $item.key;
              return (
                <Item {...styles.item.subItem} key={keyIndex} >
                  <div {...styles.item.subItem.subItemCell}>
                    <img {...styles.item.subItem.subItemCell.img} src={$item.icon} />
                    <div {...styles.item.subItem.subItemCell.title}>{$item.title}</div>
                    <div {...styles.item.subItem.subItemCell.content}>{$item.name}</div>
                  </div>
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      console.log('item', menuItem.name)
      return (
        <Menu.Item  {...styles.item} key={menuItem.key}>
          <div {...styles.item.itemHref}  >
            {menuItem.name}
          </div>
        </Menu.Item>
      );
    });

    console.log('isMoble', that.props.isMobile);
    return (

      <Menu
        onClick={that.handleClick}
        mode={that.props.isMobile ? 'inline' : 'horizontal'}
        theme="light"
        style={that.props.style}
      // {...styles.wrapper}
      >
        {navChildren}

      </Menu>

    );
  }
}

export default HeaderMenu;
