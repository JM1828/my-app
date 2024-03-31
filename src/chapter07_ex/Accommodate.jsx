import React, { useState, useEffect } from 'react';
// useCounter는 보통 커스텀 훅(custom hook)으로 사용되며,
// 일반적으로 상태를 관리하거나 특정한 기능을 추상화하여 재사용 가능한 로직을 만들 때 활용
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate() {
  // isFull은 상태값을 나타내며, 초기값으로 false를 가지고 있음, setIsFull은 isFull 상태를 갱신하는 함수
  const [isFull, setIsFull] = useState(false);
  // count는 상태값을 나타내며, 초기값으로 0을 가지고 있음
  // increaseCount는 count 상태를 증가시키는 함수, decreaseCount는 count 상태를 감소시키는 함수
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 함수형 컴포넌트가 렌더링될 때마다 useEffect 안의 코드가 실행
  // 즉, isFull 상태가 변경될 때마다 해당 useEffect가 실행
  useEffect(() => {
    console.log('useEffect() 호출됨!!!');
    console.log(`isFull: ${isFull}`);
  });

  // 두 번째 매개변수로 [count]를 전달함으로써 useEffect가 count가 변경될 때만 실행되도록 설정
  useEffect(() => {
    // count 값이 MAX_CAPACITY 이상일 때 isFull 상태를 변경
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      {/* JSX 문법을 사용하여 count 변수를 템플릿 문자열을 통해 화면에 출력 */}
      <p>{`총 ${count}명 수용했습니다.`}</p>
      {/* onClick 속성은 해당 버튼을 클릭했을 때 실행되는 함수를 지정 */}
      {/* increaseCount 함수가 할당되어 있으므로, 해당 버튼을 클릭할 때 count를 증가 */}
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      {/* decreaseCount 함수가 할당되어 있으므로, 해당 버튼을 클릭할 때 count를 감소 */}
      <button onClick={decreaseCount}>퇴장</button>
      {/* isFull이 true이면 해당 p 요소를 렌더링하고, false이면 렌더링하지 않는 조건부 렌더링을 수행 */}
      {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
