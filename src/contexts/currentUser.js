import React, { createContext, useState } from 'react'

// eslint-disable-next-line no-unused-vars
export const CurrentUserContext = createContext([{}, (state) => {}]);

export const CurrentUserProvider = ({children}) => {
    const [ state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: {},
    });

    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    )
};