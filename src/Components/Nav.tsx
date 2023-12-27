import {
  IconShoppingCart,
  IconUser,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import logo from "../Img/ggshop.png";
import EmpthyCart from "../Img/EmpthyCart.png";
import { useState, useEffect } from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Nav = () => {
  const { cart, dispatch } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setProfile(!profile);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  //scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const totalSum = cart.items.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <>
      <nav className={`${scrolled ? "scrolled" : ""}`}>
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>

        <ul className="d-none d-lg-flex">
          {navlinks.map((item) => (
            <li key={item.name}>
              <Link className="link" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <span className="nav-icons">
          <div className="online-status">
            <IconUser className="icon nav-icon " onClick={toggleProfile} />
            <div className="online-dot" onClick={toggleProfile}></div>

            {profile && (
              <div className="profile">
                <div className="arrow-up"></div>
                <div className="profile-container">
                  <Link className="sign-button" to="/login">
                    Log in
                  </Link>
                  <p className="mini-text">
                    Dont have account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="cart-status">
            <IconShoppingCart
              className={`icon nav-icon ${openCart ? "active" : ""}`}
              onClick={toggleCart}
            />

            <div
              className={` ${
                cart.items.length === 0 ? "d-none" : "shopping-dot sm-text"
              }  `}
              onClick={toggleCart}
            >
              {cart.items.length}
            </div>
          </div>
          <div className="d-md-block d-lg-none">
            <IconMenu2
              className={`icon nav-icon ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            />
          </div>
        </span>
      </nav>
      <div className="d-lg-none">
        <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
          <div className="slide-links">
            <IconX
              className={`icon nav-icon X-icon ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            />

            <ul>
              {navlinks.map((item) => (
                <li key={item.name}>
                  <Link className="togglelink" to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${openCart ? "active" : ""}`}
        onClick={() => setOpenCart(false)}
      ></div>
      <div className={`cart ${openCart ? "active" : ""}`}>
        <div className="cart-container">
          <div className="cart-top-container">
            <p className="count-text">
              Your Shoping Cart ({cart.items.length})
            </p>
            <IconX
              className={`shopping-x ${openCart ? "open" : ""}`}
              onClick={toggleCart}
            />
          </div>
          <div className="cart-bot-container">
            {cart.items.length === 0 ? (
              <div className="empthy-cart-div">
                <img className="empthy-cart-img" src={EmpthyCart} />
                <h3 className="empthy-h-text">Your cart is empty.</h3>
                <p href="#" className="empthy-p-text">
                  Looks like you have no items in your shopping cart.
                </p>
              </div>
            ) : (
              <>
                <div className="cart-item-container">
                  {cart.items.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                      <img
                        src={cartItem.img}
                        alt="product"
                        className="cart-product-img"
                      />
                      <div className="cart-item-info">
                        <div className="cart-item-line">
                          <p className="fw-text">{cartItem.description}</p>
                          <IconX
                            className={`shopping-x `}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_ITEM",
                                payload: { id: cartItem.id },
                              })
                            }
                          />
                        </div>
                        <div className="cart-item-line cart-item-line-sm">
                          <div className=" product-buttons-smaller">
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "DECREASE_QUANTITY",
                                  payload: { id: cartItem.id },
                                })
                              }
                              className="quantity-button-smaller"
                            >
                              -
                            </button>
                            <p className="quantity-txt-smaller fw-bold">
                              {cartItem.quantity}
                            </p>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "INCREASE_QUANTITY",
                                  payload: { id: cartItem.id },
                                })
                              }
                              className="
                              quantity-button-smaller"
                            >
                              +
                            </button>
                          </div>
                          <p className="fw-text sumwidht">
                            {(cartItem.price * cartItem.quantity).toFixed(2)}€
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-total-container">
                  <div className="cart-total-sum">
                    <p className="fw-text">Subtotal:</p>
                    <p className="fw-text">{totalSum.toFixed(2)}€</p>
                  </div>
                  <div>
                    <button className="cart-buy-button">Go to checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
