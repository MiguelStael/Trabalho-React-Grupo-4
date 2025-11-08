import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const TOKEN_KEY = 'verificar_auth_token';

    const login = async (username, password) => {
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (username === 'treinador' && password === 'verificar-secreto') {
                const token = `token-${username}-${Date.now()}`;
                localStorage.setItem(TOKEN_KEY, token);
                setUser({ name: username, token: token });
                return { success: true };
            } else {
                throw new Error("ACESSO NEGADO: CÓDIGO INVÁLIDO. Tente 'treinador' e 'verificar-secreto'.");
            }
        } catch (error) {
            throw error; 
        } finally {
            setIsLoading(false);
        }
    };
    
    const logout = () => {
        setUser(null);
        localStorage.removeItem(TOKEN_KEY);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        if (storedToken) {
            setUser({ name: 'Treinador Logado', token: storedToken });
        }
    }, []);

    return {
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
    };
};