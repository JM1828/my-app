import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '홍길동',
    comment: '안녕하세요??',
  },
  {
    name: '유재석',
    comment: '리액트 재밌어요~',
  },
  {
    name: '손흥민',
    comment: '저도 리액트 배워보고 싶네요!!',
  },
];

// map() 메서드를 사용하여 comments 배열의 각 요소에 대해 화살표 함수를 실행하고, 그 결과로 새로운 Comment 컴포넌트를 생성
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })};
    </div>
  );
}

export default CommentList;
