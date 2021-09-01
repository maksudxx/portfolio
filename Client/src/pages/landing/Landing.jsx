import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container} align="center">
      <div className={styles.title}>
        <h1>FACUNDO MAKSUD</h1>
        <h3>FULL STACK DEVELOPER</h3>
      </div>

      <Link to="/home" className={styles.link}>
        <button  className={styles.boton}>INICIO</button>
      </Link>
    </div>
  );
}
