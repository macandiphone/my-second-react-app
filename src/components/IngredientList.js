import Ingredient from './Ingredient'

const IngredientList = ({ ingredients }) => {
  const ingredientsElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })

  return <div className='ingredient-grid '>{ingredientsElements}</div>
}

export default IngredientList
