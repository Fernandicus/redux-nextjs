import { useCounterActions } from "../lib/actions";
import styles from '../styles/styles.module.css'

export default function Home() {
  const { increaseBy, decreaseBy, getState } = useCounterActions();
  const amount = 10;

  return (
    <main className={styles.main}>
      <h1>Total: <span className={styles.counter}>{getState.amount}</span></h1>
      <div>
        <button className={styles.counterButton} onClick={() => decreaseBy(amount)}>Decrease -{amount}</button>
        <button className={styles.counterButton} onClick={() => increaseBy(amount)}>Increase +{amount}</button>
      </div>
    </main>
  );
}
