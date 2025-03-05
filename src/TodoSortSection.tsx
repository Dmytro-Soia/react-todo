import DefaultButton from './DefaultButton';

const TodoSortSection = ({
  sortByName,
  sortByDate,
  sortAll,
  sortDone,
  sortUndone,
}: {
  sortByName: () => void;
  sortByDate: () => void;
  sortAll: () => void;
  sortDone: () => void;
  sortUndone: () => void;
}) => {
  return (
    <div id="sort-section">
      <h2 id="sort-header">Sort By:</h2>
      <DefaultButton
        buttonStatus={false}
        buttonText="Date"
        buttonId="date"
        onClick={sortByDate}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Name"
        buttonId="name"
        onClick={sortByName}
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
      <DefaultButton
        buttonStatus={false}
        buttonText="All"
        buttonId="all"
        onClick={sortAll}
      />
    </div>
  );
};

export default TodoSortSection;
