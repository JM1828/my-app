import React from 'react';

function Pet(props) {
  function handleDelete() {
    props.setPets((prev) => prev.filter((pet) => pet.id !== props.id));
  }

  return (
    <li>
      {props.name}은 {props.species}이고 {props.age}살 이다.
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default Pet;
