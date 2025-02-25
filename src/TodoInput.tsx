import Button from "./Button";

const Input = () => {
    return (
      <div id="input-section">
        <input type="text" id="input"></input>
        <input type="date" id="due-date"></input>
        <Button buttonText="Add To-Do" buttonId="add-todo" />
      </div>
    );
  }

  export default Input