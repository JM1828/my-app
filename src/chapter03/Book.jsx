import React from 'react';

// 이 코드를 사용하려면, 해당 컴포넌트를 다른 곳에서 import하여 사용
// 앞글자가 대문자로 시작하면 컴포넌트
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h1>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h1>
    </div>
  );
}

export default Book;
