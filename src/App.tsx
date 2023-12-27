import "bootstrap/dist/css/bootstrap.min.css";

import "./Styles/Global.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/Sign/Login";
import Register from "./Pages/Sign/Register";
import ProductPage from "./Pages/ProductPage.jsx";

import { CartProvider } from "./Context/CartContext.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;