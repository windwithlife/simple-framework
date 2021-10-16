
import React from 'react';
import BasePage from "./BasePage"
import PageConfig from './PageConfig';
import Model from '../store/model';

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
    // console.log('didmount in simplepage')
    super.componentDidMount();

  }
  renderPage=(url,params)=>{
    let that = this;
    if(url){
       new Model().fetch_post(url,params).then(result=>{
          let listData = result.data;
          listData.map(item=>{
            that.appendSectionByName(item.name,item.data);
          })
          const list = this.pageConfig.getPageSectionList();
          this.setState({ sectionList: list });
       })
    }else{
      console.log('test.....')
      const list = this.pageConfig.getPageSectionList();
      this.setState({ sectionList: list });
    }
     
  }
  registerComponent(name, component) {
    this.pageConfig.registerComponent(name, component);
  }
  appendSectionByName(sectionName, data) {
    console.log('addsection by name...')
    this.pageConfig.appendSectionByName(sectionName, data);
    //const list = this.pageConfig.getPageSectionList();
    //console.log('list....', list);
    //this.setState({ sectionList: list });
  }

  appendSection(sectionComponent, data) {
    console.log('addsection...')
    this.pageConfig.appendSection(sectionComponent, data);
    //const list = this.pageConfig.getPageSectionList();
    //console.log('list....', list);
    //this.setState({ sectionList: list });
  }
  sections() {
    //let sections = this.state.sectionList;
    let sections = this.pageConfig.getPageSectionList();
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


