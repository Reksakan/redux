//08-Redux-React-counter-example-React
const { createElement, useState} = React;
html = htm.bind(createElement);

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

const {createStore} = Redux;
const store = createStore(counter);

const Counter = ({ value, onIncrement, onDecrement}) => (
  html `<h1>${value}</h1>
        <button class="increment" onClick=${onIncrement}>+</button>
        <button class="decrement" onClick=${onDecrement}>-</button>`
)

const render = () => {
  ReactDOM.render(
    html `<${Counter} 
    value=${store.getState()}
    onIncrement=${()=> store.dispatch({ type: 'INCREMENT'})}
    onDecrement=${()=> store.dispatch({ type: 'DECREMENT'})}
    /> `, 
    document.getElementById('root')
  )
};
store.subscribe(render);
render();


