import React, { useState } from 'react';

function ConfirmButton() {
    // useState 훅을 사용하여 isConfirmed라는 상태 변수를 선언하고, 해당 상태를 변경할 수 있는 setIsConfirmed 함수를 받아옴
    // 초기값으로 false를 설정하여 isConfirmed 상태를 초기화
    const [isConfirmed, setIsConfirmed] = useState(false);

    // handleConfirm 함수는 이전의 isConfirmed 상태를 반전시킴으로써 사용자의 확인 상태를 토글
    // 이전의 isConfirmed 값을 받아와서 반전시킨 값을 새로운 상태로 설정하는 함수
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }

    return (
        // onClick 이벤트에 handleConfirm 함수를 연결하여 버튼이 클릭되었을 때 handleConfirm 함수가 호출됨
        // isConfirmed 상태가 true일 때 버튼이 비활성화되도록 disabled 속성을 설정
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {/* isConfirmed가 true이면 "확인됨"이 표시되고, 그렇지 않으면 "확인하기"가 표시 */}
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
        );
}

export default ConfirmButton;