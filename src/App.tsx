import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";

function App() {
  return(
  <Routes>
    <Route path="/" element={<ProductsPage/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  )
}

export default App;
