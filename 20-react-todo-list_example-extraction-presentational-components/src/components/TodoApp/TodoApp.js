import React, { useRef, Component, createRef, useReducer } from 'react';
import { createStore } from 'redux';
// import { createElement, useState} from 'react';
import PropTypes from 'prop-types';
import todoApp from '../../reducers/todoApp/todoApp';
import FilterLink from '../FilterLink/FilterLink';
import getVisibleTodos from '../../reducers/getVisibleTodos/getVisibleTodos'
import TodoList from '../TodoList/TodoList'

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
        <TodoList 
          todos={visibleTodos}
          onTodoClick={id => store.dispatch({type: 'TOGGLE_TODO', id})}/>
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
