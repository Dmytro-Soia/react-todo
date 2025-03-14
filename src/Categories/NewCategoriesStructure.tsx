import { Categorie } from '../App';
import { useCategories } from '../zustand';
import { delete_category_from_api } from './fecthCategories';

const NewCategoriesStructure = ({ categories }: { categories: Categorie }) => {
  const deleteCategory = useCategories((state) => state.deleteCategory);

  const handleDeleteCategory = async () => {
    try {
      await delete_category_from_api(categories.id);
      deleteCategory(categories.id);
    } catch {
      console.log('error');
    }
  };
  return (
    <li style={{ background: categories.color }} className="example">
      <p id="categories-title">{categories.title}</p>
      <button id="delete-button-categories" onClick={handleDeleteCategory}>
        Delete
      </button>
    </li>
  );
};

export default NewCategoriesStructure;
