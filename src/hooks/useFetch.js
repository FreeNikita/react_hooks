import {useState, useEffect} from 'react';
import axios from 'axios'
import { MAIN_URL } from "../constants/auth";

export default url => {
    const [isLoading, setLoading] = useState(false)
    const [response, setResponse ] = useState(null)
    const [isError, setError] = useState(null)
    const [options, setOptions] = useState({})

    const doFetch = (options = {}) => {
        setOptions(options)
        setLoading(true)
    }

    useEffect(() => {
        if(isLoading){
            axios(MAIN_URL + url,  options)
                .then( res => {
                    setResponse(res.data)
                })
                .catch( err => {
                    setError(err.response.data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [isLoading, options, url])

    return [{response, isLoading, isError}, doFetch]
}