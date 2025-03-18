import DefaultButton from '../DefaultButton';
import {
  useCategories,
  useCategoryInput,
  useErrorCategories,
} from '../zustand';
import { add_category_to_api } from './fecthCategories';

const CategoriesInput = () => {
  const {
    title,
    color,
    handleTitleChange,
    handleColorChange,
    updateTitle,
    updateColor,
  } = useCategoryInput();
  const addCategory = useCategories((state) => state.addCategories);
  const updateCatError = useErrorCategories((state) => state.updateCatError);
  function buttonDisEnStatus() {
    if (title.length < 1 || color === '') {
      return true;
    } else {
      return false;
    }
  }
  async function handleAddCategorie() {
    try {
      const newCategorie = await add_category_to_api(title, color);
      addCategory(newCategorie);
    } catch {
      updateCatError('Fail to add this categorie');
    } finally {
      updateTitle(''), updateColor('');
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
        buttonStatus={buttonDisEnStatus()}
        buttonText={'Add Categories'}
        onClick={handleAddCategorie}
        buttonId="add-categories"
      />
    </div>
  );
};

export default CategoriesInput;
