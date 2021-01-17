import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

import { connect } from 'react-redux';

const TodoList = ({ toDos }) => {
  return (
    <div className="TodoList">
      {toDos.map((toDo) => (
        <TodoListItem {...toDo} key={toDo.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(TodoList);
