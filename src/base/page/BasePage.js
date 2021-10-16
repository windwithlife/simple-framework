

import { Component } from "react";
import UbtClient from "../ubt/ubt-client";
import { logDebug } from "../../utils/index";
let ubt_instance = new UbtClient();

export default class BasePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.sendPV();
    }
    goto = (params) => {
        this.props.history.push(params);
    }
    params() {
        let params = {};
        if (this.props.match.params) {
            params = { ...params, ...this.props.match.params };
        }
        if (this.props.location.query) {
            params = { ...params, ...this.props.location.query };
        }
        console.log('router pramas..', params);
        return params;
    }

    sendPV = () => {
        if (this.pageId) {
            ubt_instance.ubtSendPV({ pageId: this.pageId });
        }

    }
    ubtTrace = (key, value) => {
        ubt_instance.ubtTrace(key, value);
    }
    ubtMetric = () => {
        ubt_instance.ubtMetric(key, value);
    }
    debugInfo = (name, info) => {
        logDebug(name, info);
    }
}