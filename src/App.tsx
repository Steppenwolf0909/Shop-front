import './App.css';
import Product from "./Product";
import useProducts from "./hooks/products";
import {Loader} from "./components/loader";
import {ErrorMessage} from "./components/error";
import {Modal} from "./components/modal";
import {CreateProd} from "./components/createProd";

function App() {
  const {prods, loading, error} = useProducts()
  return (

     <div className="container mx-auto max-w-2xl pt-5">
       <Modal title="Create new prod">
         <CreateProd/>
       </Modal>
       {loading && <Loader/>}
       {error && <ErrorMessage error={error}/>}
      {prods.map(prod => <Product prod={prod} />)}

    </div>
  );
}

export default App;
