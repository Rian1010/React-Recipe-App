import React, {useState} from 'react';
import InputStateHook from './customHooks/InputStateHook';

const RecipeForm = ({addRecipe}) => {
    const [value, step_1, handleChange, handleChangeStep1, resetInput] = InputStateHook();
    
    // const [inputs, setInputs] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        // setValue(inputs)
        addRecipe(value, step_1);
        resetInput();
    }

    return (
        <div>
            <h1 style={{marginTop: 0, paddingTop: "20px"}}>Add A Recipe!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the name of the recipe" value={value} onChange={handleChange} />
                <input type="text" placeholder="Enter step one" value={step_1} onChange={handleChangeStep1} />
                <button type="submit">Add Recipe</button> 
            </form>
        </div>
    )
}

export default RecipeForm
