

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [myPokemonList, setMyPokemonList] = useState([]);


    const addPokemonToList = (pokemon) => {
   
        if (!pokemon || !pokemon.name || !pokemon.url) return; 

        const exists = myPokemonList.some(item => item.name === pokemon.name);
        
        if (!exists) {
            setMyPokemonList(prevList => [...prevList, pokemon]);
            console.log(`Pokémon adicionado: ${pokemon.name}`);
        } else {
            console.log(`Pokémon ${pokemon.name} já está na lista.`);
        }
    };


    const removePokemonFromList = (name) => {
        setMyPokemonList(prevList => prevList.filter(item => item.name !== name));
        console.log(`Pokémon removido: ${name}`);
    };

    return (
        <CartContext.Provider value={{ myPokemonList, addPokemonToList, removePokemonFromList }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);