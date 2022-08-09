import '../App.css';
import Product, {IProduct} from "../Product";
import useProducts from "../hooks/products";
import {Loader} from "../components/loader";
import {ErrorMessage} from "../components/error";
import {Modal} from "../components/modal";
import {CreateProd} from "../components/createProd";
import {useState} from "react";

function ProductsPage() {
  const {prods, loading, error, saveProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    saveProduct(product)
  }
  return (

    <div className="container mx-auto max-w-2xl pt-5">
      <button className="absolute bottom-5 right-5 rounded-full bg-red-400 text-white px-6" onClick={() => setModal(true)}>+</button>
      {modal && <Modal title="Create new prod" onClose={()=>setModal(false)}>
          <CreateProd onCreate={createHandler}/>
      </Modal>
      }
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {prods.map(prod => <Product prod={prod} />)}

    </div>
  );
}

export default ProductsPage;
