import React from 'react';

import asyncComponent from '../../../base/route/AsyncComponent';


import HeaderMenu from './HeaderMenu'

import {
  Nav00DataSource,
} from './data.source';



class Header extends React.Component {
  constructor(props) {
    super(props);
    if (props.logo) {
      this.logoImage = props.logo;
    } else {
      this.logoImage = Nav00DataSource.logo.children;
    }

  }


  render() {

    let that = this;
    const { RightContent, menuData, ...props } = this.props;
    const dataSource = Nav00DataSource;

    //const TweenOne = asyncComponent(()=>import('rc-tween-one'));
    return (

      <div

        className="header0-wrapper"
        style={that.props.style}
      >
        <div className="home-page" >
          <div className="header0-wrapper-logo" >
            <img  src={that.logoImage} alt="img" />
          </div>

          <div className="header0-menu" >
            <HeaderMenu menuData={menuData} menuClick={that.props.menuClick} style={that.props.style} />
          </div>
        </div>
        <div className="home-right">
          {RightContent && <RightContent />}
        </div>
      </div>

    );
  }
}

export default Header;
