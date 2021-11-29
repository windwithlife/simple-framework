


import React from 'react';

import {BlockList} from "../../../src";
import {BasePage} from "../../../src/base";



export default class Index extends BasePage {

  
  constructor(props){ 
    super(props);

    this.pageId = "PID-TestPage";
    this.pageName ="首页"
    this.state={
      blocks:[],
    }
   console.log('props',this.props)
  }
  
  componentDidMount() {
    let that = this;
    super.componentDidMount();
    //let params = JSON.parse(this.params().json);
    let {blocks} = this.params();
    console.log('params', blocks,BlockList);
    let selectedBlocks = [];
    blocks.map((dataItem)=>{  
        if (!dataItem.checked){return}
        console.log(dataItem);
        BlockList.itemsData.map((item)=>{
          if (item.name === dataItem.name){
            selectedBlocks.push(item);
          }
        })
    });
 
    this.setState({blocks:selectedBlocks});
    
  }

  componentWillUnmount() { }

  componentDidShow() {
    super.componentDidShow();
   }

  componentDidHide() { }

  render() {
    let that = this;
    return (
      <div >       
     {
        that.state.blocks.map((item,index)=>{
             let Component = item.component;
             return <Component key={index} />
        })
     }
       
      </div>
     
    )
  }
}
