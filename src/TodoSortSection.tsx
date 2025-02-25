import Button from "./Button"

const TodoSortSection = () => {
    return (
    <div id="sort-section">
          <h2 id="sort-header">Sort By:</h2>
          <Button buttonText="Date" buttonId="date" />
          <Button buttonText="Name" buttonId="name" />
          <Button buttonText="Done" buttonId="done" />
          <Button buttonText="Undone" buttonId="undone" />
        </div>
        )
}

export default TodoSortSection