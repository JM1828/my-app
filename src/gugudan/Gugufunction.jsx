import { useState } from 'react';

const Gugufunction = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);

  return (
    <div>
      구구단함수
    </div>
  )
}

export default Gugufunction