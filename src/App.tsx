import { useEffect } from 'react';
import './App.css';
import TodoContainerElement from './Todos/TodoContainerElement';
import TodoInput from './Todos/TodoInput';
import TodoSortSection from './Todos/TodoSortSection';
import { get_todo_from_api } from './Todos/FetchAddTodo';
import {
  useCategories,
  useError,
  useErrorCategories,
  useTodos,
} from './zustand';
import { get_category_from_api } from './Categories/fecthCategories';
import CategoriesContainerElement from './Categories/CategoriesContainerElement';
import CategoriesInput from './Categories/CategoriesInput';

export interface Todo {
  id: number;
  title: string;
  context: string;
  due_date: string;
  done: boolean;
  categories: [{ id: number }];
}

export interface Categorie {
  id: number;
  title: string;
  color: string;
}

export interface CwT {
  categorie_id: number;
  todo_id: number;
}

const App = () => {
  const updateTodos = useTodos((status) => status.updateTodos);
  const { error, updateError } = useError();
  const updateCategories = useCategories((status) => status.updateCategories);
  const { errorCat, updateCatError } = useErrorCategories();
  //Get todos from API
  useEffect(() => {
    get_todo_from_api()
      .then((data) => {
        updateTodos(data);
      })
      .catch((err) => {
        updateError(err);
      });
  }, []);

  //Get categories from API
  useEffect(() => {
    get_category_from_api()
      .then((data) => {
        updateCategories(data);
      })
      .catch((err) => {
        updateError(err);
      });
  }, []);
  //TImeout to remove error message
  useEffect(() => {
    const timer = setTimeout(() => {
      updateError('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateCatError('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [errorCat]);

  //Handle input changes
  return (
    <>
      <div id="main-categories">
        <p id="error-categories">{errorCat}</p>
        <h1 id="categories-name">Categories</h1>
        <CategoriesInput />
        <CategoriesContainerElement />
      </div>
      <div id="main-todos">
        <p id="error">{error}</p>
        <h1 id="app-name">To-Do List</h1>
        <TodoInput />
        <TodoSortSection />
        <TodoContainerElement />
      </div>
    </>
  );
};
export default App;
