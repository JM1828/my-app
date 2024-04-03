import { useContext } from 'react';
import { loginContext } from './LoginPage3';

const LoginForm = () => {
  const { inputId, inputPw, onCheckLogin, onChangeId, onChangepw, result } =
    useContext(loginContext);

  return (
    <>
      <form onSubmit={onCheckLogin}>
        <p>
          아이디 : <input ref={inputId} type="text" onChange={onChangeId} />
        </p>
        <p>
          비밀번호 :{' '}
          <input ref={inputPw} type="password" onChange={onChangepw} />
        </p>
        <button>로그인</button>
      </form>
      <p style={{ color: 'red' }}>{result}</p>
    </>
  );
};

export default LoginForm;
