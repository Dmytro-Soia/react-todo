import { Todo } from './App';
import NewTodoStructure from './NewTodoStructure';

const TodoContainerElement = ({
  todos,
  checkDone,
  deleteTodo,
}: {
  todos: Todo[];
  checkDone: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <div id="container">
      <ul id="todo-list">
        {todos.map((todo) => {
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
