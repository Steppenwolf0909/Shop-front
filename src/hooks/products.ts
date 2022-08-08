import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";

export default function useProducts() {
  const [prods, setProds] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProds() {
    try {
      setError('')
      setLoading(true)
      const resp = await axios.get('https://fakestoreapi.com/products?limit=5')
      setProds(resp.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProds()
  }, [])
  return {prods, error, loading}
}
