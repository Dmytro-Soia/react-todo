import { Todo } from './App';
import NewTodoStructure from './NewTodoStructure';

const TodoContainerElement = ({
  todos,
  sort,
  checkDone,
  deleteTodo,
}: {
  todos: Todo[];
  sort: string;
  checkDone: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
}) => {
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
          return (
            <NewTodoStructure
              key={todo.id}
              todo={todo}
              checkDone={checkDone}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoContainerElement;
