import { useContext } from 'react';
import { TodoDispatchContext } from './Diary';

function DiaryItem({ id, author, emotion, content, created_date }) {
  const { onDelete } = useContext(TodoDispatchContext);

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="DiaryItem">
        <div className="info">
          <span>
            작 성 자 : {author} | 감 정 점 수 : {emotion}
          </span>
          <br />
          <span className="date">
            시 간(ms) : {new Date(created_date).toLocaleString()}
          </span>
          <div className="content">내 용 : {content}</div>
          <button onClick={onClickDeleteButton}>삭제</button>
        </div>
      </div>
    </>
  );
}

export default DiaryItem;
