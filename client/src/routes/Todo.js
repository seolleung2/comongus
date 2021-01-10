import React from 'react';
import AppLayout from '../components/AppLayout';
import TodoTemplate from '../components/TodoTemplate/TodoTemplate';
import TodoInsert from '../components/TodoInsert/TodoInsert';
import TodoList from '../components/TodoList/TodoList';
const Todo = () => {
  return (
    <>
      <AppLayout>
        <TodoTemplate>
          <TodoInsert />
          <TodoList />
        </TodoTemplate>
      </AppLayout>
    </>
  );
};

export default Todo;
