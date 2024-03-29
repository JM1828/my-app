import { useState, useRef, useEffect } from 'react';

// useState 훅을 사용하여 word, value, result, score와 각각의 상태를 업데이트하기 위한 함수를 정의
const WordRelay = () => {
  const [word, setWord] = useState('첫단어');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  // useRef 훅을 사용하여 input 요소에 대한 참조를 생성
  const inputEl = useRef(null);
  const [score, setScore] = useState(0);

  // useEffect 훅은 함수 컴포넌트 내에서 부수 효과를 수행할 수 있도록 해줌
  // 두 번째 매개변수로 전달된 배열은 의존성 배열로, 해당 배열에 포함된 값이 변경될 때에만 useEffect 콜백 함수가 실행
  useEffect(() => {
    document.title = `${score} 점`;
  }, [score]);

  // submit 함수를 정의, 이벤트 객체 e를 매개변수로 받음
  const submit = (e) => {
    // 일반적으로 form 요소에서 submit 이벤트가 발생했을 때 페이지가 다시 로드되는 동작을 막음
    e.preventDefault();
    // word의 마지막 글자와 value의 첫 글자를 비교하여 끝말잇기 규칙을 확인
    if (word[word.length - 1] === value[0]) {
      // value의 길이가 2보다 작은지 확인
      if (value.length < 2) {
        setResult('단어의 길이는 2글자이상이어야 합니다');
      } else {
        // 입력된 단어를 다음 단어로 설정
        setWord(value);
        setResult('딩동댕!');
        setValue(''); // 입력값을 초기화
        // 기존의 점수에 1을 더한 값을 새로운 점수로 설정
        setScore((prev) => prev + 1);
      }
    } else {
      setResult('땡!'); // 결과 표시
      setValue('');
      // 이전의 점수를 업데이트, 콜백 함수를 사용하여 이전의 점수를 조정
      // 이전의 점수에서 1을 뺀 값을 prev에 할당하고, 이후 조건에 따라 점수를 업데이트
      setScore((prev) => {
        // 이전의 점수에서 1을 뺀 값을 prev에 할당
        prev = prev - 1;
        // prev가 0보다 큰지 확인하여 조건에 따라 점수를 업데이트
        if (prev > 0) {
            // prev가 0보다 크면 prev 값을 새로운 점수로 설정
          setScore(prev);
        } else {
            // prev가 0 이하일 경우 점수를 0으로 설정
          setScore(0);
        }
      });
    }
    // 특정 DOM 요소에 자동으로 포커스를 설정하는 용도
    inputEl.current.focus();
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={submit}>
        <input
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>
        {result} 점수 : {score}
      </div>
    </>
  );
};

export default WordRelay;
