import React, { useContext, createContext } from 'react'

const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    return (
        <StateContext.Provider value={{}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider
