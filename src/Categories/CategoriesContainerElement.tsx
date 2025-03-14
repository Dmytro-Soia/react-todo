import NewCategoriesStructure from './NewCategoriesStructure';
import { useCategories } from '../zustand';
const CategoriesContainerElement = () => {
  const categories = useCategories((state) => state.categories);
  console.log(categories);

  return (
    <div id="container">
      <ul id="todo-list">
        {categories.map((categorie) => {
          return (
            <NewCategoriesStructure key={categorie.id} categories={categorie} />
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesContainerElement;
