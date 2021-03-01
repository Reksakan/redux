import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import todoApp from './reducers/todoApp/todoApp';
import TodoApp from './components/TodoApp/TodoApp';
import visibilityFilter from './reducers/visibilityFilter/visibilityFilter';


// const store = createStore(todoApp);

// const render = () => {
//   const { todos, visibilityFilter } = store.getState()

//   ReactDOM.render(
//     <TodoApp todos={todos} store={store} visibilityFilter={visibilityFilter}/>,
//     document.getElementById('root')
//   );
// }

// store.subscribe(render);
// render();

const render = () => {
  ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
  );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
