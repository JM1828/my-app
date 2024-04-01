import React from 'react';
import { useState } from 'react';
import Pet from './Pet';
import AddPetForm from './AddPetForm';

function App1() {
  const [pets, setPets] = useState([
    { name: '줄리아', species: 'cat', age: '5', id: 123456789 },
    { name: '라이언', species: 'dog', age: '3', id: 987654321 },
    { name: '플로피', species: 'rabbit', age: '2', id: 123123123 },
    { name: '길동', species: 'cat', age: '1', id: 456456456 },
    { name: '진도', species: 'dog', age: '6', id: 789789789 },
  ]);

  return (
    <>
      <AddPetForm setPets={setPets} />
      <ul>
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

export default App1;
