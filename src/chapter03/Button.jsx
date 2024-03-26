import React from 'react';

/*
"props"는 "properties"의 줄임말로, 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 전달하는 데 사용
"children"은 React 컴포넌트의 태그 안에 포함된 내용을 가리키며, 이를 통해 동적인 컴포넌트 구성이 가능해짐
*/

// Button이라는 함수형 컴포넌트를 정의
// 이 컴포넌트는 props를 인자로 받아와서 버튼 요소를 렌더링하고 있음
function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}    
            </b>
            </button>
    );
}

// ConfirmDialog라는 함수형 컴포넌트를 정의
// 이 컴포넌트는 props를 인자로 받아와서 div 안에 내용을 렌더링하고 있고 Button 컴포넌트를 포함하고 있음
function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color='green'>확인</Button>
        </div>
    );
}

// ConfirmDialog 함수를 모듈의 기본 내보내기(default export)로 정의하는 것
export default ConfirmDialog;