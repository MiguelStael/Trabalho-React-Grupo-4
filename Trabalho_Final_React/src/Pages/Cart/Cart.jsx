
import { useCart } from "../../context/CartContext";
import styles from "./CartStyle.jsx";

export default function Cart() {
    const { myPokemonList, removePokemonFromList } = useCart();

    const total = myPokemonList.reduce((sum, item) => sum + (Number(item.price || 0) * (item.quantity || 1)), 0);

    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.titulo}>
                    🛒 Meu Carrinho ({myPokemonList.reduce((s, i) => s + (i.quantity || 1), 0)} itens)
                </h1>

                <hr style={styles.separador} />

                {myPokemonList.length === 0 ? (
                    <p style={styles.emptyMessage}>
                        Seu carrinho está vazio. Adicione alguns Pokémon!
                    </p>
                ) : (
                    <div style={styles.listContainer}>
                        {myPokemonList.map((pokemon) => (
                            <div key={pokemon.id} style={styles.listItem}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} style={{ width: 56, height: 56 }} />}
                                    <div>
                                        <div style={styles.itemName}>{pokemon.name}</div>
                                        <div style={{ fontSize: 12, color: '#666' }}>R$ {Number(pokemon.price).toFixed(2)} x {pokemon.quantity || 1}</div>
                                    </div>
                                </div>

                                <div style={styles.itemDetails}>
                                    <div style={{ marginRight: 12, fontWeight: 600 }}>Subtotal: R$ {(Number(pokemon.price) * (pokemon.quantity || 1)).toFixed(2)}</div>

                                    <button
                                        style={styles.removeBtn}
                                        onClick={() => removePokemonFromList(pokemon.name)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div style={{ marginTop: 20, textAlign: 'right', fontSize: 18 }}>
                            <strong>Total: R$ {total.toFixed(2)}</strong>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
