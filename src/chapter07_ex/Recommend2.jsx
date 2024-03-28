import useCounter from './useCounter';
import React from 'react';

function LikeFeature1() {
  const [count, increaseCount, decreaseCount] = useCounter(0);

  return (
    <div>
      <button onClick={increaseCount}>추천하기</button>
      <button onClick={decreaseCount}>비추하기</button>
      <h2>이 페이지를 {count}번 추천하였습니다.</h2>
    </div>
  );
}

export default LikeFeature1;
