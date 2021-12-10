
import styles from './Proyects.module.css'
import proyects from '../../proyects.json'
import Card from '../../components/card/Card';
export default function Proyects() {
  console.log(proyects)
  return (
    <div>
      <br /> <br /> 
      <h2><u>PROYECTOS</u></h2>
      <ul className={styles.proyectsGrid}>
        {
          proyects.map((proyect, index) => (
            <Card
              key={index}
              proyecto={proyect.proyecto}
              deploy={proyect.deploy}
              repositorio={proyect.repositorio}
              path_imagen={proyect.path_imagen}
              descripcion={proyect.descripcion}
              id={proyect.id}
              video={proyect.video}
            />
          ))
        }

      </ul>
    </div>
  );
}
