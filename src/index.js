import React from 'react';
import ReactDOM from 'react-dom/client';
import './routes/index.scss'
import reportWebVitals from './reportWebVitals';
import 'lib-flexible';
import Routers from "./routes";
import './index.scss'
//pxtorem配置需要
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
