import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';

export default function Todo(props) {
  const {
    desc,
    completed,
    onClick,
  } = props;
  return (
    <li
      className="todo"
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      <button
        type="button"
        className="todo__btn"
        onClick={onClick}
      >
        Done
      </button>
      {desc}
    </li>
  );
}

Todo.propTypes = {
  desc: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
