import styles from "./Cart.module.css";

export function Cart({ cart, increaseQuantity, decreaseQuantity, clearCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2>Carrinho de Compras</h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <button className={styles.removeAll} onClick={clearCart}>
            🗑️ Remover tudo do carrinho
          </button>

          <ul className={styles.itemList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.details}>
                  <h3>{item.title}</h3>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
            <div className={styles.buttons}>
              <button className={styles.continue}>CONTINUAR</button>
              <button className={styles.back}>VOLTAR</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}