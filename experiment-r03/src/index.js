import * as serviceWorker from './serviceWorker';
import './index.css';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import todoApp from './reducers/todoApp/todoApp';
import TodoApp from './components/TodoApp/TodoApp';


// const render = () => {
//   ReactDOM.render(
//     <TodoApp />,
//     document.getElementById('root')
//   )
// }


const store = createStore(todoApp);

const render = () => {
  const { todos, visibilityFilter } = store.getState();
  ReactDOM.render(
    <TodoApp store={store} todos={todos} visibilityFilter={visibilityFilter}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();


serviceWorker.unregister(); 
 