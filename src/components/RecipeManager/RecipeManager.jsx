/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './RecipeManager.css'
const RecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');


  const addRecipe = (e) => {
    e.preventDefault();
    if (name && ingredients && instructions) {
      const newRecipe = { name, ingredients, instructions };
      setRecipes([...recipes, newRecipe]);
      setName('');
      setIngredients('');
      setInstructions('');
    }
  };


  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className='Rec'> 
      <h2>Recipe Manager</h2>
      <form onSubmit={addRecipe}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Recipe Name"
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients"
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions"
        />
        <button type="submit">Add Recipe</button>
      </form>
      
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => deleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeManager;
