import { useState } from "react";
import { items } from "../Components/ProductData";
import { useParams } from "react-router-dom";
import "../Styles/ProductPage.css";
import Nav from "../Components/Nav";
import NewsLetter from "../Components/NewsLetter";
import { useCart } from "../Context/CartContext";

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: { ...item[0], quantity } });
    showNotify();
  };

  const [quantity, setQuantity] = useState(1);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity: number) => {
    return quantity * item[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <Nav />
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className="product-page">
        <div className="con">
          <div className="product">
            <div className="product-left">
              <div className="big-img">
                <img
                  src={item[0].otherImgs[currentImageIndex]}
                  alt="product"
                  className="product-img"
                />
              </div>
              <div className="imgs-scroll">
                <div className="small-imgs">
                  {item[0].otherImgs.map((img, index) => (
                    <img
                      key={index}
                      onMouseOver={() => changeImage(index)}
                      src={img}
                      alt="product"
                      className="product-mini-img"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="product-structure">
                <h3 className="fw-bold">{item[0].description}</h3>
                <p className="product-discription">{item[0].specs}</p>
                <div className="product-quantity-container">
                  <p className="fw-bold sum">Quantity</p>
                  <div className="product-buttons">
                    <button onClick={decrease} className="quantity-button">
                      -
                    </button>
                    <p className="quantity-txt fw-bold">{quantity}</p>
                    <button onClick={increase} className="quantity-button">
                      +
                    </button>
                  </div>
                  <p className="fw-bold sum">
                    {calcPrice(quantity).toFixed(2)}€
                  </p>
                </div>
                <div className="add-cart-button">
                  <button onClick={addToCart} className="add-button">
                    ADD TO CART
                  </button>

                  <button className="buy-button">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default ProductPage;
