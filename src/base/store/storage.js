
const isServer = typeof window == 'undefined';

export default class ClientStorage {
    static setItem(key,value){   
        if (!isServer) {
            localStorage.setItem(key, value);
        } 
    }
    static getItem(key){
        let result ='empty'
        if (!isServer) {
            result = localStorage.getItem(key);
        } 
        return result;
    }
    static removeItem(key){
        if (!isServer) {
            result = localStorage.removeItem(key);
        } 
    }

    static saveToken(token) {
         this.setItem('token',token);
    }
    static clearToken() {
        this.removeItem('token');
    }
    static getToken() {
      return this.getItem('token');
    }
}