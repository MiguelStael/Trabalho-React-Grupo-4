import React from 'react';
import { useCart } from "../../context/CartContext";
import styles from "./CartStyle.jsx";

export default function Cart() {
    const { myPokemonList, removePokemonFromList } = useCart();

    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.titulo}>
                    ⭐ Minha Lista Pokémon ({myPokemonList.length})
                </h1>

                <hr style={styles.separador} />

                {myPokemonList.length === 0 ? (
                    <p style={styles.emptyMessage}>
                        Sua lista de favoritos está vazia. Adicione alguns Pokémon!
                    </p>
                ) : (
                    <div style={styles.listContainer}>
                        {myPokemonList.map((pokemon) => (
                            <div key={pokemon.name} style={styles.listItem}>
                                <span style={styles.itemName}>{pokemon.name}</span>

                                <div style={styles.itemDetails}>
                                    {pokemon.url && (
                                        <small>ID: {pokemon.url.split('/').slice(-2, -1)}</small>
                                    )}

                                    <button
                                        style={styles.removeBtn}
                                        onClick={() => removePokemonFromList(pokemon.name)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
