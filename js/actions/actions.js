import { ADD_TODO, TOGGLE_COMPLETION, CHANGE_FILTER } from './types';


// action creators
export const addTodo = ({ id, desc, completed = false }) => (
  {
    type: ADD_TODO,
    payload: {
      id,
      desc,
      completed,
    },
  }
);

export const toggleCompletion = id => (
  {
    type: TOGGLE_COMPLETION,
    payload: id,
  }
);

export const changeFilter = filterDescription => (
  {
    type: CHANGE_FILTER,
    payload: filterDescription,
  }
);
