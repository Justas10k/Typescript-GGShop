import "../Styles/Header.css";
import { Link } from "react-router-dom";
import img11 from "../Img/img11.png";

const Header = () => {
  return (
    <>
      <header className="header-home">
        <div className="con box-space-between">
          <div className="header-home-content">
            <h1>Select Your New Perfect Setup</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              tempora temporibus, sunt sapiente adipisci odio nulla quia illo
              laborum blanditiis eaque ex accusantium pariatur!
            </p>

            <Link to="/Products" className="bt header-home-button button">
              SHOP NOW
            </Link>
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
