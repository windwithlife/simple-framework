import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';

import HeaderMenu from './HeaderMenu'
import './less/nav0.less'
import {
  Nav00DataSource,
} from './data.source';

class Header extends React.Component {
  constructor(props) {
    super(props);
    if (props.logo){
      this.logoImage= props.logo;
    }else{
      this.logoImage =Nav00DataSource.logo.children;
    }
   
  }

 
  render() {
    //console.log('in header....')
    
    let that = this;
    const { RightContent, menuData, ...props } = this.props;
    const dataSource = Nav00DataSource;
    // console.log('menuData in header', menuData);
  
    return (
      
        <TweenOne
          component="header"
          animation={{ opacity: 0, type: 'from' }}
          {...dataSource.wrapper}
          {...props}
        >
          <div
            {...dataSource.page}
          >
            <TweenOne
              animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
              {...dataSource.logo}
            >
              <img width="100%" src={that.logoImage} alt="img" />
            </TweenOne>
            
            <TweenOne
              {...dataSource.Menu}
              
            >
              <HeaderMenu menuData={menuData}  menuClick={that.props.menuClick} style={that.props.style} />
            </TweenOne>
           
          </div>
          
         {RightContent && <RightContent />}
        
        </TweenOne>
     
    );
  }
}

export default Header;
