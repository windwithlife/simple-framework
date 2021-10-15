
import React from 'react';
import BasePage from "./BasePage"
import PageConfig from './PageConfig';


const styleSection = { color: 'red',width: '100%' }

export default class SimplePage extends BasePage {

  constructor(props) {
    super(props);
    this.state = {
      sectionList: [],
    }
    this.pageConfig = new PageConfig();
  }

  componentDidMount() {
    console.log('didmount in simplepage')
    super.componentDidMount();

  }
  // renderPage() {
  //   console.log('test.....')
  //   const list = this.pageConfig.getPageSectionList();
  //   console.log('list....', list);
  //   this.setState({ sectionList: list });
  // }
  registerComponent(name, component) {
    this.pageConfig.registerComponent(name, component);
  }
  addPageSection(sectionName, data) {
    console.log('addpagesss...')
    this.pageConfig.addPageSection(sectionName, data);
    const list = this.pageConfig.getPageSectionList();
    console.log('list....', list);
    this.setState({ sectionList: list });
  }

  composedPageSections() {
    let sections = this.state.sectionList;
    // console.log("sections.item...", sections);
    const sectionList = sections.map((item, index) => {
      let itemData = item.data;
      let SectionItem = item.component;
      // console.log("item...", item);
      return (
        <div style={styleSection}><SectionItem style={styleSection} key={index} name= "test"data={itemData} ></SectionItem></div>
      );
    });
    return sectionList;

  }

}


