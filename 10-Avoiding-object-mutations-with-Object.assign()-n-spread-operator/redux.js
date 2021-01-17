const toggleTodo = (todo) => {
  // todo.status = !todo.status;
  // return todo;

  // return {
  //   id: 1, 
  //   description: 'superman',
  //   status: !todo.status
  // }

  // return Object.assign({}, todo, {status: !todo.status})

  return {...todo, status: !todo.status}
   
}

const testToggleTodo = () => {
  const todoBefore = {
    id: 1,
    description: 'superman',
    status: true
  }

  const todoAfter = {
    id: 1,
    description: 'superman',
    status: false
  }

  // deepFreeze(todoBefore);

  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}

testToggleTodo();
console.log('All are good man!')