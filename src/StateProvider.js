import React, { useContext, createContext, useReducer } from 'react'
import userReducer from './reducers/userReducer';

const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

const StateProvider = ({ children }) => {

    const initState = {
        user: null
    };
    const [state, dispatch] = useReducer(userReducer, initState);

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider
