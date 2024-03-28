import React, {useState, useEffect} from 'react';

function Counter2() {
    // var count = 0;
    const [count, setCount] = useState(0);

    // count 상태가 변경될 때마다 document의 title을 업데이트하는 작업을 수행
    // 따라서 화면에 렌더링된 횟수에 따라 브라우저 탭의 제목이 변경됨
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

export default Counter2;