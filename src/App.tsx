import './App.css';
import TodoContainer from './TodoContainerElement';
import Input from './TodoInput';
import TodoSortSection from './TodoSortSection';

const App = () => {
  return (
    <>
      <div>
          <h1 id="app-name">To-Do List</h1>
        <Input />
        <TodoSortSection />
        <TodoContainer />
      </div>
    </>
  ); 
}
export default App;
