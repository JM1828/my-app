import React from 'react';
import { useState, useEffect } from 'react';
import Pet from './Pet';
import AddPetForm from './AddPetForm';

function App1() {
  const [pets, setPets] = useState(() => {
    // 로컬 스토리지에서 "PetData"라는 키에 해당하는 값을 가져와서, 그 값이 존재하고 빈 배열이 아닌지를 확인
    if (
      localStorage.getItem('PetData') &&
      localStorage.getItem('PetData') != '[]'
    ) {
      // "PetData"라는 키에 해당하는 로컬 스토리지의 값을 가져와서 JSON 형식으로 파싱(해석)하는 작업을 수행
      // JSON.parse는 JSON 형식의 문자열을 JavaScript 객체로 변환하는 메서드
      return JSON.parse(localStorage.getItem('PetData'));
    } else {
      return [
        { name: '줄리아', species: 'cat', age: '5', id: 123456789 },
        { name: '라이언', species: 'dog', age: '3', id: 987654321 },
        { name: '플로피', species: 'rabbit', age: '2', id: 123123123 },
        { name: '길동', species: 'cat', age: '1', id: 456456456 },
        { name: '진도', species: 'dog', age: '6', id: 789789789 },
      ];
    }
  });

  // "PetData"라는 키에 현재 pets 상태를 JSON 형식으로 문자열화하여 저장
  // pets 상태가 변경될 때마다 useEffect가 실행되어 로컬 스토리지에 새로운 값을 저장
  useEffect(() => {
    localStorage.setItem('PetData', JSON.stringify(pets));
  }, [pets]);

  // 가져온 값이 존재하는 경우, JSON 형식으로 변환하여 해당 값을 상태(pets)로 설정
  // 컴포넌트가 마운트될 때 한 번 실행
  useEffect(() => {
    if (localStorage.getItem('PetData')) {
      setPets(JSON.parse(localStorage.getItem('PetData')));
    }
  }, []);

  return (
    <>
      <AddPetForm setPets={setPets} />
      <Pet setPets={setPets} pets={pets} />
    </>
  );
}

export default App1;
