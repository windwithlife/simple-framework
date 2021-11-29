import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store'
// import '@/index.less';
//import App from './routes';
import App from './routes';
console.log('in index.js...')
ReactDOM.render(
  // <Provider store={store}>
    <App></App>,
  // </Provider>,
  document.getElementById('root')
);


