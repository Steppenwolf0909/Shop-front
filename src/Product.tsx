import {useState} from "react";


export default function Product(props: any){
  const [details, setDetails] = useState(false)
  const btnColor = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClass = ['py-2 px-4 border', btnColor]
  return (
    <div>
      <h1>
      {props.prod.title}
      </h1>
      <span>{props.prod.price}</span>
      <img className="w-1/6" src={props.prod.image} />
      <button
        className={btnClass.join(' ')}
        onClick={() => {setDetails(!details)}}>
        { details ? 'Hide' : 'Show'}
      </button>

      {details && <span>
        {props.prod.description}
      </span>
      }
    </div>
  )
}