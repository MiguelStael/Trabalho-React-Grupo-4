

import React, { createContext, useState, useContext, useRef } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [myPokemonList, setMyPokemonList] = useState([]);

    // pokemon expected shape: { name, url, sprite, price }
    const addPokemonToList = (pokemon) => {
        if (!pokemon || !pokemon.name) return;

        setMyPokemonList(prevList => {
            const index = prevList.findIndex(item => item.name === pokemon.name);
            let newList;
            if (index === -1) {
                // add with quantity 1
                newList = [...prevList, { ...pokemon, quantity: 1 }];
            } else {
                // increment quantity
                const copy = [...prevList];
                const existing = copy[index];
                copy[index] = { ...existing, quantity: (existing.quantity || 1) + 1 };
                newList = copy;
            }

            // compute new total and show notification with count
            const newTotal = newList.reduce((s, it) => s + (it.quantity || 1), 0);
            // showNotification is defined below; it's safe to call here
            showNotification(pokemon.name, newTotal);

            return newList;
        });

        console.log(`Pokémon adicionado: ${pokemon.name}`);
    };

    // Notification state to show quick alert in navbar
    const [notification, setNotification] = useState({ show: false, item: null, count: 0 });
    const notifTimeoutRef = useRef(null);

    const showNotification = (itemName = null, count = null, duration = 3000) => {
        // clear previous timeout if any
        if (notifTimeoutRef.current) {
            clearTimeout(notifTimeoutRef.current);
        }
        setNotification({ show: true, item: itemName, count: count ?? 0 });
        notifTimeoutRef.current = setTimeout(() => {
            setNotification({ show: false, item: null, count: 0 });
            notifTimeoutRef.current = null;
        }, duration);
    };

    // remove one unit; if quantity > 1, decrement, else remove entirely
    const removePokemonFromList = (name) => {
        setMyPokemonList(prevList => {
            const index = prevList.findIndex(item => item.name === name);
            if (index === -1) return prevList;
            const copy = [...prevList];
            if ((copy[index].quantity || 1) > 1) {
                copy[index] = { ...copy[index], quantity: copy[index].quantity - 1 };
                return copy;
            }
            return copy.filter(item => item.name !== name);
        });
        console.log(`Pokémon removido: ${name}`);
    };

    const clearNotification = () => {
        if (notifTimeoutRef.current) {
            clearTimeout(notifTimeoutRef.current);
            notifTimeoutRef.current = null;
        }
        setNotification({ show: false, item: null });
    };

    return (
        <CartContext.Provider value={{ myPokemonList, addPokemonToList, removePokemonFromList, notification, showNotification, clearNotification }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);