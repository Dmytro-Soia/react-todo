import NewTodoStructure from './NewTodoStructure';
import { useSort, useTodos } from './zustand';

const TodoContainerElement = () => {
  const todos = useTodos((state) => state.todos);
  const sort = useSort((state) => state.sort);
  let todosCopie = todos;

  if (sort === 'done') {
    todosCopie = todosCopie.filter((todo) => todo.done === true);
  } else if (sort === 'undone') {
    todosCopie = todosCopie.filter((todo) => todo.done === false);
  }

  return (
    <div id="container">
      <ul id="todo-list">
        {todosCopie.map((todo) => {
          return <NewTodoStructure key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoContainerElement;
