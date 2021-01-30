import React from 'react';
import { Component } from 'react';
// import { createElement, useState} from 'react';
import PropTypes from 'prop-types';

let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {this.input = node}}/>
        <button onClick={()=> 
          store.dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: this.input.value
          })}>ADD TODO</button>
        <ul>
          {this.props.todos.map(todo => {
            <li key={todo.id}>{todo.text}</li>
          })}
        </ul>
      </div>
    )
  }
}

TodoApp.propTypes = {
  type: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired,
  id: PropTypes.func.isRequired
}

export default TodoApp;