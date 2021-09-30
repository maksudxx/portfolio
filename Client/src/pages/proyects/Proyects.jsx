import PSITESIS from "../../img/proyects/psitesis.png";
import COUNTRIES from "../../img/proyects/countries.png"
import WEATHER from "../../img/proyects/WeatherApp.png"
import styles from './Proyects.module.css'
export default function Proyects() {
  return (
    <div>
      <br /> <br /> 
      <h2><u>PROYECTOS</u></h2>
      <ul className={styles.proyectsGrid}>
        <li className={styles.proyect}>
        <h5 className={styles.titleCard}><u>Psitesis</u></h5>
          <img src={PSITESIS} alt="psitesis" className={styles.image} />
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
          <img src={COUNTRIES} alt="countries" className={styles.image} />
          <p>
            Link deploy:{" "}
            <a href="https://psitesis.netlify.app/" target="_blank" without rel="noreferrer" className={styles.link}>
              -
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

        <li className={styles.proyect}>
        <h5 className={styles.titleCard}><u>Weather APP</u></h5>
          <img src={WEATHER} alt="weather" className={styles.image} />
          <p>
            Link deploy:{" "}
            <a href="https://weather-app-one-ruby.vercel.app/" target="_blank" without rel="noreferrer" className={styles.link}>
            weather-app-phi-wheat.vercel.app
            </a>
          </p>
          <p>
            Repositorio:{" "}
            <a
              href="https://github.com/maksudxx/WeatherApp"
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
