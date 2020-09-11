import React from 'react'
import { render } from 'react-dom'
// import App from '@/views/index'
import { Provider } from 'react-redux'
import store from '@/reduxer'
import './App.less'
import Router from './router'

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
