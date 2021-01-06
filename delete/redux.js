const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' : return [
      ...state, {
      id: action.id,
      text: action.text,
      completed: false
    }]
  }
}

const testToggleTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Buy a smart TV'
  };

  const stateAfter = [{
    id: 1,
    text: 'Buy a smart TV',
    completed: false
  }];

  expect(todos(stateBefore, action)).toEqual(stateAfter);
}

testToggleTodo();
console.log('Test is passed!');