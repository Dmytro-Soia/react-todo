import { Todo } from './App';

const NewTodoStructure = ({
  todo,
  checkDone,
}: {
  todo: Todo;
  checkDone: (id: number) => void;
}) => {
  const handleCheck = () => {
    checkDone(todo.id);
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
    </li>
  );
};

export default NewTodoStructure;
