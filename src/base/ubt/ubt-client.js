import Model from '../store/model';
import __global from '../global/global';
import client from '../client/client';

export default class UbtClient {
    constructor(props){
     
    }
    send=(type,params)=>{
        let bizPath= '/common-service/ubt';
        if(!params){
            params = {};
        }
        params.type=type;
        params.clientInfo = client.getClientInfo();
        console.log('ubt info--->', params);
        return new Model({bizPath}).fetch_post('/ubt-bg.gif', params, {});
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