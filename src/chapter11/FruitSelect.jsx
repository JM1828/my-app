import { useState } from 'react';

function FruitSelect() {
  const [value, setValue] = useState('grape');
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    // 이벤트가 발생한 엘리먼트(e.target)에서 선택된 옵션의 인덱스를 가져오는 부분
    const selectedIndex = e.target.selectedIndex;
    // e.target.options[selectedIndex]는 선택된 옵션에 접근하고,
    // .textContent를 통해 해당 옵션의 텍스트 값을 가져와서 setText 함수를 통해 설정
    setText(e.target.options[selectedIndex].textContent);
  };

  const handleSubmit = (e) => {
    alert('선택한 과일 : ' + text);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요 :
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default FruitSelect;
