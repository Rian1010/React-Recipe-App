import React from 'react'
import InputStateHook from './customHooks/InputStateHook';

const EditRecipe = ({id, editRecipe, toggleEditBtn}) => {
    const [value, step_1, handleChange, handleChangeStep1, ] = InputStateHook();
    

    const handleSubmit = e => {
        e.preventDefault();
        // setValue(inputs)
        editRecipe(id, value, step_1);
        toggleEditBtn();
    }

    return (
        <div>
            <h2>Edit The Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the name of the recipe" value={value} onChange={handleChange} />
                <input type="text" placeholder="Enter step one" value={step_1} onChange={handleChangeStep1} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditRecipe;
