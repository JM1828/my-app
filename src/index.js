import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter03/Library';
import Hello from './chapter03/Hello';
import Hello2 from './chapter03/Hello2';
import ConfirmDialog from './chapter03/Button';
import Clock from './chapter04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval 함수는 첫 번째 인자로 전달된 함수를 두 번째 인자로 전달된 시간 간격마다 반복적으로 실행
setInterval(() => {
  root.render(
    <React.StrictMode>
    <Clock />
  </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
