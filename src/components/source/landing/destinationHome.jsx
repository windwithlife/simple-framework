import React, { useState, useEffect,useImperativeHandle } from 'react'
/*import { ContainerDiv ,ComponentDestinationHomeImageList,ContainerWH,transformScale} from './styled/destinationHome'*/
import _ from "lodash"
import './less/destinationHome.less'
const transformScale= 0.85;
const ContainerWH = 1;
const marginBu = ContainerWH * ( 1 - transformScale);
const DestinationHome = ({cRef}) => {
  const [imgList, changeImgList]  = useState([])
  const [endList,changeEndList] = useState([null,null])
  useEffect( () => {
    const _image= [
      [{
         url : "https://youimg1.c-ctrip.com/target/100e0h0000008rp39A12F_D_300_10000.jpg",
         label : "1月热门",
         city : "上海",
         before : "big",
         now : "big"
      },{
        url : "https://youimg1.c-ctrip.com/target/100r1f000001gon9mBC5D_D_300_10000.jpg",
        label : "2月热门",
        city : "成都",
        before : "small",
        now : "small"
      },{
        url : "https://dimg07.c-ctrip.com/images/10081f000001gqhxc8A27_C_184_184.jpg",
        label : "3月热门",
        city : "昆山",
        before : "small",
        now : "small"
      },{
        url : "https://dimg07.c-ctrip.com/images/100h180000013qm0m8FCA_C_184_184.jpg",
        label : "4月热门",
        city : "杭州",
        before : "big",
        now : "big"
      },{
        url : "https://dimg08.c-ctrip.com/images/100u0w000000k5jkw5060_C_184_184.jpg",
        label : "5月热门",
        city : "绍兴",
        before : "small",
        now : "small"
      },{
        url : "https://dimg03.c-ctrip.com/images/100o1f000001gp25e2695_C_184_184.jpg",
        label : "6月热门",
        city : "海宁",
        before : "small",
        now : "small"
      }],
      [{
        url : "https://dimg05.c-ctrip.com/images/100i1f000001gp5i6F64D_C_184_184.jpg",
        label : "7月热门",
        city : "海口",
        before : "small",
        now : "small"
      },{
        url : "https://dimg05.c-ctrip.com/images/100511000000rbgpl3A4B_C_184_184.jpg",
        label : "8月热门",
        city : "宁波",
        before : "small",
        now : "small"
      },{
        url : "https://dimg07.c-ctrip.com/images/100j1f000001gpsvo23F2_C_750_375.jpg",
        label : "9月热门",
        city : "舟山",
        before : "big",
        now : "big"
      },{
        url : "https://dimg01.c-ctrip.com/images/100a0n000000e8k4mD702_C_184_184.jpg",
        label : "10月热门",
        city : "台州",
        before : "small",
        now : "small"
      },{
        url : "https://dimg07.c-ctrip.com/images/100o1f000001gp6di1DB0_C_184_184.jpg",
        label : "11月热门",
        city : "三亚",
        before : "small",
        now : "small"
      },{
        url : "https://dimg01.c-ctrip.com/images/100w1f000001gwb0k4589_C_184_184.jpg",
        label : "12月热门",
        city : "厦门",
        before : "big",
        now : "big"
      }]
    ]
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
                marginLeft : `${marginBu}rem`
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
              }} key={`imgDom_${index2}`} className={className.join(" ")}>
                <p>{item2.city}</p>
                <h6>{item2.label}</h6>
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
              <p>{_endList.city}</p>
              <h6>{_endList.label}</h6>
            </div>
            </div>
          }
          return <div className={"ComponentDestinationHomeImageList"}
            style={{ paddingBottom : index === 1 ? "0.2rem" : "0"}}
            key={`imgList_${index}`}>
            {imgDom}
            {endDom}
          </div>
        })
      }
    </div>
  )
}
export default  DestinationHome
