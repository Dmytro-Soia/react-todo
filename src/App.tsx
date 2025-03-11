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
  const [error, setError] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>();
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  //Get todos from API
  useEffect(() => {
    get_todo_from_api()
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  //TImeout to remove error message
  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);
  //Handle input changes
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  const chosenTodo = (currentTodo: Todo) => {
    setTitle(currentTodo.title);
    setDate(currentTodo.due_date);
  };
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

  //Editing
  const startEdit = (todo: Todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const editArray = (todo: Todo) => {
    setTodos(
      todos.map((todos) =>
        todo.id === todos.id
          ? { ...todos, title: title, due_date: date }
          : todos,
      ),
    );
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
      setError('Error: Cannot change status');
      return todo;
    }
  };

  //Delete todo function
  const deleteTodo = async (id: number) => {
    try {
      await delete_todo_from_api(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch {
      setError('Error: Cannot delete todo');
    }
  };

  return (
    <>
      <div id="main">
        <p id="error">{error}</p>
        <h1 id="app-name">To-Do List</h1>
        <TodoInput
          addTodo={addTodo}
          handleTitleChange={handleTitleChange}
          handleDateChange={handleDateChange}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          text={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          currentTodo={currentTodo}
          editArray={editArray}
          setError={setError}
        />
        <TodoSortSection
          sortByName={sortByName}
          sortByDate={sortByDate}
          sortDone={sortDone}
          sortUndone={sortUndone}
        />
        <TodoContainerElement
          sort={sort}
          todos={todos}
          chosenTodo={chosenTodo}
          checkDone={checkDone}
          startEdit={startEdit}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};
export default App;
