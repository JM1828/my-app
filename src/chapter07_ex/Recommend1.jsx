import { useState } from 'react';

function LikeFeature() {
    // likeCount는 상태값을 나타내며, 초기값으로 0을 가지고 있음
    // setLikeCount는 likeCount 상태를 갱신하는 함수
    const [likeCount, setLikeCount] = useState(0);

    // 이전의 count를 가져와 1을 더한 값을 새로운 상태값으로 설정하여 likeCount를 증가
    function increaseLike() {
        setLikeCount(count => count + 1);
    }

    // 이전의 count를 가져와 count - 1이 0보다 작으면 0을, 그렇지 않으면 count - 1을 새로운 상태값으로 설정하여 likeCount를 감소
    function decreaseLike() {
        setLikeCount(count => (count - 1 < 0) ? 0 : count - 1);
    }

    return (
        <div>
            <button onClick={increaseLike}>추천하기</button>
            <button onClick={decreaseLike}>비추하기</button>
            <h2>이 페이지를 {likeCount}번 추천하였습니다.</h2>
        </div>
    );
}

export default LikeFeature;