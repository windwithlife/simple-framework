import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';
import {
  Nav30DataSource,
  Banner01DataSource,
  Content00DataSource,
  Content50DataSource,
  Content30DataSource,
  Footer10DataSource,
} from './data.source';
import './less/content5.less'

class Content5 extends React.PureComponent {
  getChildrenToRender = (data,itemStyle) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...itemStyle}>
          <a {...itemStyle.itemLink}>
            <span {...itemStyle.img}>
              <img src={item.img} height="100%" alt="img" />
            </span>
            <p {...itemStyle.content}>{item.content}</p>
          </a>
        </Col>
      );
    });

  render() {
    console.log('in content5....')
    const { ...props } = this.props;
    const dataSource = Content50DataSource ;//props;
    const data = dataSource.demoData;
    const styles = dataSource.styles;
 
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      data.itemsData, styles.block.blockItem
    );
    return (
      
      <div {...props} {...styles.wrapper}>
        <div {...styles.page}>
          <div key="title" {...styles.title.titleWrapper}>
            <h1>{data.title.main}</h1>
            <div>{data.title.sub}</div>
          </div>
          <OverPack
            // className={`content-template ${props.className}`}
            {...styles.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...styles.block.wrapper}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Content5;
