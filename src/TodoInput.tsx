import DefaultButton from "./DefaultButton";

const TodoInput = () => {
    return (
      <div id="input-section">
        <input type="text" id="input"></input>
        <input type="date" id="due-date"></input>
        <DefaultButton buttonText="Add To-Do" buttonId="add-todo" />
      </div>
    );
  }

  export default TodoInput