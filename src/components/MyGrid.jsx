// components/MyGrid.jsx
import styles from "./MyGrid.module.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
