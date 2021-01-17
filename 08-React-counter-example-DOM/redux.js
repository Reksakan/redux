const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

// const { createStore } = Redux; 
// var createStore = Redux.createStore;
const createStore = (reducer) => {
  
  let state;
  const listeners = [];

  const getState = () => state; 

  const dispatch = (action) => {
    state = reducer(state,action); // as I understand the state inside the reducer is not the same variable as the state in the left to equal sign?
    listeners.forEach(listener => listener()) // what this listener() does? 
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return ()=> {listeners = listeners.filter(l => l !== listener);} //why this way of writing? 
  }

  dispatch({});
  
  return {getState, dispatch, subscribe}
} 

const store = createStore(counter);

const generateCounterHTML = (state) => {
  const root = document.getElementById('root');
  
  const incrementBtn = document.createElement('button');
  incrementBtn.id = 'increment';
  incrementBtn.classList.add('increment');
  incrementBtn.innerText = '+';
  const decrementBtn = document.createElement('button');
  decrementBtn.id = 'decrement';
  decrementBtn.classList.add('decrement');
  decrementBtn.innerText = '-';
  const counterNum = document.createElement('div');
  counterNum.id = 'counter';
  counterNum.classList.add('counter');
  counterNum.classList.add('counter');
  counterNum.innerText = state;//might not sure to be here

  root.appendChild(counterNum);
  root.appendChild(incrementBtn);
  root.appendChild(decrementBtn);
}

generateCounterHTML(store.getState());

const onIncrement = () => {
  store.dispatch({type: 'INCREMENT'});
  console.log('Increment is clicked!')
}

const onDecrement = () => {
  store.dispatch({type: 'DECREMENT'});
  console.log('Decrement is clicked!')
}

const incrBtn = document.getElementById('increment');
incrBtn.addEventListener('click', onIncrement);

const decrBtn = document.getElementById('decrement');
decrBtn.addEventListener('click', onDecrement);

const render = () => {
  const counter = document.getElementById('counter');
  counter.innerText = store.getState();
}

render();

store.subscribe(render);

