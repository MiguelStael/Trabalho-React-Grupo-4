import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal, frete, total } =
    useCart();

  const styles = {
    container: {
      textAlign: "center",
      padding: "40px",
    },

    grid: {
      display: "flex",
      gap: "40px",
      justifyContent: "center",
      marginTop: "30px",
    },

    table: {
      width: "700px",
      borderCollapse: "collapse",
      background: "white",
      borderRadius: "10px",
    },

    thtd: {
      padding: "12px",
      borderBottom: "1px solid #ccc",
    },

    input: {
      width: "60px",
      padding: "5px",
      textAlign: "center",
    },

    removeBtn: {
      background: "#ff4c4c",
      color: "white",
      border: "none",
      padding: "6px 10px",
      borderRadius: "4px",
      cursor: "pointer",
    },

    summary: {
      width: "250px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px #0003",
      height: "fit-content",
    },

    finishBtn: {
      marginTop: "15px",
      background: "#0a8f29",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      width: "100%",
      borderRadius: "6px",
      cursor: "pointer",
    },

    empty: {
      textAlign: "center",
      fontSize: "18px",
      padding: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Seu Carrinho</h1>

      <div style={styles.grid}>
        {/* TABELA DO CARRINHO */}
        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.thtd}>Produto</th>
                <th style={styles.thtd}>Preço</th>
                <th style={styles.thtd}>Qtd</th>
                <th style={styles.thtd}>Total</th>
                <th style={styles.thtd}></th>
              </tr>
            </thead>

            <tbody>
              {cart.length === 0 && (
                <tr>
                  <td colSpan="5" style={styles.empty}>
                    Seu carrinho está vazio 😢
                  </td>
                </tr>
              )}

              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={styles.thtd}>{item.name}</td>
                  <td style={styles.thtd}>R${item.price.toFixed(2)}</td>

                  <td style={styles.thtd}>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      style={styles.input}
                    />
                  </td>

                  <td style={styles.thtd}>
                    R${(item.price * item.quantity).toFixed(2)}
                  </td>

                  <td style={styles.thtd}>
                    <button
                      style={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RESUMO */}
        <div style={styles.summary}>
          <h2>Resumo da compra</h2>
          <p>
            <strong>Subtotal:</strong> R${subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Frete:</strong> {frete === 0 ? "Grátis" : `R$${frete}`}
          </p>

          <hr />

          <h3>Total: R${total.toFixed(2)}</h3>

          <button style={styles.finishBtn}>Finalizar</button>
        </div>
      </div>
    </div>
  );
}
