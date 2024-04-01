import { useState } from 'react';

function SingUp() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('이름 : ' + name + ' 성별 : ' + gender);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br/>
      <label>
        성별 :
        <select value={gender} onChange={handleGenderChange}>
          <option value="man">남자</option>
          <option value="women">여자</option>
        </select>
      </label>
      <button type="sumbit">제출</button>
    </form>
  );
}

export default SingUp;
