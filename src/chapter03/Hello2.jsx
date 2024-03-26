import React from 'react';

// Hello2 컴포넌트는 element를 반환
function Hello2() {
  return element;
}

// 사용자 객체의 firstName과 lastName을 조합하여 전체 이름을 반환하는 함수
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

// 해당 객체에는 firstName과 lastName이라는 두 개의 속성이 포함되어 있음
const user = {
  firstName: 'Inje',
  lastName: 'Lee',
};

// JSX를 사용하여 화면에 "Hello, " 다음에 formatName 함수를 사용하여 user 객체의 이름을 출력하는 h1 엘리먼트를 정의
const element = <h1>Hello, {formatName(user)}</h1>;

// Hello2 함수를 모듈의 기본 내보내기(default export)로 정의하는 것
// 이는 다른 파일에서 해당 모듈을 가져올 때, Hello2 함수가 기본 내보내기로 사용된다는 것을 의미
export default Hello2;
