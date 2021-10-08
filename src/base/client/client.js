
import ClientStorage from '../store/storage';
import ClientInfo from "./client-info";

class Client {
    constructor(props) {
        ClientInfo.init();
    }
   
    isLogin() {

    }
    getClientId() {
        return ClientInfo.get('clientId');
    }
    getClientInfo() {
        return ClientInfo.getData();
    }
    getUserInfo() {
        let userInfo = ClientStorage.getItem('userInfo');
        return userInfo;
    }
    setUserInfo(userInfo){
        return true;
    }
}
export default new Client();