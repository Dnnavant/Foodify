
import Header from "./Components/Header-Comp/Header";
import Navbar from "./Components/Navbar-Comp/Navbar";
import Footer from "./Components/Footer-Comp/Footer";
import RecipeSearch from "./Components/RecipeSearch/RecipeSearch";
import AboutUs from "./Components/AboutUs/AboutUs";
import LandingPage from "./Components/LandingPage/LandingPage";


function App() {
	return (
		<div>
			<Header />
			{/* <Navbar /> */}
			{/* <LandingPage/> */}
			<RecipeSearch/>
			<AboutUs />
			<Footer />

		
		</div>
	);
}

export default App;
