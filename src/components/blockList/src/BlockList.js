import Block5 from '../../block5';
import Header from '../../header';

const DataSource = {
  
    title: {
      main: "选择",
      subTitle: "在这里用一段话介绍服务的案例情况",
    },
    itemsData: [
      {
        name: 'Header',
        checked: false,
        sourcecodePath: 'header',
        component: Header,
      },
      {
        name: 'Block5',
        checked: false,
        sourcecodePath: 'block5',
        component: Block5,
      },  
    ],
   
};
export const getComponentByName = function(name){
    for (var item of DataSource){
       if (item.name === name){
         return item;
       }
    }
}

export default DataSource;
