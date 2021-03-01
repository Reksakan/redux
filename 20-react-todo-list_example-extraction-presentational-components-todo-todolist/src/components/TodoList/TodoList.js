import Todo from '../Todo/Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => {
      // console.log('todo', todo);
      // console.log('todo.completed', todo.completed);
      return <Todo 
        key={todo.id}
        {...todo}
        onClick={()=> onTodoClick(todo.id)}
      />

      // return <li key={todo.id}>{todo.text}</li>

    })}
  </ul>
)

export default TodoList;