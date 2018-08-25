import cloneDeep from 'lodash.clonedeep';
import { ADD_TODO, TOGGLE_COMPLETION } from '../actions/types';

// reducer composition pattern - to-do item reducer is called by a to-do list reducer
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return action.payload;
    case TOGGLE_COMPLETION:
      if (state.id === action.payload) {
        const newState = cloneDeep(state);
        newState.completed = !state.completed;
        return newState;
      }
      return state;
    default:
      return state;
  }
};

export default todo;
