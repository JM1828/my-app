import React, { useState } from 'react';
import Login from './Login';

const USER_ID = "user";
const USER_PW = "1234";

function LoginPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onCheckLogin = () => {
        // props로 전달받은 id, password가 맞으면 로그인 처리
        if (props.id === USER_ID && props.pw === USER_PW) {
            onClickLogin();
        } else {
            // 틀리면 로그아웃 처리
            onClickLogout();
        }
    }

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
        <p><apan>아이디 : {props.id}</apan></p>
        <p><apan>비밀번호 : {props.pw}</apan></p>
      <Login
        isLoggedIn={isLoggedIn}
        onCheckLogin={onCheckLogin}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>함께하는 리액트 공부</div>
    </div>
  );
}

export default LoginPage;
