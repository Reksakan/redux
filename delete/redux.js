const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO' : return [{
      id: action.id,
      text: action.text,
      completed: false
    }]
  
    case 'TOGGLE_TODO' : 
    if (state.id !==action.id) {
      return state;
    }
    return {
      ...state,
      completed: !state.completed
    }
}}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' : return todo(undefined, action);
    
    case 'TOGGLE_TODO' : 
    return state.map(t => todo(t, action))

    default: return todo;
  }
}

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0, 
    text: 'Buy TV'
  };

  const stateAfter = [{
    id: 0,
    text: 'Buy TV',
    completed: false
  }];

  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0, 
      text: 'Buy TV',
      completed: false
    },
    {
      id: 1,
      text: 'Buy present',
      completed: false
    }
  ];
  
  const action = {
    type: 'TOGGLE_TODO', 
    id: 1 
  }

  const stateAfter = [
    {
      id: 0, 
      text: 'Buy TV',
      completed: false
    },
    {
      id: 1,
      text: 'Buy present',
      completed: true
    }
  ]

  expect(todos(stateBefore, action)).toEqual(stateAfter)

}

testAddTodo();
testToggleTodo();
console.log('Test went well!');
