/* eslint-disable no-unused-vars */
import "./App.css";

// compnetnte
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Blogs from "./components/Blogs";
import Cart from "./components/Cart";
import Shop from "./components/Shope";
import Login from "./components/Login";
import ComingSoon from "./components/ComingSoon";

// react route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
