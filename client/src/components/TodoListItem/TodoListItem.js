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

import { connect } from 'react-redux';
import { actionCreators } from '../../store';

const TodoListItem = ({ text, checked, onBtnClick, onToggled }) => {
  // console.log(onToggled);
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? (
          <MdCheckBox onClick={onToggled} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={onToggled} />
        )}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline onClick={onBtnClick} />
        <MdBorderColor />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    onToggled: () =>
      dispatch(actionCreators.toggle(ownProps.id, ownProps.checked)),
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
