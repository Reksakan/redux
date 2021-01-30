import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import todoApp from './reducers/todoApp/todoApp';
import TodoApp from './components/TodoApp';

const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <TodoApp todos={this.props.value.todos}/>
    </React.StrictMode>,
    document.getElementsByName('root')
  );
}

store.subscribe(render);
// render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
