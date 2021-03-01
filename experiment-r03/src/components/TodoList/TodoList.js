import Todo from '../Todo/Todo';

const TodoList =({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => {
      return <Todo 
                key={todo.id}
                {...todo}
                onClick={()=> onTodoClick(todo.id)}
              />
    })}
  </ul>
)

export default TodoList;