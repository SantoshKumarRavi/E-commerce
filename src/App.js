import "./App.css";
import Home from "../src/pages/Home";
import CategoryProducts from "./pages/CategoryProducts";
import NotFound from "../src/pages/NotFound";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute Element={Home} />} />
        <Route path="/category/:name" element={<PrivateRoute Element={CategoryProducts} />} />
        <Route path="/cart" element={<PrivateRoute Element={Cart} />} />
        <Route path="*" element={<PrivateRoute Element={NotFound} />} />
      </Routes>
  )
}

export default App;
