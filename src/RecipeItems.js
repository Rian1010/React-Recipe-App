import React, {useState} from 'react'
import ToggleHook from './customHooks/ToggleHook';
import EditRecipe from './EditRecipe';

const RecipeItems = ({id, recipe, step_1, editRecipe, deleteRecipe}) => {

    const [toggle, handleToggleState] = ToggleHook()

    return (
        <div>
            {toggle ?
                (
                    <EditRecipe 
                        id={id}
                        recipe={recipe}
                        edit_step_1={step_1}
                        editRecipe={editRecipe}
                        toggleEditBtn={handleToggleState}
                    />
                ) :
                <div> 
                    <h2>{recipe}</h2>
                    <ol>
                        <li>{step_1}</li>
                    </ol>
                </div>
            }
            
            <button onClick={handleToggleState}>Edit</button>
            <button onClick={() => deleteRecipe(id)}>Delete</button>
        </div>
    )
}

export default RecipeItems;
