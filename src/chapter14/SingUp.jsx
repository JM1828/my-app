import  React,{ useState, createContext } from 'react';
import SignUpItem from './SignUpItem';

export const signUpContext = createContext();

function SingUp() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('man');

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
    <signUpContext.Provider
      value={{ name, gender, handleNameChange, handleGenderChange, handleSubmit }}
    >
      <SignUpItem />
    </signUpContext.Provider>
  );
}

export default SingUp;
