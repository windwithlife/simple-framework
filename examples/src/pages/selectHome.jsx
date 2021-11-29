

import React from 'react';
import {Button} from 'antd';

import {BasePage} from "../../../src/base";
import ServerModel from '../models/ServerModel';
import BlockSelect from "../components/blockSelect";
import "../../../src/components/style/index";

export default class Index extends BasePage {
  state={
    selectedList:[] 
  }
  
  constructor(props){
    super(props);
    this.pageId ='select-page';
    this.pageName ="定制创建页面功能首页"
  }
  
  componentDidMount() {
    let that = this;
    super.componentDidMount();        
  }


  gotoPrediv=()=>{
      //const jsonParams = JSON.stringify(this.state.selectedList);    
      //const url = '/preview?json=' + jsonParams;
      this.goto({pathname:'/preview',query:{blocks:this.state.selectedList}});
  }
  createPage=()=>{
    ServerModel.createPage({blocks:this.state.selectedList}).then((result)=>{console.log(result)});
  }
  
  onSelect =(result)=>{
      console.log('selected data..',result)
      this.setState({selectedList:result});
  }
  render() {
    let that = this;
 
    return (
      <div >        
       <BlockSelect  onResult={that.onSelect}/>
       <Button  type='warn' onClick={that.gotoPrediv}>预览</Button>
       <Button type='warn' onClick={that.createPage}>创建页面</Button>
      </div>
     
    )
  }
}
