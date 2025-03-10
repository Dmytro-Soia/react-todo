import { Todo } from './App';

const NewTodoStructure = ({
  todo,
  chosenTodo,
  checkDone,
  deleteTodo,
  startEdit,
}: {
  todo: Todo;
  chosenTodo: (currentTodo: Todo) => void;
  checkDone: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
  startEdit: (todo: Todo) => void;
}) => {
  const handleCheck = () => {
    checkDone(todo.id, todo);
  };

  const handleEdit = () => {
    startEdit(todo);
    chosenTodo(todo);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <li className="example">
      <p id="todo-title">{todo.title}</p>
      <p id="todo-date">{todo.due_date}</p>
      <input
        type="checkbox"
        checked={todo.done}
        id="todo-done"
        onChange={handleCheck}
      ></input>
      <button id="edit-button" onClick={handleEdit}>
        Edit
      </button>
      <button id="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default NewTodoStructure;
