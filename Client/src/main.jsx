// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.js'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from "../src/Redux/store";

ReactDOM.render(
  <Provider store ={store}>
    <BrowserRouter>

    <App />

  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);