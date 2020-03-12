import React, { createContext, useReducer } from 'react';
import { TYPE_LOADING, TYPE_SET_AUTHORIZED, TYPE_SET_UNAUTHORIZED } from 'constants/reduceType';

// eslint-disable-next-line no-unused-vars
export const CurrentUserContext = createContext([{}, ({ type, action }) => {}]);

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  currentUser: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_LOADING:
      return { ...state, isLoading: true };
    case TYPE_SET_AUTHORIZED:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        currentUser: action.payload,
      };
    case TYPE_SET_UNAUTHORIZED: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export const CurrentUserProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
