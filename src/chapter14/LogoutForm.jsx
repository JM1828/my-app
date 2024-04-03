import { useContext } from 'react';
import { logoutContext } from './LoginPage3';

const LogoutForm = () => {
  const { id, onClickLogout } = useContext(logoutContext);

  return (
    <>
      <div style={{ padding: 16 }}>{id} 님 어서오세요!!!</div>
      <div>
        <button onClick={onClickLogout}>로그아웃</button>
      </div>
    </>
  );
};

export default LogoutForm;
