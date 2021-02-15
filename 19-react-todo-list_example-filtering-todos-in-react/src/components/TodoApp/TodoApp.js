import React, { useRef, Component, createRef, useReducer } from 'react';
import { createStore } from 'redux';
// import { createElement, useState} from 'react';
import PropTypes from 'prop-types';
import todoApp from '../../reducers/todoApp/todoApp';
import FilterLink from '../FilterLink/FilterLink';
import getVisibleTodos from '../../reducers/getVisibleTodos/getVisibleTodos'

let nextTodoId = 0;

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef();
  }
  render() {
    const { todos, store, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <input ref={this.inputRef}/>
        <button onClick={
          () => { 
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text: this.inputRef.current.value,
            });
            this.inputRef.current.value=''
          }
        }>ADD TODO</button>
        <ul>
          {visibleTodos.map(todo => {
            return <li key={todo.id}
              onClick={()=> {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                })
              }}
              style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
            >{todo.text}</li>
          })}
        </ul>
        <p>Show: 
          {' '}<FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
          {' '}<FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
          {' '}<FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>
        </p>

      </div>
    )
  }
}

export default TodoApp;
