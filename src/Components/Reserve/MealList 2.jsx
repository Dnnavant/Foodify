import React, { useState, useEffect } from 'react';

export default function MealList() {
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    const appId = 'c641e60f';
    const appKey = 'db7dab39d8d5991aaecad1ea83e662d5';
    const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setMealList(data.hits); // Update the state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Meal List</h1>
      <ul>
        {mealList.map(meal => (
          <li key={meal.recipe.uri}>
            <h2>{meal.recipe.label}</h2>
            <img src={meal.recipe.image} alt={meal.recipe.label} />
            <p>Meal Type: {meal.recipe.mealType}</p>
            <p>Cuisine Type: {meal.recipe.cuisineType}</p>
            <h3>Ingredients:</h3>
            <ul>
              {meal.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

