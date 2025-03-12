import { useEffect } from 'react';
import './App.css';
import TodoContainerElement from './TodoContainerElement';
import TodoInput from './TodoInput';
import TodoSortSection from './TodoSortSection';
import { get_todo_from_api } from './FetchApi/FetchAddTodo';
import { useError, useSort, useTodos } from './zustand';

export interface Todo {
  id: number;
  title: string;
  context: string;
  due_date: string;
  done: boolean;
}

const App = () => {
  const { todos, updateTodos } = useTodos();
  const { sort, sortByName, sortByDate } = useSort();
  const { error, updateError } = useError();

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
  //TImeout to remove error message
  useEffect(() => {
    const timer = setTimeout(() => {
      updateError('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  //Handle input changes
  if (sort === 'name') {
    todos.sort(sortByName);
  } else if (sort === 'date') {
    todos.sort(sortByDate);
  }
  return (
    <>
      <div id="main">
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
