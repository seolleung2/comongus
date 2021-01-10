import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, handleRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodoList;
