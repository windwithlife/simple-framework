
import React from 'react';
import SimplePage from "../../../src/base/page/SimplePage"

import { Block0,Block3,Block5 } from '../../../src';

export default class Index extends SimplePage {

  constructor(props) {
    super(props);
    this.pageId = "PID-testsimplepage";
    // this.registerComponent('button',NewButton);
    this.registerComponent('block0',Block0);
    this.registerComponent('block3',Block3);
  }

  componentDidMount() {
    console.log('didmount in test simple page')
    super.componentDidMount();
    // this.appendSectionByName('button');
    // this.appendSectionByName('button');
    // this.appendSectionByName('button');
    this.appendSectionByName('block0');
    this.appendSectionByName('block3');
    this.appendSection(Block5);
    this.renderPage();
    //this.params();
  }
  onClick =()=>{
     console.log('onclick');
     this.goto({pathname:'/',query:{name:'zhangyongqiao'}});
  }

  render() {
    //const sections = 
  
    return (
      <div>{this.sections()}</div>
    )
  }
}
