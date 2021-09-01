import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div>
    
          <ul class="navbar-nav">
            
            <li class="nav-item">
              <Link to='/home' className={`nav-link ${styles.link}`}>
                Sobre Mi
              </Link>
            </li>
            <li class="nav-item">
              <Link className={`nav-link ${styles.link}`}>
                Proyectos
              </Link>
            </li>
            <li class="nav-item">
              <Link className={`nav-link ${styles.link}`}>
                Descargar CV
              </Link>
            </li>
            <li class="nav-item">
            <Link className={`nav-link ${styles.link}`}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to ='/' className={`nav-link ${styles.link}`}>
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
