import React, { useState, useRef, useCallback } from 'react';
import AppLayout from '../components/AppLayout';
import TodoTemplate from '../components/TodoTemplate/TodoTemplate';
import TodoInsert from '../components/TodoInsert/TodoInsert';
import TodoList from '../components/TodoList/TodoList';
const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리덕스인가 닥스훈트인가 학습하기🖍',
      checked: true,
    },
    {
      id: 2,
      text: '침대에 걸터 앉아 제주산 귤 까먹기🍊',
      checked: true,
    },
    {
      id: 3,
      text: 'TO-DO App 만들어보기🚀',
      checked: false,
    },
  ]);
  // Id 는 고유값으로 사용된다. useRef 를 사용해서 변수에 담았다.
  const nextId = useRef(4);

  const handleInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <>
      <AppLayout>
        <TodoTemplate>
          <TodoInsert handleInsert={handleInsert} />
          <TodoList todos={todos} />
        </TodoTemplate>
      </AppLayout>
    </>
  );
};

export default Todo;
