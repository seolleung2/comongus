import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdBorderColor,
} from 'react-icons/md';
import './TodoListItem.scss';

import cn from 'classnames';
// !classnames 를 사용한 방식은 새삼 신박하다.
const TodoListItem = ({ todo, handleRemove, handleToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => handleToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={() => handleRemove(id)} />
        <MdBorderColor />
      </div>
    </div>
  );
};

export default TodoListItem;
