import React, { useState } from 'react';

// "useCounter"라는 이름의 커스텀 훅을 정의
function useCounter(initialValue) {
  // 초기값을 전달받아 "count" 상태와 "count"를 업데이트하는 "setCount" 함수를 반환
  const [count, setCount] = useState(initialValue);

  // "increaseCount" 함수는 "setCount"를 사용하여 "count"를 1 증가시키는 함수
  const increaseCount = () => setCount((count) => count + 1);
  // "decreaseCount" 함수는 "setCount"를 사용하여 "count"를 1 감소시키는데, 단 "count"가 0 미만이 되지 않도록 보장
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

  // "useCounter" 커스텀 훅이 반환하는 값
  // 배열 형태로 "count", "increaseCount", "decreaseCount"를 순서대로 포함하고 있음
  return [count, increaseCount, decreaseCount];
}

export default useCounter;
