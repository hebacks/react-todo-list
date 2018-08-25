import todo from './todo';
import { ADD_TODO, TOGGLE_COMPLETION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case TOGGLE_COMPLETION:
      return state.map(item => todo(item, action));
    default:
      return state;
  }
}
