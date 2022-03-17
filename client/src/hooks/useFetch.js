import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useFetch(url){
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)

  useEffect(() => {
    const fetchAPI = async () => {
      try{
        const response = await axios.get(url)
        setData(response.data)
      }catch(err){
        setError(err)
      }
    };

    fetchAPI();
  }, [url])

    return { data, error }
}