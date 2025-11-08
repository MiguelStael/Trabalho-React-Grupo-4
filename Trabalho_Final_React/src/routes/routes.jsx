import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from '../Pages/Login/index.jsx'
import { Home } from '../Pages/Home/Home.jsx';
import { Layout } from '../Pages/Layout/index.jsx';
import { About } from '../Pages/About/index.jsx'
import { AuthProvider } from '../context/AuthContext.jsx'


export const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
