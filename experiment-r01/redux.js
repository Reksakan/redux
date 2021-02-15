const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO' :
      if(state.id !== action.id) {
        return state;
      }
      return {
        ...state, 
        completed: !state.completed
      }
    default: return state;
  }
}

const todos = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO' :
      return state.map(t => todo(t, action))
    default : return state;
  }
}

const visibilityFilter = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER' : 
      return action.filter;
    default : return state;
  }
}

// const todoApp = (state={}, action) => {
//   return {
//     todos: todos(
//       state.todos, 
//       action
//     ), 
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter, 
//       action
//     )
//   }
// }



// const { combineReducers } = Redux;
// const todoApp = combineReducers({
//   todos: todos,
//   visibilityFilter: visibilityFilter
// })

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](
        state[key], 
        action
      );
      return nextState;
    }, 
    {})
  }
}

const todoApp = combineReducers({todos, visibilityFilter})

const { createStore } = Redux;
// var createStore = Redux.createStore; 
const store = createStore(todoApp);

console.log('Initial state: ');
console.log(store.getState());
console.log('---------------END--------------')

console.log('Adding new todo: ');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Call Mom'
})
console.log(store.getState());
console.log('---------------END--------------')

console.log('Adding new todo: ');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Call Dad'
})
console.log(store.getState());
console.log('---------------END--------------')

console.log('Toggle todo 1: ');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
})
console.log(store.getState());
console.log('---------------END--------------')

console.log('Set visibility filter: ');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})
console.log(store.getState());
console.log('---------------END--------------')

// const arr1 = {
//   name: 'asker',
//   text: 'plain',
//   subject: 'math',
//   course: 'economics'
// }

// const arr2 = {
//   lastname: 'asker',
//   food: 'plain',
//   moon: 'math',
//   soon: 'economics'
// }

// const arr3 = [
//   {
//     apple: 'kg',
//     meet: 'pounds',
//     doom: 'math',
//     pull: 'economics'
//   },
//   {
//     rollforward: 'take over to the next period',
//     money: 'honey',
//     billy: 'villy',
//     sooner: 'mooner'
//   }
// ]

// console.log('Outcome Object.keys: ', Object.keys({arr1, arr2, arr3}));

// const reds = {arr1, arr2, arr3};
// console.log('reds: ', reds);

// const outcome = Object.keys(reds).reduce((nextState, key)=> {
//   nextState[key] = reds[key]; return nextState}, {});
// console.log('outcome: ', outcome) 