import React from 'react';
import { useAuth } from '../hooks/useAuth.jsx'; 
import { AuthContext } from './AuthUtils.jsx'; 


export const AuthProvider = ({ children }) => {
    const auth = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};
