import {useState} from "react";

export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

export default function Product({prod}: any){
  const [details, setDetails] = useState(false)
  const btnColor = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClass = ['py-2 px-4 border', btnColor]
  return (
    <div>
      <h1>
      {prod.title}
      </h1>
      <span>{prod.price}</span>
      <img className="w-1/6" src={prod.image} />
      <button
        className={btnClass.join(' ')}
        onClick={() => {setDetails(!details)}}>
        { details ? 'Hide' : 'Show'}
      </button>

      {details && <span>
        {prod.description}
      </span>
      }
    </div>
  )
}