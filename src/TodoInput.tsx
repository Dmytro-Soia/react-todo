import { Todo } from './App';
import DefaultButton from './DefaultButton';
import { useState } from 'react';
import { add_todo_to_api } from './FetchApi/FetchAddTodo';

const TodoInput = ({ addTodo }: { addTodo: (todo: Todo) => void }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  async function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function buttonDisEnStatus() {
    if (text.length < 1 || date === '') {
      return true;
    } else {
      return false;
    }
  }

  async function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
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
      setText('');
    } catch {
      console.error('Fail');
    }
  }

  return (
    <div id="input-section">
      <input
        value={text}
        onChange={handleTextChange}
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
        buttonText="Add To-Do"
        onClick={handleAddTodo}
        buttonId="add-todo"
      />
    </div>
  );
};

export default TodoInput;
