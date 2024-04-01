import React, { useState } from 'react';

function AddPetForm(props) {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // pets 배열에 이름, 종, 나이, 그리고 새로운 id를 가진 동물 객체를 추가하여 새로운 배열을 만드는 역할
    // prev.concat은 기존의 배열에 새로운 요소를 추가하여 새로운 배열을 반환하는 JavaScript 배열 메소드
    props.setPets((prev) =>
      prev.concat({ name: name, species: species, age: age, id: new Date() })
    );
    setName('');
    setSpecies('');
    setAge('');
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPetChange = (e) => {
    setSpecies(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>새 PET 을 추가하기</legend>
          <input value={name} onChange={onNameChange} placeholder="이름" />
          <br />
          <input value={species} onChange={onPetChange} placeholder="종류" />
          <br />
          <input value={age} onChange={onAgeChange} placeholder="나이" />
          <button>펫 추가</button>
        </fieldset>
      </form>
    </>
  );
}

export default AddPetForm;
