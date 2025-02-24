import './App.css';

const App = () => {
  return (
    <>
      <div>
        <h1>To-Do List</h1>
      </div>
      <div id="input-section">
        <input type="text" id="input"></input>
        <input type="date" id="due-date"></input>
        <button className='button' id="add-todo">Add To-Do</button>
      </div>
      <div id="sort-section">
        <h2 id="sort-header">Sort By:</h2>
        <button className='button' id='date'>Date</button>
        <button className='button' id='name'>Name</button>
        <button className='button' id='done'>Done</button>
        <button className='button' id='undone'>Undone</button>
      </div>
      <div id="container">
          <div id="example">qweqweqweqwe</div>
      </div>
    </>
  );
};

export default App;
