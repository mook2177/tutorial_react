import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyReactApp from './App'; // 끝에 .js가 생략된 것. App.js x
import reportWebVitals from './reportWebVitals';

/** 앱의 진입접 역할을 하는 곳 */
ReactDOM.render(
  <React.StrictMode>
    <MyReactApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
