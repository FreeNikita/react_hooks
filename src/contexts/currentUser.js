import React, { createContext, useState } from 'react'

export const CurrentUserContext = createContext([{}, () => {}]);

export const CurrentUserProvider = ({children}) => {
    const [ state, setState] = useState({
        isLoading: false,
        isLoggedIn: null,
        currentUser: null,
    });

    return (
        <CurrentUserContext.Provider value={[state, setState]}>
            {children}
        </CurrentUserContext.Provider>
    )
};