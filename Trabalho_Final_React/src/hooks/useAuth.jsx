import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const TOKEN_KEY = 'pokecofre_auth_token';

    const login = async (username, password) => {
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 500));

        if (username === 'pokémon' && password === 'lendario') {
            const token = `token-${username}-${Date.now()}`;
            localStorage.setItem(TOKEN_KEY, token);
            setUser({ name: 'Colecionador Logado', token: token });
            setIsLoading(false);
            return { success: true };
        } else {
            setIsLoading(false);
            return { success: false };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem(TOKEN_KEY);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem(TOKEN_KEY);
        if (storedToken) {
            setUser({ name: 'Colecionador Logado', token: storedToken });
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
