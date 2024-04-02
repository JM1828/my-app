import DiaryItem from './DiaryItem';
import { useContext } from 'react';
import { TodoStateContext } from './Diary';

function DiaryList() {
  const data = useContext(TodoStateContext);

  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      <div>
        {data.map((datas) => {
          return <DiaryItem key={datas.id} {...datas} />;
        })}
      </div>
    </div>
  );
}

export default DiaryList;
