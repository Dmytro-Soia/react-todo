import DefaultButton from '../DefaultButton';
import { useCategories, useCategoryInput } from '../zustand';
import { add_category_to_api } from './fecthCategories';

const CategoriesInput = () => {
  const { title, color, handleTitleChange, handleColorChange } =
    useCategoryInput();
  const addCategory = useCategories((state) => state.addCategories);
  async function handleAddCategorie() {
    try {
      const newCategorie = await add_category_to_api(title, color);
      addCategory(newCategorie);
    } catch {
      console.log('errrror');
    }
  }
  return (
    <div id="categories-input-section">
      <input
        value={title}
        onChange={handleTitleChange}
        type="text"
        id="input-categories"
      ></input>
      <input
        value={color}
        type="color"
        onChange={handleColorChange}
        id="color-category"
      ></input>
      <DefaultButton
        buttonStatus={false}
        buttonText={'Add Categories'}
        onClick={handleAddCategorie}
        buttonId="add-categories"
      />
    </div>
  );
};

export default CategoriesInput;
