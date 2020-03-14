import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { MAIN_URL } from 'constants/auth';
import useLocalStorage from 'hooks/useLocalStorage';

export default (url) => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isError, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setLoading(true);
  }, []);

  useEffect(() => {
    let isSkipResponseAfterDestroy = false;
    const requestOption = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : '',
        },
      },
    };
    if (isLoading) {
      axios(MAIN_URL + url, requestOption)
        .then((res) => {
          if (!isSkipResponseAfterDestroy) {
            setResponse(res.data);
          }
        })
        .catch((err) => {
          if (!isSkipResponseAfterDestroy) {
            setError(err.response.data);
          }
        })
        .finally(() => {
          if (!isSkipResponseAfterDestroy) {
            setLoading(false);
          }
        });
    }

    return () => {
      isSkipResponseAfterDestroy = true;
    };
  }, [isLoading, options, url, token]);

  return [{ response, isLoading, isError }, doFetch];
};
