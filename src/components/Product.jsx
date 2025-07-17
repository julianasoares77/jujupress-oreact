import styles from "./Product.module.css";

export function Product({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <p className={styles.productDescription}>{product.description}</p>
      <button onClick={() => addToCart(product)} className={styles.addToCartButton}>Add to cart</button>
    </div>
  );
}