import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  cart: [],
  addToCart: () => {},
  updateQtyCart: () => {},
  clearCart: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export function CartProvider({ children }) {
  var category = "smartphones";
  var limit = 30;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      updateQtyCart(product.id, existingProduct.quantity + 1);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  function updateQtyCart(productId, quantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const context = {
    products,
    filteredProducts,
    loading,
    error,
    cart,
    addToCart,
    updateQtyCart,
    clearCart,
    searchTerm,
    setSearchTerm,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
