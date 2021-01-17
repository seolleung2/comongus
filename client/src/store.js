import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const CHECK = 'CHECK';

const addToDo = (text) => {
  return {
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

const isChecked = (id, checked) => {
  return {
    type: CHECK,
    id,
    checked,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: Date.now(), text: action.text, checked: false }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    case CHECK:
      let targetEl = state.find((toDo) => toDo.id === action.id);
      let idx = state.findIndex((el) => el.id === action.id);
      return [
        state,
        {
          ...targetEl,
          checked: !action.checked,
        },
      ];
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  isChecked,
};

export default store;
