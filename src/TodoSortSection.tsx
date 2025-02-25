import DefaultButton from "./DefaultButton"

const TodoSortSection = () => {
    return (
    <div id="sort-section">
          <h2 id="sort-header">Sort By:</h2>
          <DefaultButton buttonText="Date" buttonId="date" />
          <DefaultButton buttonText="Name" buttonId="name" />
          <DefaultButton buttonText="Done" buttonId="done" />
          <DefaultButton buttonText="Undone" buttonId="undone" />
        </div>
        )
}

export default TodoSortSection