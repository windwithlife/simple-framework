import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import {
  Footer00DataSource,
} from './data.source';

class Footer extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    let { dataSource } = props;
    dataSource = Footer00DataSource;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="footer"
            {...dataSource.copyright}
          >
            {dataSource.copyright.children}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
