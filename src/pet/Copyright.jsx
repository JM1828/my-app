import React, { useState } from 'react';
import Pet from './Pet';

function Copyright({ pets }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [species, setSpecies] = useState('');
  const [pets1, setPets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets((prevPets) => [
      ...prevPets,
      { name: name, species: species, age: age, id: new Date() },
    ]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePetChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>새 PET 을 추가하기</legend>
          <label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="이름"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={species}
              onChange={handlePetChange}
              placeholder="종류"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={age}
              onChange={handleAgeChange}
              placeholder="나이"
            />
          </label>
          <button type="sumbit">펫 추가</button>
        </fieldset>
      </form>
      <ul>
        {pets1.map((pet, id) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            key={id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            key={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}
      </ul>
    </>
  );
}

export default Copyright;
