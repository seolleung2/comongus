import React from 'react';
import { GiStarStruck } from 'react-icons/gi';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Type Your Plan A For Today 💖" />
      <button type="submit">
        <GiStarStruck />
      </button>
    </form>
  );
};

export default TodoInsert;

// https://react-icons.github.io/react-icons/icons?name=md
