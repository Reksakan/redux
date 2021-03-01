import React, { useRef, Component, createRef, useReducer } from 'react';
import FilterLink from '../FilterLInk/FilterLink.js';
import getVisibleTodos from '../../reducers/getVisibleTodos/getVisibleTodos';
import TodoList from '../TodoList/TodoList';


// const TodoApp = () => {
//   const inputRef = useRef();
//   const [state, dispatch] = useReducer(todoApp, {todos:[]})
//   const {todos} = state

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={
//         ()=>{
//           dispatch({
//             type: 'ADD_TODO',
//             id: nextTodoId++,
//             text: inputRef.current.value
//           })
//           inputRef.current.value = ''
//         }}>ADD_TODO</button>
//       <p>
//         {todos.map(todo => {
//           return <li 
//           key={todo.id}
//           onClick={
//             ()=>{
//               dispatch({
//                 type: 'TOGGLE_TODO',
//                 id: todo.id,
//               })
//             }}
//           style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
//           >{todo.text}</li>
//         })}
//       </p>
//     </div>
//   )
// }

let nextTodoId = 0;

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  render() {
    const { todos, store, visibilityFilter } = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <input ref={this.inputRef}/>
        <button onClick={
          ()=> {store.dispatch({
            type: 'ADD_TODO',
            text: this.inputRef.current.value,
            id: nextTodoId++
          })
        this.inputRef.current.value = ''
        }}>ADD TODO</button>
        <TodoList 
          todos={visibleTodos} 
          onTodoClick={id => store.dispatch({type: 'TOGGLE_TODO', id})}/>
        <p>Sort: 
          {' '}<FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
          {' '}<FilterLink filter='SHOW_COMPLETED' store={store}>Completed</FilterLink>
          {' '}<FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
        </p>
      </div>
    )
  }
}

export default TodoApp;