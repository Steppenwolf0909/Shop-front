import React, {useEffect, useState} from 'react';
import './App.css';
import Product from "./Product";

import axios from "axios";

function App() {
  const [prods, setProds] = useState([])
  async function fetchProds(){
    const resp = await axios.get('https://fakestoreapi.com/products?limit=5')
    setProds(resp.data)
  }

  useEffect(() => {
    fetchProds()
  }, [])

  return (
    <div>
      {prods.map(prod => <Product prod={prod} />)}

    </div>
  );
}

export default App;
