import { useEffect, useState } from 'react';
import './App.css';
import TodoContainerElement from './TodoContainerElement';
import TodoInput from './TodoInput';
import TodoSortSection from './TodoSortSection';
import {
  delete_todo_from_api,
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

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sort, setSort] = useState<string>('none');

  //Charging data from API
  useEffect(() => {
    get_todo_from_api()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //Sorting function logic
  function byName(a: Todo, b: Todo) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  function byDate(a: Todo, b: Todo) {
    if (a.due_date < b.due_date) {
      return -1;
    }
    if (a.due_date > b.due_date) {
      return 1;
    }
    return 0;
  }

  if (sort === 'name') {
    todos.sort(byName);
  } else if (sort === 'date') {
    todos.sort(byDate);
  }

  //Set sorting options
  const sortByName = () => {
    setSort('name');
  };

  const sortByDate = () => {
    setSort('date');
  };

  const sortDone = () => {
    setSort('done');
  };

  const sortUndone = () => {
    setSort('undone');
  };

  //Add todo function
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  //Change "done" status in array and API
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

  //Delete todo function
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    delete_todo_from_api(id);
  };

  return (
    <>
      <div id="main">
        <h1 id="app-name">To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoSortSection
          sortByName={sortByName}
          sortByDate={sortByDate}
          sortDone={sortDone}
          sortUndone={sortUndone}
        />
        <TodoContainerElement
          sort={sort}
          todos={todos}
          checkDone={checkDone}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default App;
