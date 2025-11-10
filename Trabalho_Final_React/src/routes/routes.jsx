import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../Pages/Login/index.jsx";
import { Home } from "../Pages/Home/Home.jsx";
import { Layout } from "../Pages/Layout/index.jsx";
import { About } from "../Pages/About/index.jsx";
import { Store } from "../Pages/Store/Store.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { Footer }  from '../components/Footer/index.jsx';


export const AppRoutes = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
    </AuthProvider>
  );
};
