import React, { useState, useRef, createContext } from 'react';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export const loginContext = createContext();
export const logoutContext = createContext();

const USER_ID = 'user';
const USER_PW = '1234';

function LoginPage3() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [result, setResult] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputId = useRef('');
  const inputPw = useRef('');

  const onCheckLogin = (e) => {
    e.preventDefault();

    if (id === '') {
      setResult('아이디를 입력해주세요.');
      inputId.current.focus();
      return false;
    }

    if (pw === '') {
      setResult('비밀번호를 입력해주세요.');
      inputPw.current.focus();
      return false;
    }

    if (id === USER_ID && pw === USER_PW) {
      onClickLogin();
    } else {
      onClickLogout();
      setResult('아이디 또는 비밀번호가 틀렸습니다.');
      // select() 메소드는 해당 입력란의 내용을 선택하여 사용자가 다른 내용을 입력할 수 있도록 도와줌
      inputPw.current.select();
    }
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangepw = (e) => {
    setPw(e.target.value);
  };

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <loginContext.Provider
        value={{
          inputId,
          inputPw,
          onCheckLogin,
          onChangeId,
          onChangepw,
          result,
        }}
      >
        {!isLoggedIn && <LoginForm />}
      </loginContext.Provider>
      <logoutContext.Provider value={{ id, onClickLogout }}>
        {isLoggedIn && <LogoutForm />}
      </logoutContext.Provider>
    </div>
  );
}

export default LoginPage3;
