import PSITESIS from "../../img/proyects/psitesis.png";
import styles from './Proyects.module.css'
export default function Proyects() {
  return (
    <div>
      <br />
      <h2><u>PROYECTOS</u></h2>
      <ul className={styles.proyectsGrid}>
        <li className={styles.proyect}>
        <h5 className={styles.titleCard}><u>Psitesis</u></h5>
          <img src={PSITESIS} alt="psitesis" width={300} />
          <p>
            Link deploy:{" "}
            <a href="https://psitesis.netlify.app/" target="_blank" without rel="noreferrer" className={styles.link}>
              psitesis.netlify.app
            </a>
          </p>
          <p>
            Repositorio:{" "}
            <a
              href="https://github.com/martinnegro/Psitesis"
              target="_blank" without rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>{" "}
          </p>
        </li>
        <li className={styles.proyect}>
        <h5 className={styles.titleCard}><u>PI Countries</u></h5>
          <img src={PSITESIS} alt="psitesis" width={300} />
          <p>
            Link deploy:{" "}
            <a href="https://psitesis.netlify.app/" target="_blank" without rel="noreferrer" className={styles.link}>
              psitesis.netlify.app
            </a>
          </p>
          <p>
            Repositorio:{" "}
            <a
              href="https://github.com/maksudxx/PI-Countries-FT14a/tree/master"
              target="_blank" without rel="noreferrer"
              className={styles.link}
            >
              GitHub
            </a>{" "}
          </p>
        </li>

      </ul>
    </div>
  );
}
