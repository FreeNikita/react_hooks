import { useEffect, useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { CurrentUserContext } from 'contexts/currentUser';
import useLocalStorage from 'hooks/useLocalStorage';
import { TYPE_SET_UNAUTHORIZED, TYPE_LOADING, TYPE_SET_AUTHORIZED } from 'constants/reduceType';

const CurrentUserChecker = ({ children }) => {
  const [, dispatch] = useContext(CurrentUserContext);
  const [{ response }, doFetch] = useFetch('/user');
  const [token] = useLocalStorage('token');

  useEffect(() => {
    if (!token) {
      dispatch({ type: TYPE_SET_UNAUTHORIZED });
      return;
    }

    doFetch();
    dispatch({ type: TYPE_LOADING });
  }, [doFetch, dispatch, token]);

  useEffect(() => {
    if (!response) {
      return;
    }

    dispatch({ type: TYPE_SET_AUTHORIZED, payload: response.user });
  }, [response, dispatch]);
  return children;
};

export default CurrentUserChecker;
