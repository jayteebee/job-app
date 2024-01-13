import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': "b8fc303440msh833573d8d0d9838p1b219bjsn4077b0fe04f7",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

      const fetchData = async () => {
        setIsLoading(true)

        try {
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("There's an error")
        } finally {
            setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      }, [])
      
      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, refetch}
}

export default useFetch