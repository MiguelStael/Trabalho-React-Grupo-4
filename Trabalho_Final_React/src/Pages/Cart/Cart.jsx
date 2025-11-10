import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartStyle.jsx";

export default function Cart() {
  const { myPokemonList, addPokemonToList, removePokemonFromList } = useCart();

  const subtotal = myPokemonList.reduce((acc, item) => {
    const price = Number(item.price);
    return acc + item.quantity * price;
  }, 0);

  const frete = subtotal > 0 ? 7.99 : 0;
  const total = subtotal + frete;

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Carrinho de Compras</h1>

      <div style={styles.layout}>
    
        <div style={styles.itemsCard}>
          {myPokemonList.length === 0 ? (
            <p style={styles.emptyMessage}>Seu carrinho está vazio.</p>
          ) : (
            myPokemonList.map((pokemon) => (
              <div key={pokemon.name} style={styles.itemRow}>
                
         
                <div style={styles.itemInfo}>
                  <img
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    style={styles.img}
                  />
                  <div>
                    <p style={styles.pokemonName}>{pokemon.name}</p>
                    <small style={styles.smallText}>
                      {(pokemon.types || []).join(", ")}
                    </small>
                  </div>
                </div>

           
                <div style={styles.price}>
                  R$ {Number(pokemon.price).toFixed(2)}
                </div>

             
                <div style={styles.qtyBox}>
                  <button
                    style={styles.qtyBtn}
                    onClick={() => removePokemonFromList(pokemon.name)}
                  >
                    –
                  </button>

                  <span style={styles.qtyNumber}>{pokemon.quantity}</span>

                  <button
                    style={styles.qtyBtn}
                    onClick={() => addPokemonToList(pokemon)}
                  >
                    +
                  </button>
                </div>

             
                <div style={styles.totalItem}>
                  R$ {(pokemon.quantity * pokemon.price).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

       
        <div style={styles.summaryCard}>
          <h2 style={styles.summaryTitle}>Resumo</h2>

          <div style={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>

          <div style={styles.summaryRow}>
            <span>Frete:</span>
            <span>{frete === 0 ? "Grátis" : `R$ ${frete.toFixed(2)}`}</span>
          </div>

          <hr style={styles.line} />

          <div style={styles.summaryTotal}>
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button style={styles.checkoutBtn}>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
