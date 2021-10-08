import __global from '../global';


let data={};
//****获取的设备信息数据
function initializeDevice() {
    if (typeof Taro == 'object') {
        Taro.getNetworkType({
            success: function (res) {
                data['networkType'] = res.networkType
            }
        });

        Taro.getSystemInfo({
            success: function (res) {
                if (res.errMsg == 'getSystemInfo:ok') {
                    data['language'] = res.language;
                    data['version'] = res.version;
                    data['model'] = res.model; //'iPhone 6'
                    data['pixelRatio'] = res.pixelRatio;
                    data['windowWidth'] = res.windowWidth;
                    data['windowHeight'] = res.windowHeight;

                    data['system'] = res.system;
                    data['platform'] = res.platform;
                    data['ver'] = res.SDKVersion;
                }
            }
        });

    }
}

function initClientData() {
    if (typeof core == 'object') {
        data['appID'] = __global.appID || '';
        //data['user'] = core.user;

        // if (core.mkt) {
        //     core.mkt.getUnion(function (unionData) {
        //         let exmktid;
        //         unionData = unionData || {};
        //         try {
        //             exmktid = JSON.parse(unionData['exmktid'])
        //         } catch (e) {
        //             exmktid = {}
        //         }

        //         unionData = unionData || {};
        //         data['allianceid'] = unionData['allianceid'];
        //         data['alliancesid'] = unionData['sid'];
        //         data['allianceouid'] = unionData['ouid'];
        //         data['sourceid'] = unionData['sourceid'];
        //         data['exmktid'] = unionData['exmktid'];
        //         data['innerouid'] = exmktid['innerouid'];
        //         data['innersid'] = exmktid['innersid'];
        //         data['pushcode'] = exmktid['pushcode'];
        //     });
        // }

        // if (core.locate) {
        //     let c_point = core.locate.getCachedGeoPoint();
        //     let c_city = core.locate.getCachedCtripCity();

        //     if (c_city) {
        //         //setGeoCity(c_city)
        //         data['city']=c_city;
        //     }


        //     // if (c_point) {
        //     //     data['geo'] = {
        //     //         "latitude": c_point.latitude || 0,
        //     //         "longitude": c_point.longitude || 0
        //     //     }
        //     // }

        //     // if (c_city && c_city.data) {
        //     //     if (typeof data['geo'] === 'undefined' && c_city.data.gpsInfo && c_city.data.ctripPOIInfo) {
        //     //         data['geo'] = {};
        //     //     }
        //     //     if (c_city.data.gpsInfo) {
        //     //         data.geo['gpsLatitude'] = c_city.data.gpsInfo.latitude || 0;
        //     //         data.geo['gpsLongitude'] = c_city.data.gpsInfo.longitude || 0;
        //     //     }
        //     //     if (c_city.data.ctripPOIInfo) {
        //     //         data.geo['gpsCity'] = c_city.data.ctripPOIInfo.districtName || '';
        //     //         data.geo['gpsCityId'] = c_city.data.ctripPOIInfo.districtID || 0;
        //     //         data.geo['gpsCountry'] = c_city.data.ctripPOIInfo.country || '';
        //     //     }
        //     // }

        // }
    }
}

function createClientId(){
    let cId = Math.floor(Math.random() * 15) || 64;
    data['clientId'] = cId;
    return cId;
}
let ClientInfo = (function(){
    return {

		get: function (name, defaultValue) {
			return data[name] || defaultValue;
		},
        getData: function(){
            return data;
        },
		init: function () {
            createClientId();
			initializeDevice();
			initClientData();
		}
	}

})();

export default ClientInfo;