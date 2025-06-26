import { useState } from 'react';
import styles from './LuckyNumber.module.css';

export function LuckyNumber() {
    const [luckyNumber, setLuckyNumber] = useState(0);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState('');

    function handleClick() {
        const newNumber = Math.ceil(Math.random() * 20);
        setLuckyNumber(newNumber);
        if (history.includes(newNumber)) {
            setError('Já foi sorteado!');
        } else {
            setHistory([...history, newNumber]);
            setError('');
        }
    }

    return (
        <div className={styles.container}>
            {luckyNumber ? (
                <h1>Lucky Number = {luckyNumber}</h1>
            ) : (
                <h1>Lucky Number 👀</h1>
            )}
            <button className={styles.button} onClick={handleClick}>
                i'm feeling lucky today!
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {history.length > 0 && (
                <div>
                    <h3>Lucky Numbers Array:</h3>
                    <p>[{history.join(', ')}]</p>
                </div>
            )}
        </div>
    );
}
