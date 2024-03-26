import React from 'react';
import Book from './Book'; // Book 컴포넌트를 Libaray 컴포넌트에서 import하여 사용

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 자바" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
