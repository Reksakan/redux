const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' : return [
      ...state, 
      {
        id: action.id,
        text: action.text,
        status: false
      }
    ];
    default: return state;
  }
}

const testTodos = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Hi all'
  }

  const stateAfter = [{
    id: 1,
    text: 'Hi all',
    status: false
  }];

  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testTodos();
console.log('All test is passed!')
