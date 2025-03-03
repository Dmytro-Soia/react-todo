import { useEffect, useState } from 'react';
import './App.css';
import TodoContainerElement from './TodoContainerElement';
import TodoInput from './TodoInput';
import TodoSortSection from './TodoSortSection';
import { get_todo_from_api } from './FetchApi/FetchAddTodo';

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

  const checkDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      }),
    );
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
