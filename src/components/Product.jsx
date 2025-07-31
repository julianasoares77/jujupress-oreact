import styles from "./Product.module.css";

export function Product({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
      <p className={styles.productDescription}>{product.description}</p>
      <button
        className={styles.addToCartButton}
        onClick={() => addToCart(product)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
