import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoList from '../TodoList/TodoList.jsx';
import Filter from '../Filter/Filter.jsx';
import { addTodo } from '../../actions/actions';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoCounter: 0,
    };
  }

  saveTodo() {
    if (this.input.value) {
      this.props.addTodo({
        id: this.state.todoCounter,
        desc: this.input.value,
        completed: false,
      });
      this.input.value = '';
      this.setState({
        todoCounter: this.state.todoCounter + 1,
      });
    }
  }

  render() {
    return (
      <div className="todo-app">
        <input ref={(node) => {
          this.input = node;
        }}
        />
        <button
          type="button"
          className="add-todo-btn"
          onClick={() => this.saveTodo()}
        >
          Add Todo
        </button>
        <div className="todo-app__filters">
          <span className="todo-app__filter-label">Show:</span>
          <Filter ownFilter="SHOW_ALL"> All </Filter>
          <Filter ownFilter="SHOW_ACTIVE"> Active </Filter>
          <Filter ownFilter="SHOW_COMPLETED"> Completed </Filter>
        </div>
        <TodoList />
      </div>
    );
  }
}


App.propTypes = {
  addTodo: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(null, mapDispatchToProps)(App);
