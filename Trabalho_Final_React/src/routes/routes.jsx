import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../Pages/Login/index.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { Layout } from "../Pages/Layout/index.jsx";
import { About } from "../Pages/About/index.jsx";
import Cart from "../Pages/Cart/Cart.jsx";   
import { CartProvider } from "../context/CartContext"; // ✅ IMPORTA O PROVIDER

export const AppRoutes = () => {
  return (
    <CartProvider>   {/* ✅ ENVOLVE TODA A APLICAÇÃO */}
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
  );
};
