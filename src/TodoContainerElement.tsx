import { Todo } from './App';
import NewTodoStructure from './NewTodoStructure';

const TodoContainerElement = ({
  todos,
  sort,
  chosenTodo,
  checkDone,
  deleteTodo,
  startEdit,
}: {
  todos: Todo[];
  sort: string;
  chosenTodo: (currentTodo: Todo) => void;
  checkDone: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  startEdit: (todo: Todo) => void;
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
              chosenTodo={chosenTodo}
              startEdit={startEdit}
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
