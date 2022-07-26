import "./App.css";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/category" element={Category} />
        <Route path="/cart" element={Cart} />
        <Route path="/product-description" element={ProductDescription} />
      </Routes>
    </div>
  );
}

export default App;
