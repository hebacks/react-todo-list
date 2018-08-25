import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo.jsx';
import { toggleCompletion } from '../../actions/actions';
import './TodoList.scss';


function TodoList(props) {
  function filterTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
  const {
    filter,
    todoList,
    toggleCompletion,
  } = props;

  const filteredTodos = filterTodos(todoList, filter);

  return (
    <div className="todo-list__wrapper">
      <h1 className="todo-list__title">My todos</h1>
      <ul className="todo-list">
        { filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            onClick={() => toggleCompletion(todo.id)}
            completed={todo.completed}
            desc={todo.desc}
          />
        )) }
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  filter: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  todoList: state.todoList,
});

export default connect(mapStateToProps, { toggleCompletion })(TodoList);
