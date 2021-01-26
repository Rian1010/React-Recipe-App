import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Recipe from "./Recipe";
import './App.css';
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";

const App = () => {
  const APP_ID = '72fb7fc2';
  const APP_KEY = '917130624e84519c084ea537fd5d705d';
  

  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("");


  useEffect(async () => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    // setUserRecipes();
    // console.log(userRecipes);

    // THE WAY OF FETCHING
    // fetch(//api)
    // .then(response => {
    //   response.json();
    // })
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const [recipeID, setRecipeID] = useState(0);

  const addRecipe = (newRecipe, step_1) => {
    setRecipeID(recipeID + 1);
    const updateRecipe = [
      ...userRecipes,
      {
        id: recipeID,
        recipe: newRecipe,
        step_1: step_1,
      }
    ];
    setUserRecipes(updateRecipe);
  }

  const editRecipe = (id, newRecipe, newStep1) => {
    const updateRecipe = userRecipes.map(recipe => 
      recipe.id === id ? 
      {
        ...recipe,
        recipe: newRecipe,
        step_1: newStep1
      } : recipe
    ); 
    setUserRecipes(updateRecipe);
  }

  const deleteRecipe = id => {
    const updateRecipe = userRecipes.filter(recipe => recipe.id !== id);
    setUserRecipes(updateRecipe);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <form onSubmit={getSearch} className="search-form">
              <input className="search-bar" type="text" value={search} onChange={updateSearch} />
              <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
              {recipes.map(recipe => (
                <Recipe 
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                />
              ))}
            </div>
          </Route>
          <Route path="/add-recipe">
            <RecipeForm addRecipe={addRecipe} />
            <RecipeList userRecipes={userRecipes} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
            {/* <button type="text" onClick={() => deleteRecipe(id)}>Delete</button> */}
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
