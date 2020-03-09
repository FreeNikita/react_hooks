import {useState, useEffect, useCallback} from 'react';
import axios from 'axios'
import { MAIN_URL } from "constants/auth";
import useLocalStorage from "hooks/useLocalStorage";

export default url => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse ] = useState(null);
    const [isError, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [token] = useLocalStorage('token')

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setLoading(true)
    }, []);

    useEffect(() => {
        const requestOption = {
            ...options,
            ...{
                headers: {
                    authorization: token ? `Token ${token}` : ''
                }
            }
        }
        if(isLoading){
            axios(MAIN_URL + url,  requestOption)
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
    }, [isLoading, options, url, token]);

    return [{response, isLoading, isError}, doFetch]
}