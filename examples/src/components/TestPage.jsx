
import React from 'react';
import BasePage from "../../../src/base/page/BasePage"

export default class Index extends BasePage {

  constructor(props) {
    super(props);
    this.state = {
      sectionList: [],
    }
    this.pageId = "PID-H0038289";
  }

  componentDidMount() {
    console.log('didmount in children class...')
    super.componentDidMount();
    this.params();
  }
  onClick =()=>{
     console.log('onclick');
     this.goto({pathname:'/',query:{name:'zhangyongqiao'}});
  }

  render() {
    return (
      <button onClick={this.onClick} >testest</button>
    )
  }
}
