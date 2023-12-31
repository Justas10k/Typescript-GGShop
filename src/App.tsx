import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./Styles/Global.css";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/Sign/Login";
import Register from "./Pages/Sign/Register";
import ProductPage from "./Pages/ProductPage.jsx";
import NotFound404 from "./Pages/NotFound404.js";

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
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
