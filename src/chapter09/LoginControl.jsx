import { useState } from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
    return (<button onClick={props.onClick}>로그인</button>);
}

function LogoutButton(props) {
    return (<button onClick={props.onClick}>로그아웃</button>);
}

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {
                isLoggedIn 
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    );
}

export default LoginControl;