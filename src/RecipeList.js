import React from 'react'
import RecipeItems from './RecipeItems'

const RecipeList = ({userRecipes, editRecipe, deleteRecipe}) => {
    return (
        <div>
            {userRecipes.map(recipe => (
                <RecipeItems 
                    // key={recipe.id}
                    id={recipe.id}
                    recipe={recipe.recipe}
                    step_1={recipe.step_1}
                    editRecipe={editRecipe}
                    deleteRecipe={deleteRecipe}
                />
            ))}
        </div>
    )
}

export default RecipeList
