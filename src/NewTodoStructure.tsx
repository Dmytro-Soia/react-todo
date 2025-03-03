import { Todo } from './App';

const NewTodoStructure = ({
  todo,
  checkDone,
  deleteTodo,
}: {
  todo: Todo;
  checkDone: (id: number, todo: Todo) => void;
  deleteTodo: (id: number) => void;
}) => {
  const handleCheck = () => {
    checkDone(todo.id, todo);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    console.log(todo.id);
  };
  return (
    <li className="example">
      <p id="todo-title">{todo.title}</p>
      <p>{todo.context}</p>
      <p id="todo-date">{todo.due_date}</p>
      <input
        type="checkbox"
        checked={todo.done}
        id="todo-done"
        onChange={handleCheck}
      ></input>
      <button id="delete_button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default NewTodoStructure;
