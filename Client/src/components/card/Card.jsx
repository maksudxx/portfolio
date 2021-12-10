import styles from "./Card.module.css";
import { Link as a } from "react-router-dom";
export default function Card({
  id,
  proyecto,
  path_imagen,
  repositorio,
  video,
  descripcion,
  deploy,
}) {
  return (
    <li className={styles.proyect}>
      <h5 className={styles.titleCard}>
        <u>{proyecto}</u>
      </h5>
      <img src={path_imagen} alt="images" className={styles.image} />
      <p className={styles.description}>{descripcion}</p>
      <p>LINKS</p>
      <div className={styles.containerLinks}>
        <a className={styles.link} href={repositorio} target='_blank' rel='noreferrer'>Repositorio</a>
        <a className={styles.link} href={video} target='_blank' rel='noreferrer'>Video Demo</a>
        <a className={styles.link} href={deploy} target='_blank' rel='noreferrer'>Deploy</a>
      </div>
    </li>
  );
}
