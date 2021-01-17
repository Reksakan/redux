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
    state = reducer(state, action); // as I understand the state inside the reducer is not the same variable as the state in the left to equal sign?
    listeners.forEach(listener => listener()); // what this listener() does? 
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return ()=> {listeners = listeners.filter(l => l !== listener);} //why this way of writing? 
  }

  dispatch({});
  
  return ({getState, dispatch, subscribe});
} 

const store = createStore(counter);


const render = () => {
  document.body.innerText = store.getState()
}
render();

store.subscribe(render);
document.addEventListener('click', () => {store.dispatch({ type: 'INCREMENT'})})

