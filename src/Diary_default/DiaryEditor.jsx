import { useState, useContext } from 'react';
import { TodoDispatchContext } from './Diary';

// uuid 사용
// 1. 설치 - npm install uuid
// 2. 선언 - imprort { v4 uuidv4 } from "uuid"
// 3. 사용 - uuiv4()
function DiaryEditor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [emotion, setEmotion] = useState('1');

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(author, content, emotion);
    setAuthor('');
    setContent('');
    setEmotion('1');
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeEmotion = (e) => {
    setEmotion(e.target.value);
  };

  return (
    <div>
      <h3>오늘의 일기</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={author}
          onChange={onChangeAuthor}
          placeholder="작성자"
        />
        <br />
        <textarea
          placeholder="내용"
          value={content}
          onChange={onChangeContent}
        />
        <br />
        <select value={emotion} onChange={onChangeEmotion}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button type="submit">저장하기</button>
      </form>
    </div>
  );
}

export default DiaryEditor;
