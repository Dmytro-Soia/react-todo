import DefaultButton from './DefaultButton';

const TodoSortSection = () => {
  return (
    <div id="sort-section">
      <h2 id="sort-header">Sort By:</h2>
      <DefaultButton
        buttonText="Date"
        buttonId="date"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonText="Name"
        buttonId="name"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonText="Done"
        buttonId="done"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonText="Undone"
        buttonId="undone"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default TodoSortSection;
