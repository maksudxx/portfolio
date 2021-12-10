import styles from './Card.module.css'
import {Link} from 'react-router-dom'
export default function Card({id, proyecto, path_imagen, repositorio, video, descripcion, deploy }){
    return(
        // <Link to={`/proyects/${id}}`>
        <Link to={`/proyects/${id}`} className={styles.link}>
              <li className={styles.proyect}>
        <h5 className={styles.titleCard}><u>{proyecto}</u></h5>
          <img src={path_imagen} alt="images" className={styles.image} />
          <p>Click para mas info</p>
        </li>  
        </Link>
    )
   
}