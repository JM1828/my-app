import React, { useState, useRef } from 'react';

const USER_ID = 'user';
const USER_PW = '1234';

function LoginPage2() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [result, setResult] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputID = useRef('');
  const inputPW = useRef('');

  const onCheckLogin = (e) => {
    e.preventDefault();

    if (id === '') {
      setResult('아이디를 입력해주세요.');
      inputID.current.focus();
      return false;
    }

    if (pw === '') {
      setResult('비밀번호를 입력해주세요.');
      inputPW.current.focus();
      return false;
    }

    if (id === USER_ID && pw === USER_PW) {
      onClickLogin();
    } else {
      onClickLogout();
      setResult('아이디 또는 비밀번호가 틀렸습니다.');
      // select() 메소드는 해당 입력란의 내용을 선택하여 사용자가 다른 내용을 입력할 수 있도록 도와줌
      inputPW.current.select();
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
  const onClickLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>{USER_ID} 님 반갑습니다!</p>
          <button onClick={onClickLogout}>로그아웃</button>
        </div>
      ) : (
        <form onSubmit={onCheckLogin}>
          <p>
            아이디 : {''}
            <input type="text" ref={inputID} value={id} onChange={onChangeId} />
          </p>
          <p>
            비밀번호 : {''}
            <input
              type="password"
              ref={inputPW}
              value={pw}
              onChange={onChangepw}
            />
          </p>
          <button type="submit">로그인</button>
          <div>{result}</div>
        </form>
      )}
    </div>
  );
}

export default LoginPage2;
