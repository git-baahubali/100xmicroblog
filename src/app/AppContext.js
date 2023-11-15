import React, { createContext, useContext, useState, useMemo } from 'react';

// Creating a context with default values
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('');


    const contextValue = useMemo(() => {
        return { Name, setName, Email, setEmail };
    }, [Name, Email]);
    // You can add more state variables as needed

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};
