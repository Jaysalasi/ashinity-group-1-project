import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from  './Pages/Shop'
import Header from "./components/Header";
import BrowseRangeComponent from "./components/BrowseRangeComponent";
import ProductsComponent from "./components/ProductsComponent";
import InspirationComponent from "./components/InspirationComponent";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FurnitureComponent from "./components/FurnitureComponent";
import "./App.css";

function App() {
  return (
    <div className="app" >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Hero />
      <BrowseRangeComponent />
      <ProductsComponent />
      <InspirationComponent />
      <FurnitureComponent />
      <Footer />
    </div>
  );
}

export default App;

