import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<ul className="navbar-menu">
					<li className="navbar-item">Home</li>
					{/* Add the following for Categories */}
					<li className="navbar-item navbar-dropdown">
						Category
						<ul className="dropdown-menu">
							{/* Loop through API-generated categories */}
							<li className="dropdown-item">Category 1</li>
							<li className="dropdown-item">Category 2</li>
						</ul>
					</li>
					{/* Add the following for Cuisine */}
					<li className="navbar-item navbar-dropdown">
						Cuisine
						<ul className="dropdown-menu">
							{/* Loop through API-generated cuisines */}
							<li className="dropdown-item">Cuisine 1</li>
							<li className="dropdown-item">Cuisine 2</li>
						</ul>
					</li>
					<li className="navbar-item">Random Meal</li>
					<li className="navbar-item">About Us</li>
				</ul>
			</div>
			{/* need to add hamburger icon for site responsiveness */}
			{/* <div className="hamburger">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div> */}
		</nav>
	);
}
