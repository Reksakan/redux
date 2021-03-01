import React, { useReducer } from 'react';
import todoApp from '../../reducers/todoApp/todoApp';
import getVisibleTodos from '../../reducers/getVisibleTodos/getVisibleTodos'
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import Footer from '../Footer/Footer';

let nextTodoId = 0;

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoApp, {todos: [], visibilityFilter: 'SHOW_ALL'})
  const {todos, visibilityFilter} = state
  const visibleTodos = getVisibleTodos(todos, visibilityFilter)
  // console.log('visibleTodos: ', visibleTodos)
  console.log('visibilityFilter: ', visibilityFilter)
  console.log('todos: ', todos)
  return (
    <div>
      <AddTodo onAddClick={
        text => { 
          dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text
          });
        }} />
      <TodoList 
        todos={visibleTodos}
        onTodoClick={id => dispatch({type: 'TOGGLE_TODO', id})}/>
      <Footer 
        visibilityFilter={visibilityFilter}
        onFilterClick={filter => 
          dispatch({type: 'SET_VISIBILITY_FILTER', filter})}
        />
    </div>
  )
}


    

export default TodoApp;

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