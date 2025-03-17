import { Categorie } from '../App';
import { useCategories, useErrorCategories } from '../zustand';
import { delete_category_from_api } from './fecthCategories';

const NewCategoriesStructure = ({ categories }: { categories: Categorie }) => {
  const deleteCategory = useCategories((state) => state.deleteCategory);
  const updateCatError = useErrorCategories((state) => state.updateCatError);
  const handleDeleteCategory = async () => {
    try {
      await delete_category_from_api(categories.id);
      deleteCategory(categories.id);
    } catch {
      updateCatError('Fail to delete this categorie');
    }
  };
  return (
    <li style={{ background: categories.color }} className="example">
      <p id="categories-title">{categories.title}</p>
      <button id="delete-button" onClick={handleDeleteCategory}>
        Delete
      </button>
    </li>
  );
};

export default NewCategoriesStructure;
