import React from 'react';
import AppLayout from '../components/AppLayout';
import TodoTemplate from '../components/TodoTemplate/TodoTemplate';
import TodoInsert from '../components/TodoInsert/TodoInsert';
const Todo = () => {
  return (
    <>
      <AppLayout>
        <TodoTemplate>
          <TodoInsert />
        </TodoTemplate>
      </AppLayout>
    </>
  );
};

export default Todo;
