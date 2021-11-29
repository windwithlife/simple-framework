

import { Component } from "react";
import UbtClient from "../ubt/ubt-client";
import { logDebug } from "../../utils/index";
let ubt_instance = new UbtClient();

export default class BasePage extends Component {
    constructor(props){
        super(props);
        if (props && props.gateway){
            this.gateway = props.gateway;
        }else{
            this.gateway ='';
        }
        if (props && props.bizPath){
            this.bizPath = props.bizPath;
        }else{
            this.bizPath ='';
        }
        this.ubt_instance = new UbtClient({gateway:this.gateway,bizPath: this.bizPath});
    }
    componentDidMount() {
        this.sendPV();
    }
    goto = (params) => {
        this.props.history.push(params);
    }
    params() {
        let params = {};
        // if (this.props.match.params) {
        //     params = { ...params, ...this.props.match.params };
        // }
        if (this.props.location.query) {
            params = { ...params, ...this.props.location.query };
        }
        //console.log('router pramas..', params);
        return params;
    }
    ubt=()=>{
        return this.ubt_instance;
    }

    sendPV = () => {
        if (this.pageId) {
            ubt_instance.ubtSendPV({ pageId: this.pageId });
        }

    }
    
    debugInfo = (name, info) => {
        logDebug(name, info);
    }
}