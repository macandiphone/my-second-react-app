import Recipe from './Recipe'
import React, { useContext } from 'react'
import { FunctionContext } from './App'

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(FunctionContext)

  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeList
