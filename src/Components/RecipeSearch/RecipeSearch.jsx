import React, { useState } from "react";
import "./RecipeSearch.css";

function RecipeSearch() {
	const [searchQuery, setSearchQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const APP_ID = "c641e60f";
	const APP_KEY = "db7dab39d8d5991aaecad1ea83e662d5";

	const handleSearch = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
			const response = await fetch(baseURL);
			const data = await response.json();
			setResults(data.hits);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return (
		<div className="RecipeSearch-container">
			<h1 className="brand">Foodify Yourself</h1>
			<h2 className="brand">&</h2>
			<form className="SearchBar" onSubmit={handleSearch}>
				<div className="SearchBar-container">
					<input
						className="SearchBar-input"
						type="text"
						placeholder="Search Your Recipe..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					<button className="RecipeSearch-button" type="submit">
						<i className="fas fa-search"></i>
					</button>
				</div>
			</form>

			{/* Search Result Below */}
			<div className={`search-result ${isLoading ? "loading" : ""}`}>
				{results.map((result, index) => (
					<div className="item" key={index}>
						<img src={result.recipe.image} alt="img" />
						<div className="flex-container">
							<h1 className="title">{result.recipe.label}</h1>
							<a className="view-btn" target="_blank" href={result.recipe.url}>
								View Recipe
							</a>
						</div>
						<p className="item-data">
							Calories: {result.recipe.calories.toFixed(2)}
						</p>
						{/* <p className="item-data">Diet label: {result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p> */}
						{/* <p className="item-data">Health labels: {result.recipe.healthLabels}</p> */}
					</div>
				))}
			</div>
		</div>
	);
}

export default RecipeSearch;
