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
import WordRelay from './wordRelay/WordRelay';
import ConfirmButton from './chapter08/ConfirmButton';
import MailBox from './chapter09/MailBox';
import Counter from './chapter09/MailBox';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LoginPage from './chapter09_ex/LoginPage';
import LoginPage2 from './chapter09_ex/LoginPage2';
import NumberList from './chapter10/NumberList';
import AttendanceBook from './chapter10_ex/AttendanceBook';
import FruitSelect from './chapter11/FruitSelect';
import Reservation from './chapter11/Reservation';
import SingUp1 from './chapter11_ex/SingUp';
import App1 from './pet/App1';
import Diary from './Diary_default/Diary';
import Calculator from './chapter12/Calculator';
import ProfileCard from './chapter13/ProfileCard';
import MainContent from './chapter14/MainContent';
import DarkOrLight from './chapter14/DarkOrLight';
import SingUp from './chapter14/SingUp';
import LoginPage3 from './chapter14/LoginPage3';
import StyledPage from './chapter15/StyledPage';
import Dark from './chapter15/Dark';
import Blocks from './chapter15_ex/Blocks';
import WeatherApp from './axios/WeatherApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
