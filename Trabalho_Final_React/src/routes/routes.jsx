import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/index.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { Layout } from "../Pages/Layout/index.jsx";
import { About } from "../Pages/About/index.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
};
