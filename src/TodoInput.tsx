import { Todo } from './App';
import DefaultButton from './DefaultButton';
import { add_todo_to_api, patch_todo_from_api } from './FetchApi/FetchAddTodo';

const TodoInput = ({
  addTodo,
  handleTitleChange,
  handleDateChange,
  currentTodo,
  isEditing,
  text,
  date,
  setIsEditing,
  setTitle,
  setDate,
  editArray,
  setError,
}: {
  addTodo: (todo: Todo) => void;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentTodo: Todo | undefined;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  setTitle: (text: string) => void;
  setDate: (date: string) => void;
  text: string;
  date: string;
  editArray: (todo: Todo) => void;
  setError: (error: string[]) => void;
}) => {
  function buttonDisEnStatus() {
    if (text.length < 1 || date === '') {
      return true;
    } else {
      return false;
    }
  }

  async function handleAddTodo() {
    try {
      const newTodo = await add_todo_to_api(text, date, false);
      addTodo({
        id: newTodo.id,
        title: text,
        context: '',
        due_date: date,
        done: false,
      });
    } catch {
      setError(['Fail to add todo']);
    }
  }

  async function handleUpdateTodo() {
    try {
      if (currentTodo) {
        await patch_todo_from_api(currentTodo.id, text, date, currentTodo.done);
        editArray(currentTodo);
      }
    } catch {
      setError(['Fail to update todo']);
    } finally {
      setIsEditing(false);
      setDate('');
      setTitle('');
    }
  }

  return (
    <div id="input-section">
      <input
        value={text}
        onChange={handleTitleChange}
        type="text"
        id="input"
      ></input>
      <input
        value={date}
        onChange={handleDateChange}
        type="date"
        id="due-date"
      ></input>
      <DefaultButton
        buttonStatus={buttonDisEnStatus()}
        buttonText={isEditing ? 'Update Todo' : 'Add Todo'}
        onClick={isEditing ? handleUpdateTodo : handleAddTodo}
        buttonId="add-todo"
      />
    </div>
  );
};

export default TodoInput;
