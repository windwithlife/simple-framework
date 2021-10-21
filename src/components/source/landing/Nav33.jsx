import React from 'react';
//import TweenOne from 'rc-tween-one';
import asyncComponent  from '../../../base/route/AsyncComponent';
import HeaderMenu from './HeaderMenu';
import {
  Nav30DataSource,
 
} from './data.source';



class Header3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    let that = this;
    const { isMobile, ...props } = this.props;
    let dataSource =  Nav30DataSource;
    const { phoneOpen } = this.state;
    const TweenOne = asyncComponent(()=>import('rc-tween-one'));
  
    const moment = phoneOpen === undefined ? 300 : null;
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
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              className={dataSource.mobileMenu.className}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            className = {dataSource.Menu.className}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
          
            <HeaderMenu  style={that.props.style} isMobile={isMobile}/>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header3;
