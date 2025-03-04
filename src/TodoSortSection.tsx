import DefaultButton from './DefaultButton';

const TodoSortSection = () => {
  return (
    <div id="sort-section">
      <h2 id="sort-header">Sort By:</h2>
      <DefaultButton
        buttonStatus={false}
        buttonText="Date"
        buttonId="date"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Name"
        buttonId="name"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Done"
        buttonId="done"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="Undone"
        buttonId="undone"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <DefaultButton
        buttonStatus={false}
        buttonText="All"
        buttonId="all"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default TodoSortSection;
