import ChangeLanguage from '../ChangeLanguage';
import "./Header.css";

export default function Header() {
  
	return (
		<>
  <div className="nav--container">
    <div className="left-section">
      <a href="#">
        <img className="logo" src="./images/foodify-logo.png" alt="Foodify-logo" />
      </a>
      <span className="nav--name">oodify</span>
    </div>
    <div className="middle-section">
    <nav className="navbar">
			<div className="navbar-container">
				<ul className="navbar-menu">
					<li className="navbar-item">Home</li>
					<span><li className="navbar-item">About Us</li></span>
				</ul>
			</div>
		</nav>


      {/* <span className="header--search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
      <i className="fas fa-search"></i>
    </button>
      </span> */}
    </div>
    <div className="right-section">
      {<ChangeLanguage/>}
    </div>
  </div>
</>
	);
}