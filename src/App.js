import "./App.css";
import Home from "../src/pages/Home";
import CategoryProducts from "./pages/CategoryProducts";
import NotFound from "../src/pages/NotFound";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
