import React, { createContext, useContext, useState } from 'react';

// Creating a context with default values
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('');

    const context = { Name, setName, Email, setEmail}
    // You can add more state variables as needed

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};
