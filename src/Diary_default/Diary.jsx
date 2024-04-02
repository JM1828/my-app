import './Diary.css';
import { useState, useReducer, createContext, useMemo } from 'react';
import DiaryList from './DiaryList';
import DiaryEditor from './DiaryEditor';

// createContext 함수를 사용하여 TodoStateContext라는 새로운 context 객체를 생성

const mockData = [
  {
    id: 1,
    author: 'hyun',
    content: '첫번째',
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: 'jeong',
    content: '두번째',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: 'react',
    content: '3번째',
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.dates, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function Diary() {
  const [data, dispatch] = useReducer(reducer, mockData);

  const onCreate = (author, content, emotion) => {
    dispatch({
      type: 'CREATE',
      dates: {
        id: new Date(),
        author: author,
        content: content,
        emotion: emotion,
        created_date: new Date().getTime(),
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  });

  return (
    <div className="App">
      <TodoStateContext.Provider value={data}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <DiaryEditor />
          <DiaryList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default Diary;
