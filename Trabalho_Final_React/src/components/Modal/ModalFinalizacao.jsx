import React from "react";
import styles from "./ModalStyle.jsx";

export default function ModalFinalizacao({ total, itemCount, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.pokeball}>
        <div style={styles.innerCircle}>
          <h2 style={styles.title}>Compra Concluída!</h2>
          <p style={styles.text}>
            Parabéns, treinador! <br />
            Seus Pokémons foram capturados com sucesso!
          </p>

          <div style={styles.summary}>
            <p>
              <strong>Total:</strong> R$ {total.toFixed(2)}
            </p>
            <p>
              <strong>Pokémons:</strong> {itemCount}
            </p>
          </div>

          <button style={styles.button} onClick={onClose}>
            Continuar Jornada
          </button>
        </div>
      </div>
    </div>
  );
}
