const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

const { createStore } = Redux; 
// var createStore = Redux.createStore
const store = createStore(counter);


const render = () => {
  document.body.innerText = store.getState()
}
render();

store.subscribe(render);
document.addEventListener('click', () => {store.dispatch({ type: 'INCREMENT'})})
