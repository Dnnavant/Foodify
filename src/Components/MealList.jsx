import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "../Components/RecipeCards/RecipeCards";

export default function MealList() {
	const [search, setSearch] = useState(false);
	const [text, setText] = useState("");
	const [mealList, setMealList] = useState([]);

	const appId = "c641e60f";
	const appKey = "db7dab39d8d5991aaecad1ea83e662d5";
	const apiUrl = `https://api.edamam.com/search?q=${text}&app_id=${appId}&app_key=${appKey}`;

	const changeHandler = (e) => {
		setText(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setSearch(true);
	};

	useEffect(() => {
		if (search === true) {
			fetch(apiUrl)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					setMealList(data.hits);
					setSearch(false);
					setText("");
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
		}
	}, [search]);

	return (
		<div>
			<SearchBar
				onSubmit={submitHandler}
				onChange={changeHandler}
				value={text}
			/>
			<h1>Recipe List</h1>
			<ul>
				{mealList.map((meal) => (
					<RecipeCard key={meal.recipe.uri} recipe={meal.recipe} />
				))}
			</ul>
		</div>
	);
}
