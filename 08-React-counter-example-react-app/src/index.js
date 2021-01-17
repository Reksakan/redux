import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import Count from './components/Count/Count';
import counter from './components/counter/counter';

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Count 
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({ type: 'DECREMENT'})}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// store.subscribe(App);
// App();