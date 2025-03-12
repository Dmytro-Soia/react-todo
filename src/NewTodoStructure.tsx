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

  const handleEdit = async () => {
    updateEdit(true);
    updateCurrentTodo(todo);
    updateTitle(todo.title);
    updateDate(todo.due_date);
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
