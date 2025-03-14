import { Todo } from '../App';
import NewTodoStructure from './NewTodoStructure';
import { useSort, useTodos } from '../zustand';

const TodoContainerElement = () => {
  const todos = useTodos((state) => state.todos);
  const sort = useSort((state) => state.sort);

  let todosCopie = todos;

  function sortByName(a: Todo, b: Todo) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  function sortByDate(a: Todo, b: Todo) {
    if (a.due_date < b.due_date) {
      return -1;
    }
    if (a.due_date > b.due_date) {
      return 1;
    }
    return 0;
  }

  if (sort === 'done') {
    todosCopie = todosCopie.filter((todo) => todo.done === true);
  } else if (sort === 'undone') {
    todosCopie = todosCopie.filter((todo) => todo.done === false);
  } else if (sort === 'title') {
    todosCopie = todosCopie.sort(sortByName);
  } else if (sort === 'date') {
    todosCopie = todosCopie.sort(sortByDate);
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
