import React, { useState, useEffect,useImperativeHandle } from 'react'
/*import { ContainerDiv ,ComponentDestinationHomeImageList,ContainerWH,transformScale} from './styled/destinationHome'*/
import _ from "lodash"
import '../style/destinationHome.less'
const transformScale= 0.85;
const ContainerWH = 15.4;
const marginBu = ContainerWH * ( 1 - transformScale);
/*示例：imgListOption ： [
    [{
        url : "https://img95.699pic.com/photo/50061/8976.jpg_wh300.jpg",
        label : "1月热门",
        city : "上海"
    },{
        url : "https://img95.699pic.com/photo/50050/2419.jpg_wh300.jpg",
        label : "2月热门",
        city : "成都"
    },{
        url : "https://img95.699pic.com/photo/50140/6207.jpg_wh300.jpg",
        label : "3月热门",
        city : "昆山"
    },{
        url : "https://img95.699pic.com/photo/50046/7214.jpg_wh300.jpg",
        label : "4月热门",
        city : "杭州"
    },{
        url : "https://img95.699pic.com/photo/50071/9458.jpg_wh300.jpg",
        label : "5月热门",
        city : "绍兴"
    },{
        url : "https://img95.699pic.com/photo/50090/8892.jpg_wh300.jpg",
        label : "6月热门",
        city : "海宁"
    }],
    [{
        url : "https://img95.699pic.com/photo/50038/3442.jpg_wh300.jpg",
        label : "7月热门",
        city : "海口"
    },{
        url : "https://img95.699pic.com/photo/50132/5516.jpg_wh300.jpg",
        label : "8月热门",
        city : "宁波"
    },{
        url : "https://img95.699pic.com/photo/50101/0724.jpg_wh300.jpg",
        label : "9月热门",
        city : "舟山"
    },{
        url : "https://img95.699pic.com/photo/50055/7602.jpg_wh300.jpg",
        label : "10月热门",
        city : "台州"
    },{
        url : "https://img95.699pic.com/photo/50052/8716.jpg_wh300.jpg",
        label : "11月热门",
        city : "三亚"
    },{
        url : "https://img95.699pic.com/photo/50055/0952.jpg_wh300.jpg",
        label : "12月热门",
        city : "厦门"
    }]
]*/
const DestinationHome = ({cRef,getImageRes,imgListOption}) => {
  const [imgList, changeImgList]  = useState([])
  const [endList,changeEndList] = useState([null,null])
  useEffect( () => {
      let _image = imgListOption;
      if(imgListOption){
          let _image = imgListOption;
      }else{
          _image= [
              [{
                  url : "https://img95.699pic.com/photo/50061/8976.jpg_wh300.jpg",
                  label : "1月热门",
                  city : "上海"
              },{
                  url : "https://img95.699pic.com/photo/50050/2419.jpg_wh300.jpg",
                  label : "2月热门",
                  city : "成都"
              },{
                  url : "https://img95.699pic.com/photo/50140/6207.jpg_wh300.jpg",
                  label : "3月热门",
                  city : "昆山"
              },{
                  url : "https://img95.699pic.com/photo/50046/7214.jpg_wh300.jpg",
                  label : "4月热门",
                  city : "杭州"
              },{
                  url : "https://img95.699pic.com/photo/50071/9458.jpg_wh300.jpg",
                  label : "5月热门",
                  city : "绍兴"
              },{
                  url : "https://img95.699pic.com/photo/50090/8892.jpg_wh300.jpg",
                  label : "6月热门",
                  city : "海宁"
              }],
              [{
                  url : "https://img95.699pic.com/photo/50038/3442.jpg_wh300.jpg",
                  label : "7月热门",
                  city : "海口"
              },{
                  url : "https://img95.699pic.com/photo/50132/5516.jpg_wh300.jpg",
                  label : "8月热门",
                  city : "宁波"
              },{
                  url : "https://img95.699pic.com/photo/50101/0724.jpg_wh300.jpg",
                  label : "9月热门",
                  city : "舟山"
              },{
                  url : "https://img95.699pic.com/photo/50055/7602.jpg_wh300.jpg",
                  label : "10月热门",
                  city : "台州"
              },{
                  url : "https://img95.699pic.com/photo/50052/8716.jpg_wh300.jpg",
                  label : "11月热门",
                  city : "三亚"
              },{
                  url : "https://img95.699pic.com/photo/50055/0952.jpg_wh300.jpg",
                  label : "12月热门",
                  city : "厦门"
              }]
          ]
      }

      for(let i = 0 ; i < _image.length ; i++){
          for(let x = 0 ; x < _image[i].length ; x++){
              if(i === 0){
                  if(x % 3 === 0){
                      _image[i][x].before = "big";
                      _image[i][x].now = "big";
                  }else{
                      _image[i][x].before = "small";
                      _image[i][x].now = "small";
                  }
              }else{
                  if(x % 3 === 2){
                      _image[i][x].before = "big";
                      _image[i][x].now = "big";
                  }else{
                      _image[i][x].before = "small";
                      _image[i][x].now = "small";
                  }
              }
          }
      }
    changeImgList(_image)
    let time = 1 ;
    const timeInter =  setInterval( () => {
      changeImgList( (v) => {
        const index = time % 2;
        const cloneImg  = _.clone(v);
        const imgListFList =  cloneImg[index]
        const lastImg = imgListFList[imgListFList.length - 1];
        imgListFList.pop();
        imgListFList.splice(index + 1,0,lastImg)
        for(let i = 0 ; i < imgListFList.length ; i++){
          const _imgListFList = imgListFList[i];
          if(index === 0){
            const _now = _.clone(_imgListFList.now);
            if(i === 1){
              _imgListFList.now = "small";
              _imgListFList.before = ""
              continue;
            }
            if(i % 3 === 0){
              _imgListFList.now = "big";
              _imgListFList.before = _now;
            }else {
              _imgListFList.now = "small";
              _imgListFList.before = _now;
            }
          }else if (index === 1){
            const _now = _.clone(_imgListFList.now);
            if(i === 2){
              _imgListFList.now = "big";
              _imgListFList.before = ""
              continue;
            }
            if(i % 3 === 2){
              _imgListFList.now = "big";
              _imgListFList.before = _now;
            }else {
              _imgListFList.now = "small";
              _imgListFList.before = _now;
            }
          }
        }
        cloneImg[index] = imgListFList;
        setTimeout( () => {
          changeImgList( (v2) => {
            const cloneImg2  = _.clone(v2);
            const index2 = (time - 1)% 2;
            const imgListFList2 =  cloneImg[index2]
            for(const _imgList of imgListFList2){
              _imgList.before = _imgList.now;
            }
            cloneImg2[index2] = imgListFList2
            return cloneImg2
          })
          changeEndList( (end2 ) => {
            const cloneEnd2 = _.clone(end2);
            cloneEnd2[index] = null
            return cloneEnd2
          })
        },1000)
        changeEndList( (end) => {
          const cloneEnd = _.clone(end);
          cloneEnd[index] = lastImg
          return cloneEnd
        })
        return cloneImg
      })
      time ++;
    },3000)
    return () => clearInterval(timeInter);
  },[])

  return (
    <div className={"ContainerDiv"}>
      {
        imgList && imgList.map( (item ,index ) => {
          const imgDom = item && item.map( (item2 ,index2 ) => {
            let marginLeft = null;
            const  className = ["Component_img_dom"]
            if(index === 0){
              if(index2 % 3 !== 0){
                className.push("transform_scale_top")
              }
            }else if(index === 1){
              if(index2 % 3 !== 2){
                className.push("transform_scale_bottom")
              }
            }
            if(index2 % 3 === 0){
              marginLeft = {
                marginLeft : `${marginBu}%`
              }
            }
            if(item2.before !== item2.now){
               if(item2.before === ""){
                 if(item2.now === "big"){
                   className.push("transform_scale_zero_to_big")
                 }else{
                   className.push("transform_scale_zero_to_small")
                 }
               }else{
                 if(item2.now === "big"){
                   className.push("transform_scale_small_to_big")
                 }else{
                   className.push("transform_scale_big_to_small")
                 }
               }
            }
            return <>
              <div style={{
                ...{
                backgroundImage : `url(${item2.url})`
                },
                ...marginLeft
              }}
                   onClick={()=>{
                     const {city,label,url} = item2;
                     console.log("item2",{city,label,url})
                     getImageRes && getImageRes({city,label,url});
                   }}
                   key={`imgDom_${index2}`} className={className.join(" ")}>
                <div className={"Component_img_dom_box_title"}>
                <p>{item2.city}</p>
                <h6>{item2.label}</h6>
                </div>
              </div>
            </>
          })

          let endDom = null;
          const _endList = endList[index];
          if(!!_endList){
            const  className = ["Component_img_dom"]
            if(index === 0) {
              className.push("transform_scale_top")
              className.push("transform_scale_small_to_big")
            }else{
              className.push("transform_scale_big_to_small")
            }
            endDom = <div className="Component_img_dom_box Component_img_dom_remove"><div style={{
              ...{
                backgroundImage : `url(${_endList.url})`
              }
            }} key={`imgDom_${_endList}` } className={className.join(" ")}>
              <div className={"Component_img_dom_box_title"}>
                <p>{_endList.city}</p>
                <h6>{_endList.label}</h6>
              </div>
            </div>
            </div>
          }
          return <div className={"ComponentDestinationHomeImageList"}
            style={{ paddingBottom : index === 1 ? "5%" : "0"}}
            key={`imgList_${index}`}>
            <div className={"ComponentDestinationHomeImageListPosition"}>
                {imgDom}
                {endDom}
            </div>
          </div>
        })
      }
    </div>
  )
}
export default  DestinationHome
