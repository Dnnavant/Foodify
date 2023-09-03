
export default function RecipeCards() {
  return(
    <div className="recipe-card">
    <h2>{recipe.label}</h2>
    <img src={recipe.image} alt={recipe.label} />
    <p>Meal Type: {recipe.mealType}</p>
    <p>Cuisine Type: {recipe.cuisineType}</p>
    <h3>Ingredients:</h3>
    <ul>
      {recipe.ingredientLines.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
);
}