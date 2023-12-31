import "../Styles/ProductsSection.css";
import { items } from "./ProductData";
import { Link } from "react-router-dom";

const Products = () => {
  const filteredItems = items.filter((item) => item);
  return (
    <>
      <div className="Products">
        <h2 className="text-center m-2">Products</h2>
        <div className="Products-container con">
          {filteredItems.map((item) => (
            <div key={item.id} className="items-row">
              <Link
                className="item-container"
                // onClick={() => window.top(0, 0)}
                to={`/products/${item.id}`}
              >
                <div className="item-image-container">
                  <img className="item-img" src={item.img} alt="product" />
                </div>
                <div className="item-description">
                  <p className="item-title">{item.description}</p>
                  <p className="item-price">{item.price}€</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
