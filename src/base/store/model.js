// @ts-ignore
/* eslint-disable */

import axios from "axios";
import { HTTP_STATUS } from '../constants/status'
import { logError } from '../utils/error'
import Storage from '../store/storage'
import Client from '../client/client';


let GATEWAY = 'https://api.zhangyongqiao.com';
console.log('Gateway===>' + GATEWAY);


export default class Model {
  bizPath;
  constructor(props){
    if (props?.bizPath){
      this.bizPath = props.bizPath;
    }
  }

  saveToken(token) {
    //localStorage.setItem('web_token', token);
    Storage.saveToken(token);
  }
  clearToken() {
    Storage.clearToken();
    
  }
  getToken() {
    const token =  Storage.getToken();
    return token;
  }
  checkResponse(res) {
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return logError('api', '请求资源不存在')
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return logError('api', '服务端出现了问题')
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      return logError('api', '没有权限访问')
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      //this.processUnauthentication(res);
      return logError('api', '请先登录')
    } else if (res.statusCode === HTTP_STATUS.SERVER_ERROR) {
      return logError('api', '服务异常')
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data
    }
    return true;
  }
  
  composeFullUrl(url) {
    let fullPath = GATEWAY;
    if (this.bizPath){
      fullPath = fullPath + this.bizPath + url;
    }else{
      fullPath = fullPath  + url;
    }
    console.log('current url is ---->' + fullPath);
    return fullPath;
  }


  async fetch_get(url, query) {
    let that = this;
    let params = {cid: Client.getClientId(), ...query};
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    let result = await axios({
        headers: {
            'Content-Type': 'application/json',
            'token': this.getToken(),
        },
        method: 'get',
        url: this.composeFullUrl(url),
        data: params,
    }).then(that.checkResponse)
   
    return result;
  }
  async fetch_post(url, body, options) {
    let that = this;
    let params = { params: body ,head:{cid: Client.getClientId()}};
    axios.defaults.withCredentials = true;
    axios.defaults.crossDomain = true;
    let result = await axios({
        headers: {
            'Content-Type': 'application/json',
            'token': this.getToken(),
        },
        method: 'post',
        url:this.composeFullUrl(url),
        data: params,
    }).then(that.checkResponse)
   
    return result;

  }

}