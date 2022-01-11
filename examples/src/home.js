import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { enquireScreen } from 'enquire-js';
import { Layout, Menu, Avatar, Select, Button, Breadcrumb } from 'antd';

// import Header from "../../src/components/header";
import { DestinationHome,Block5,Block3,Block0,Header0 } from '../../src';

import '../../src/components/header0/style'
// import '../../src/components/block5/style'
// import '../../src/components/block3/style'

const { SubMenu } = Menu;
const { Content } = Layout;
const Option = Select.Option;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  onMenuClick=(item)=>{
      console.log('menu click in application', item);
  }
  render() {


    return (
      <Router>
        <div>
          <Layout>

            {/* <Header menuClick= {this.onMenuClick} logo='static/logo.svg' isMobile={this.state.isMobile} style={{color:'#fff',background:'#000'}}/> */}
         
            <Button type="primary" >test primary color333</Button>
            <Header0 menuClick= {this.onMenuClick} logo='static/logo.svg' isMobile={this.state.isMobile} />
            <Content>
              {/* <Block3 /> */}
              {/*
              <Block0 id="Content0_0" />
 
              <Block5 data={{title:{main:'测试主题'}}} onItemClick={(item)=>{console.log(item)}} />
               */}

              {/* <Block0 id="Content0_0" />
 
               <Block3 /> 
               <Block5 data={{title:{main:'测试主题好'}}} onItemClick={(item)=>{console.log(item)}} />
              <DestinationHome /> */}
           
            </Content>
      
          </Layout>
        </div>
      </Router>
    );
  }
}

