import { useState } from 'react';

function Reservation() {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (e) => {
    alert(
      `아침식사 여부 : ${
        haveBreakfast ? '식사합시다' : '식사안해요!!'
      }, 방문객 수 : ${numberOfGuest}`
    );
    e.preventDefault();
  };

  const onChange1 = (e) => {
    setHaveBreakfast(e.target.checked);
  };

  const onChange2 = (e) => {
    setNumberOfGuest(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아침식사 여부 :
        <input type="checkbox" checked={haveBreakfast} onChange={onChange1} />
      </label>
      <br />
      <label>
        방문객 수:
        <input type="text" checked={numberOfGuest} onChange={onChange2} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default Reservation;
