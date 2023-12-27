import "../Styles/Header.css";
import { NavLink } from "react-router-dom";
import img11 from "../Img/img11.png";

const Header = () => {
  return (
    <>
      <header className="header-home">
        <div className="con box-space-between">
          <div className="header-home-content">
            <h1>Select Your New Perfect Setup</h1>
            <p>
              Explore our wide range of cutting-edge devices and accessories to
              curate the ultimate setup that complements your style and enhances
              your productivity.
            </p>

            <NavLink to="/Products" className="bt header-home-button button">
              SHOP NOW
            </NavLink>
          </div>
          <div className="header-home-image">
            <img className="moving-image" src={img11} alt="Headphones" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
