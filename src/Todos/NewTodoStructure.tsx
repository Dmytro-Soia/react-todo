import { useEffect, useState } from 'react';
import { Todo } from '../App';
import {
  useCategories,
  useCurrentTodo,
  useCwT,
  useError,
  useForm,
  useTodos,
} from '../zustand';
import { delete_todo_from_api, patch_todo_from_api } from './FetchAddTodo';
import {
  changeCategoryForTodos,
  get_cwt_from_api,
} from '../categorieWithTodos';

const NewTodoStructure = ({ todo }: { todo: Todo }) => {
  const updateEdit = useCurrentTodo((state) => state.updateEdit);
  const { updateCurrentTodo } = useCurrentTodo();
  const { updateTitle, updateDate } = useForm();
  const { checkDoneStatus, deleteTodo } = useTodos();
  const updateError = useError((state) => state.updateError);
  const categories = useCategories((state) => state.categories);
  const { updateCwT } = useCwT();
  const todos = useTodos((state) => state.todos);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  let newColor = 'black';
  const today = new Date();
  today.setHours(1, 0, 0, 0);
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

  const categorieOptions = categories.map((categorie) => {
    return (
      <option value={categorie.id} key={categorie.id}>
        {categorie.title}
      </option>
    );
  });

  useEffect(() => {
    get_cwt_from_api()
      .then((data) => {
        updateCwT(data);
      })
      .catch((err) => {
        updateError(err);
      });
  }, []);

  const fetchTodoCategories = async () => {
    const existedCategorie = todos.find((t: Todo) => t.id === todo.id);
    if (existedCategorie?.categories) {
      setSelectedCategory(existedCategorie.categories[0].id.toString());
    } else {
      setSelectedCategory('');
    }
    fetchTodoCategories()
  };
  

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const categorieId = event.target.value;
    setSelectedCategory(categorieId);
    changeCategoryForTodos(categorieId, todo.id);
  };

  if (new Date(todo.due_date) < today) {
    newColor = 'red';
  } else if (new Date(todo.due_date).getTime() === today.getTime()) {
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
      <p id="</li>todo-title">{todo.title}</p>
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
      <select
        id="select-categorie"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value={''}>Choose category</option>
        {categorieOptions}
      </select>
      <button id="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default NewTodoStructure;
