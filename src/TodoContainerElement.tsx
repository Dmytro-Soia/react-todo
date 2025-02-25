const todos = [
    'example1',
    'example2',
    'example3',
    'example4'];

function listTodos() {
    const render = todos.map(todo => 
        <li key={todo} className="example">{todo}</li>
    )
    return <ul id="todo-list">{render}</ul>
}




const TodoContainer = () => {
    return (
    <div id="container">
        {listTodos()}
    </div>
    )
}

export default TodoContainer