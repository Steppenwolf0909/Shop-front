import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import {Navigation} from "./components/navigation";
import {HomePage} from './pages/homePage'

function App() {
  return(
    <>
    <Navigation/>
  <Routes>
    <Route path="/" element={<ProductsPage/>} />
    <Route path="/home" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
    </>
  )
}

export default App;
