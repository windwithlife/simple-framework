



let __compomentListLocal = new Map();
class PageConfig {
  __sectionList = [];
  registerComponentsMap(componentsMap) {
    for (let key in componentsMap) {
      this.registerComponent(key, componentsMap[key]);
    }
  }
  registerComponent = (name, sectionComponent) => {
    __compomentListLocal.set(name, sectionComponent);
  }
  getComponent = (name) => {
    let sectionComponent = __compomentListLocal.get(name);
    return sectionComponent;
  }
  __addPageSection = (templateName, data) => {
  
    let sectionComponent = this.getComponent(templateName);
  
    let sectionObject = { 'component': sectionComponent, 'data': data };
    this.__sectionList.push(sectionObject);
  
    return this;
  }
  appendSectionByName(name,data){
     this.__addPageSection(name,data);
  }
  appendSection(component,data){
    let sectionObject = { 'component': component, 'data': data };
    this.__sectionList.push(sectionObject);
    return this;
 }
  setPageSection = (index, templateName, data) => {
    if (index > this.__sectionList.length - 1) {
      return false;
    }
    let sectionComponent = this.getComponent(templateName);
    let sectionObject = { 'component': sectionComponent, 'data': data };
    this.__sectionList[index] = sectionObject;
    return true;
  }
  getPageSectionList = () => {
    return this.__sectionList;
  }
}
export default PageConfig;
