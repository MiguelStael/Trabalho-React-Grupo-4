import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal, frete, total } =
    useCart();

  return (
    <div className="cart-container">
      <h1>Seu Carrinho</h1>

      <div className="cart-grid">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Qtd</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.length === 0 && (
                <tr>
                  <td colSpan="5" className="empty">
                    Seu carrinho está vazio 😢
                  </td>
                </tr>
              )}

              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>R${item.price.toFixed(2)}</td>

                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                  </td>

                  <td>R${(item.price * item.quantity).toFixed(2)}</td>

                  <td>
                    <button
                      className="remove-btn"
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

        <div className="summary">
          <h2>Resumo da compra</h2>

          <p>
            <strong>Subtotal:</strong> R${subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Frete:</strong> {frete === 0 ? "Gratis" : `R$${frete}`}
          </p>

          <hr />

          <h3>Total: R${total.toFixed(2)}</h3>

          <button className="finish-btn">Finalizar</button>
        </div>
      </div>
    </div>
  );
}
