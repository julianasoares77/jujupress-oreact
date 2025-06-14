import styles from "./Header.module.css";
import { Apple } from "lucide-react";

export function Header() {
  return (
    <header className={styles.header1}>
      <Apple />
      <h1>Foco, Força, Fé</h1>
    </header>
  );
}