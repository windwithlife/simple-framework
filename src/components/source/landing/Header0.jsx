import React from 'react';
//import TweenOne from 'rc-tween-one';
import asyncComponent  from '../../../base/route/AsyncComponent';
//import TweenOne from 'rc-tween-one';

import HeaderMenu from './HeaderMenu'

import {
  Nav00DataSource,
} from './data.source';

import './less/nav0.less'

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
    const TweenOne = asyncComponent(()=>import('rc-tween-one'));
    return (
      
        <TweenOne
          component="header"
          animation={{ opacity: 0, type: 'from' }}
          className={dataSource.wrapper.className}
          style={that.props.style}
          // {...props}
        >
          <div
            {...dataSource.page}
          >
            <TweenOne
              animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
              className={dataSource.logo.className}
            >
              <img width="100%" src={that.logoImage} alt="img" />
            </TweenOne>
            
            <TweenOne
              className={dataSource.Menu.className}
              
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
