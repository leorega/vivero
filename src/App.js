import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import SocialBar from "./components/socialBar/SocialBar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <SocialBar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:title" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
