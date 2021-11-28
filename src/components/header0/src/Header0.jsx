import React from 'react';

import asyncComponent  from '../../../base/route/AsyncComponent';


import HeaderMenu from './HeaderMenu'

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
    
    let that = this;
    const { RightContent, menuData, ...props } = this.props;
    const dataSource = Nav00DataSource;

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
