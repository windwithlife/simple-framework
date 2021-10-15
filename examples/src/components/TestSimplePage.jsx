
import React from 'react';
// import SimplePage from "../../../src/base/page/SimplePage"
import SimplePage from "../../../src/base/page/SimplePage"
import  {NewButton} from '@';

export default class Index extends SimplePage {

  constructor(props) {
    super(props);
    // this.state = {
    //   sectionList: [],
    // }
    this.pageId = "PID-testsimplepage";
    this.registerComponent('button',NewButton);
  }

  componentDidMount() {
    console.log('didmount in test simple page')
    super.componentDidMount();
    this.addPageSection('button');
    this.addPageSection('button');
    this.addPageSection('button');
    //this.renderPage();
    //this.params();
  }
  onClick =()=>{
     console.log('onclick');
     this.goto({pathname:'/',query:{name:'zhangyongqiao'}});
  }

  render() {
    const sections = this.composedPageSections();
  
    return (
      <div>{sections}</div>
    )
  }
}
