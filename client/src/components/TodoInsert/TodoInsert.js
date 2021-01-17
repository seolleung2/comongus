import React, { useState, useCallback } from 'react';
import { GiStarStruck } from 'react-icons/gi';
import './TodoInsert.scss';

import { connect } from 'react-redux';
import { actionCreators } from '../../store';

// ! 뭔가 여기서 server 에 post 처리를 해줘야 할 것 같다.
const TodoInsert = (props) => {
  console.log(props);

  const [inputVal, setInputVal] = useState('');

  const handleChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addToDo(inputVal);

    setInputVal('');
  };
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToDo: (inputVal) => dispatch(actionCreators.addToDo(inputVal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInsert);

// https://react-icons.github.io/react-icons/icons?name=md
