const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' : return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]

    case 'TOGGLE_TODO' : 
    return state.map(todo => {
      if (todo.id !== action.id) {
        return todo;
      }

      return [
        ...todo, 
        {completed: !todo.completed}
      ]

    }) 

    default: return state;
  }
}

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Buy TV',
  };

  const stateAfter = [{
    id: 0,
    text: 'Buy TV',
    completed: false
  }]

  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

const testToggleTodo = () => {
  const stateBefore = [{
    id: 0,
    text: 'Buy TV',
    completed: false
  },{
    id: 1,
    text: 'Buy Present',
    completed: false
  }];
  
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  
  const stateAfter = [{
    id: 0,
    text: 'Buy TV',
    completed: false
  },{
    id: 1,
    text: 'Buy Present',
    completed: true
  }];;

  expect(todos(stateBefore).toEqual(stateAfter));
}

testAddTodo();
console.log('Test is passed well!');