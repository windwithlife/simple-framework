import Model from '../store/model';
import __global from '../global/global';
import client from '../client/client';

export default class UbtClient {
    constructor(props){
     
        if(props && props.gateway){
            this.gateway = props.gateway;
        }else{
            this.gateway = "https://api.zhangyongqiao.com";
        }
        this.bizPath= '/common-service/ubt';
        if (props && props.bizPath){
            this.bizPath = props.bizPath;
        }
    }
    send=(type,params)=>{
        
        params.type=type;
        params.clientInfo = client.getClientInfo();
        return new Model({gateway:this.gateway,bizPath:this.bizPath}).fetch_post('/ubt-bg.gif', params, {});
  
    }
    ubtTrace=(params)=>{
        this.send('TRACE',params);
    }
    ubtDevTrace=(params)=>{
        this.send('DEV_TRACE',params);
    }
    ubtMetric=(params)=>{
        this.send('Metric',params);
    }
    ubtExposure=(params)=>{
        this.send('EXPOSURE',params);
    }
    ubtSendPV=(params)=>{
        this.send('PV',params);
    }
}