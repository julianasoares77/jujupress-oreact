import { useContext } from "react";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";
import { CartContext } from "../service/CartContext";

export function ProductList() {
  const { filteredProducts, loading, error, addToCart, searchTerm, setSearchTerm } = useContext(CartContext);

  return (
    <div className={styles.container}>
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{ color: "#001111" }}
          />
          <p>Carregando produtos...</p>
        </div>
      )}
      {error && <p>Erro ao carregar produtos: {error.message} ❌</p>}
    </div>
  );
}
