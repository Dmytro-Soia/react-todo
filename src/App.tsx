import { useEffect, useState } from 'react';
import './App.css';
import TodoContainerElement from './TodoContainerElement';
import TodoInput from './TodoInput';
import TodoSortSection from './TodoSortSection';
import {
  get_todo_from_api,
  patch_todo_from_api,
} from './FetchApi/FetchAddTodo';

export interface Todo {
  id: number;
  title: string;
  context: string;
  due_date: string;
  done: boolean;
}

console.log(await get_todo_from_api());

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    get_todo_from_api()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const checkDone = async (id: number, todo: Todo) => {
    try {
      await patch_todo_from_api(todo.id, todo.title, todo.due_date, !todo.done);
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done: !todo.done };
          } else {
            return todo;
          }
        }),
      );
    } catch {
      console.error('fail_edit');
      return todo;
    }
  };
  return (
    <>
      <div>
        <h1 id="app-name">To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoSortSection />
        <TodoContainerElement todos={todos} checkDone={checkDone} />
      </div>
    </>
  );
};
export default App;
