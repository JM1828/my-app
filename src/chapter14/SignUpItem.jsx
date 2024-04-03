import { useContext } from 'react';
import { signUpContext } from './SingUp';

function SignUpItem() {
  const { name, gender, handleNameChange, handleGenderChange, handleSubmit } =
    useContext(signUpContext);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
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

export default SignUpItem;
