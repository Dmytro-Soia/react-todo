import './App.css';
import TodoContainerElement from './TodoContainerElement';
import TodoInput from './TodoInput';
import TodoSortSection from './TodoSortSection';

const App = () => {
  return (
    <>
      <div>
          <h1 id="app-name">To-Do List</h1>
        <TodoInput />
        <TodoSortSection />
        <TodoContainerElement />
      </div>
    </>
  ); 
}
export default App;
