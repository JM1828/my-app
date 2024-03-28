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
import CommentList from './chapter05/CommentList';
import Comment from './chapter05_ex/Comment';
import First from './chapter05_ex2/First';
import NotificationList from './chapter06/NotificetionList';
import Counter2 from './chapter07/Counter2';
import Accommodate from './chapter07_ex/Accommodate';
import LikeFeature from './chapter07_ex/Recommend1';
import LikeFeature1 from './chapter07_ex/Recommend2';
import Gugudan from './gugudan/Gugudan';
import Gugufunction from './gugudan/Gugufunction';

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
    <Gugudan />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 