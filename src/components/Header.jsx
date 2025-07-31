import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom"; 
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h1>TJA Megastore</h1>
      </Link>
      <Link to="/cart" className={styles.link}>
        <div className={styles.cartInfo}>
          <ShoppingBasket size={32} />
          
          {totalQuantity > 0 && (
            <span className={styles.cartQuantityIndicator}>{totalQuantity}</span>
          )}
          <p>
            Total: R${" "}
            {cart
              .reduce((total, product) => total + product.price * product.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}

