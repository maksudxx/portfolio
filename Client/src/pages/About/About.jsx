import styles from './About.module.css'
export default function About() {
  return (
    <div align="center">
      <div className={styles.parrafo}>
        <h3>Sobre Mi</h3>
        <br/>
        <p>
          Hola me llamo Facundo y soy un apasionado por el mundo IT, me gusta
          estar crear e innovar. Me considero una persona curiosa que me gusta
          estar en constante aprendizaje
        </p>
        <p>
          Comence mis estudios por el 2011 en la carrera Analista Programador
          Universitario en la Universidad Nacional de Jujuy, la cual me gradue
          en el año 2017.
        </p>
        <p>Por temas economicos estuve 2 años sin programar trabajando en otras areas vinculadas a informatica
            pero con la pandemia perdi mi trabajo y aproveche para retomar lo que me apasiona y me enfoque a aprender Javascript.
        </p>
        <p>
            A fines del 2020 conoci el bootcamp de <a href="https://www.soyhenry.com" target="_blank" className={styles.link}>Soy Henry</a> y decidi mejorar mis 
            habilidades realizando este curso en el mes de febrero del 2021 y finalizandolo en agosto del mismo año.
        </p>
        <p>
        Actualmente me desempeño como Desarrollador web FullStack. Es una profesion donde encuentro todo lo que me gusta, y me da la posibilidad de tener el estilo de vida que deseo.
        </p>
      </div>

      <div>
          <h3>Soft Skills</h3>
      </div>
    </div>
  );
}
