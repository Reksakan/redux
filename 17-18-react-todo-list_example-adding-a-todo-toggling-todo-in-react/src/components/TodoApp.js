import React, { useRef, Component, createRef, useReducer } from 'react';
import { createStore } from 'redux';
// import { createElement, useState} from 'react';
import PropTypes from 'prop-types';
import todoApp from '../reducers/todoApp/todoApp';

let nextTodoId = 0;

// const TodoApp = () => {
//   const inputRef = useRef(null)
//   const [state, dispatch] = useReducer(todoApp, {todos: []})
//   const {todos} = state
//   console.log(state)

//   return (
//     <div>
//       <input ref={inputRef}/>
//       <button onClick={
//         () => { 
//           dispatch({
//             type: 'ADD_TODO',
//             id: nextTodoId++,
//             text: inputRef.current.value,
//           });
//           inputRef.current.value=''
//         }
//       }>ADD TODO</button>
//       <ul>
//         {todos.map(todo => {
//           return <li key={todo.id}>{todo.text}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef();
  }
  render() {
    const { todos, store } = this.props

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
          {todos.map(todo => {
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
      </div>
    )
  }
}

export default TodoApp;
