import {useState} from "react";
import {IProduct} from "../Product";
import axios from "axios";
import {ErrorMessage} from "./error";


const productData: IProduct =  {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate:10,
    count: 11
  }
}

interface CreateProductProps {
  onCreate: (prod: IProduct) => void
}

export function CreateProd({onCreate}: CreateProductProps){
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const submitHandler = async (event: React.FormEvent) =>{
    event.preventDefault()
    setError('')

    if (value.trim().length===0){
      setError('Enter valid data!')
      return
    }
    productData.title = value
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
    onCreate(response.data)
  }

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
      type="text"
      className="border py-2 px-4 mb-2"
      placeholder="Enter smth"
      onChange={changeHandler}
      />
      <button type="submit" className="py-2 px-4 border bg-yellow-400">Create</button>
      {error && <ErrorMessage error={error}/>}
    </form>
  )
}