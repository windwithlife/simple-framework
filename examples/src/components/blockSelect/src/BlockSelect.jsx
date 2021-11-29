import React from 'react';
import {Button} from 'antd';
import {BlockList as DataSource} from '../../../../../src';
import '../style/index.js'

class BlockSelect extends React.Component {
 
  constructor(props){
    super(props);

    let originCheckedList =[];
    for (let item of DataSource.itemsData){
      let newItem = {name:item.name,sourcecodePath:item.sourcecodePath, checked:false}
      originCheckedList.push(newItem);
    }

    this.state={
        checklist:[],
        items:DataSource.itemsData,
        checkedList: originCheckedList,
    }
    
  }

  onClick=(index)=>{
     this.state.checkedList[index].checked = !this.state.checkedList[index].checked ;
     this.setState({checkedList:this.state.checkedList});
     if (this.props.onResult){
      this.props.onResult(this.state.checkedList);
     }
     

  }

  render() {
    const that = this;
    const { ...props } = this.props;
    console.log('itemsData', that.state.items);

  
    return (

      <div {...props} className="block-select-wrapper" >
        <div className="block-select">
          {DataSource.itemsData.map((item,index) => {
            let Component = item.component;
            return (
              <div key={item.name} className="block" >
                <div className="block-content" >
                  <Component key={item.name} />
                  <div className={`block-text  ${ that.state.checkedList[index].checked ?'checked':''}`} onClick={()=>{that.onClick(index)}}>{item.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlockSelect;
