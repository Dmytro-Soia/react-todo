import { Todo } from './App';
import NewTodoStructure from './NewTodoStructure';

const TodoContainerElement = ({
  todos,
  checkDone,
}: {
  todos: Todo[];
  checkDone: (id: number) => void;
}) => {
  return (
    <div id="container">
      <ul id="todo-list">
        {todos.map((todo) => {
          return (
            <NewTodoStructure key={todo.id} todo={todo} checkDone={checkDone} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoContainerElement;
