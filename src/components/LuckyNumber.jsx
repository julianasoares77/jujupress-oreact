import { useState } from 'react';
import styles from './LuckyNumber.module.css';
import { MailCheck } from 'lucide-react';

export function LuckyNumber() {
    const [luckyNumber, setLuckyNumber ] = useState(0);
    
    function handleClink(){
        setLuckyNumber(Math.ceil(Math.random() * 31));
    }
    return (
        <div className={styles.container}>
            {LuckyNumber ? (
                <h1>Lucky Number = {luckyNumber}</h1>
            ) : ( 
                <h1>Lucky Number 🎲 </h1>
            )}
            <button className={styles.button} onClick={handleClink}>
            I'm feeling lucky today!
            </button>
        </div>
    );
}