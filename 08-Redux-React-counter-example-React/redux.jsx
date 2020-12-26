import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}


const { createStore } = Redux;
const store = createStore(counter);

const Counter = ({ value }) => (
  <h1>{value}</h1>
);
  
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} />, 
    document.getElementById('root')
  );
}

//interesting

store.subscribe(render);
render();
