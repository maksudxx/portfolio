import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
      <div className={styles.title}>
        <p className={styles.parrafo}>FACUNDO MAKSUD</p>
        <p>FULL STACK DEVELOPER</p>
      </div>
      <Link to="/home" className={styles.link}>
        <button  className={styles.boton}>INICIO</button>
        </Link>
      </div>
    </div>
  );
}
