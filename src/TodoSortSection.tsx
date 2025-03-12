import DefaultButton from './DefaultButton';
import { useSort } from './zustand';
const TodoSortSection = () => {
  const { sortDate, sortName, sortDone, sortUndone } = useSort();
  return (
    <div id="sort-section">
      <h2 id="sort-header">Sort By:</h2>
      <DefaultButton
        buttonStatus={false}
        buttonText="Date"
        buttonId="date"
        onClick={sortDate}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Name"
        buttonId="name"
        onClick={sortName}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Done"
        buttonId="done"
        onClick={sortDone}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Undone"
        buttonId="undone"
        onClick={sortUndone}
      />
    </div>
  );
};

export default TodoSortSection;
