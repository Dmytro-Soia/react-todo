import { Todo } from "./App";
import DefaultButton from "./DefaultButton";
import { useState } from 'react';

const TodoInput = ({ addTodo }: { addTodo: (todo: Todo) => void }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    async function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
      setText(e.target.value)
    }

    async function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
      setDate(e.target.value)
    }

    function handleAddTodo() {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: text,
        context: '',
        due_date: date,
        done: false
      })
    }
    
  return (
    <div id="input-section">
      <input
      value={text}
      onChange={handleTextChange}
      type="text"
      id="input">
      </input>
      <input
      value={date}
      onChange={handleDateChange}
      type="date"
      id="due-date">
      </input>
      <DefaultButton buttonText="Add To-Do" onClick={handleAddTodo} buttonId="add-todo" />
    </div>    
  );
}

export default TodoInput