import React, { useState, useCallback } from 'react';
import { GiStarStruck } from 'react-icons/gi';
import './TodoInsert.scss';

import { connect } from 'react-redux';

// ! 뭔가 여기서 server 에 post 처리를 해줘야 할 것 같다.
const TodoInsert = (props) => {
  console.log(props);

  const [inputVal, setInputVal] = useState('');

  const handleChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      // handleInsert(inputVal); // props 로 불러온 handleInsert 실행.
      setInputVal(''); // input value 값 초기화

      e.preventDefault();
    },
    [inputVal],
  );
  return (
    <form className="TodoInsert" onSubmit={handleSubmit}>
      <input
        value={inputVal}
        onChange={handleChange}
        placeholder="오늘의 할일을 기록해요, 미래의 개발자님🍊"
      />
      <button type="submit">
        <GiStarStruck />
      </button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(TodoInsert);

// https://react-icons.github.io/react-icons/icons?name=md
