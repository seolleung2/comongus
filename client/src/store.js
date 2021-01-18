import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const TOGGLE = 'TOGGLE';

let idCounter = 1;

const addToDo = (text) => {
  return {
    id: idCounter++,
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const toggle = (id, checked) => {
  return {
    type: TOGGLE,
    id,
    checked,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: action.id, text: action.text, checked: false }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    case TOGGLE:
      // const todo = state.find((toDo) => toDo.id === action.id);
      // ! 기존 state 를 받아와야 되나 보다.....
      // return [
      //   { id: todo.id, text: todo.text, checked: !todo.checked },
      // ];
      return state.map((todo) =>
        todo.id === action.id
          ? { id: todo.id, text: todo.text, checked: !todo.checked }
          : todo,
      );
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  toggle,
};

export default store;
