/**
 * 根据身份证号码获取性别
 * @param  String id 合法的身份证编号
 * @return String 合法返回0或1，0为男，1位女，不合法返回-1
 */
 export function getSexById(id){
    let sex = '-1';
  
    if (idCodeValid(id)) {
      if (parseInt(id.substr(16, 1), 10) % 2 === 1) {
        // 男
        sex = '0';
      } else {
        // 女
        sex = '1';
      }
    }
  
    return sex;
  }

  export {logError} from './error'
  export {logDebug} from './error'