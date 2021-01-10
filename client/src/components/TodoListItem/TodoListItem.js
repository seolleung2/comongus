import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdBorderColor,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">To-do</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
        <MdBorderColor />
      </div>
    </div>
  );
};

export default TodoListItem;
