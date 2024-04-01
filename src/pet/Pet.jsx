import React from 'react';

function Pet(props) {
  function onDelete(id) {
    // 이전 상태 배열에서 특정 id에 해당하는 반려동물을 필터링하여 제거한 후, 새로운 상태 배열을 설정
    props.setPets((prev) => prev.filter((pet) => pet.id !== id));
  }

  return (
    <ul>
      {props.pets.map((pet) => (
        <li key={pet.id}>
          {pet.name}은 {pet.species}이고 {pet.age}살 이다.
          <button onClick={() => onDelete(pet.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default Pet;
