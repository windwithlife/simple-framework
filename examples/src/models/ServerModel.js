// @ts-ignore
/* eslint-disable */
import {Model} from '../../../src/base';

let ModelOptions = {gateway:"http://localhost:3000"}
export default class DefaultModel {
  //*********************************API for Category Section ************************************/
  static createPage(params, options) {
    return new Model(ModelOptions).fetch_post('/createPage', params, options);
  }
}
