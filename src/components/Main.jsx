// components/Main.jsx
import styles from "./Main.module.css";

const cards = [0, 1, 2, 3, 4];

export function Main() {
  const randomNumbers = cards.map(() => Math.floor(Math.random() * 1000));

  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <img
              src={`https://picsum.photos/200/300?random=${randomNumbers[index]}`}
              alt={`Random ${index}`}
            />
            <h2>My Text {index}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
