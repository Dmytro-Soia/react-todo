import { Todo } from './App';
import {
  delete_todo_from_api,
  patch_todo_from_api,
} from './FetchApi/FetchAddTodo';
import { useCurrentTodo, useError, useForm, useTodos } from './zustand';

const NewTodoStructure = ({ todo }: { todo: Todo }) => {
  const updateEdit = useCurrentTodo((state) => state.updateEdit);
  const { updateCurrentTodo } = useCurrentTodo();
  const { updateTitle, updateDate } = useForm();
  const { checkDoneStatus, deleteTodo } = useTodos();
  const updateError = useError((state) => state.updateError);

  let newColor = 'black';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tenDays = 1000 * 60 * 60 * 24 * 10;

  const handleCheck = async () => {
    try {
      await patch_todo_from_api(todo.id, todo.title, todo.due_date, !todo.done);
      checkDoneStatus(todo.id);
    } catch {
      updateError('Error: Cannot update todo');
    }
  };

  const handleDelete = async () => {
    try {
      await delete_todo_from_api(todo.id);
      deleteTodo(todo.id);
    } catch {
      updateError('Error: Cannot delete todo');
    }
  };

  if (new Date(todo.due_date) < today) {
    newColor = 'red';
  } else if (new Date(todo.due_date).getDate() === today.getDate()) {
    newColor = 'blue';
  } else if (new Date(todo.due_date).getTime() < today.getTime() + tenDays) {
    newColor = 'yellow';
  } else {
    newColor = 'green';
  }
  const handleEdit = async () => {
    updateEdit(true);
    updateCurrentTodo(todo);
    updateTitle(todo.title);
    updateDate(todo.due_date);
  };
  return (
    <li className="example">
      <p id="todo-title">{todo.title}</p>
      <p style={{ color: newColor }} id="todo-date">
        {todo.due_date}
      </p>
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
