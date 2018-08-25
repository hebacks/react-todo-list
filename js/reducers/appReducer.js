import { combineReducers } from 'redux';
import todoList from './todoList';
import filter from './filter';

const appReducer = combineReducers({
  todoList,
  filter,
});

export default appReducer;
