import DefaultButton from '../DefaultButton';
import { add_todo_to_api, patch_todo_from_api } from './FetchAddTodo';
import { useCurrentTodo, useError, useForm, useTodos } from '../zustand';

const TodoInput = () => {
  const { editArray, addTodo } = useTodos();
  const {
    title,
    date,
    updateTitle,
    updateDate,
    handleTitleChange,
    handleDateChange,
  } = useForm();
  const currentTodo = useCurrentTodo((state) => state.currentTodo);
  const { isEditing, updateEdit } = useCurrentTodo();
  const updateError = useError((state) => state.updateError);
  function buttonDisEnStatus() {
    if (title.length < 1 || date === '') {
      return true;
    } else {
      return false;
    }
  }

  async function handleAddTodo() {
    try {
      const newTodo = await add_todo_to_api(title, date);
      addTodo({
        id: newTodo.id,
        title: title,
        context: '',
        due_date: date,
        done: false,
        categories: [],
      });
    } catch {
      updateError('Fail to add todo');
    } finally {
      updateTitle('');
      updateDate('');
    }
  }

  async function handleUpdateTodo() {
    try {
      await patch_todo_from_api(currentTodo.id, title, date, currentTodo.done);
      editArray(currentTodo, title, date);
    } catch {
      updateError('Fail to update todo');
    } finally {
      updateEdit(false);
      updateTitle('');
      updateDate('');
    }
  }

  return (
    <div id="input-section">
      <input
        value={title}
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
