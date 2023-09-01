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
      <span className="header--search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
      <i className="fas fa-search"></i>
    </button>
      </span>
    </div>
    <div className="right-section">
      {<ChangeLanguage/>}
    </div>
  </div>
</>
	);
}