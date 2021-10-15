import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { enquireScreen } from 'enquire-js';
import { Layout, Menu, Avatar, Select, Button, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, InfoCircleOutlined } from '@ant-design/icons';
// import Basic from "./components/Basic"
// import SimplePage from "./components/TestSimplePage"
// import TestPage from "./components/TestPage"
//  import TestSimplePage from "./components/TestSimplePage"
import {Header, Header3, Footer, Footer1, Block5, Block0, Block3 } from '../../src';
import {logError} from '../../src/base';
import { fixControlledValue } from 'antd/lib/input/Input';
//import 'antd/dist/antd.css';


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
           
            <Header menuClick= {this.onMenuClick} logo='static/logo.svg' isMobile={this.state.isMobile} style={{color:'#fff',background:'#000'}}/> 
            <Header3 isMobile={this.state.isMobile} />
            {/* <Header33 isMobile={this.state.isMobile} /> */}
           
            <Button type="primary" >test primary color</Button>
            <Content>
              <Block3 />
              <Block0 id="Content0_0" />

              <Block5 />
            </Content>
            <Footer1>Footer</Footer1>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

