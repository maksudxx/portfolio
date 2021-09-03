import styles from "./About.module.css";
import HTML from '../../img/soft/html.png';
import CSS from '../../img/soft/css.png';
import EXPRESS from '../../img/soft/express.png';
import BOOTSTRAP from '../../img/soft/bootstrap.png';
import JAVASCRIPT from '../../img/soft/javascript.png'
import NODE from '../../img/soft/nodejs.png';
import POSTGRESQL from '../../img/soft/postgresql.jpg';
import REACT from '../../img/soft/react.png';
import REDUX from '../../img/soft/redux.jpg'
import SEQUELIZE from '../../img/soft/sequelize.png'
import SQLSERVER from '../../img/soft/sqlserver.png'
import POSTMAN from '../../img/soft/postman.jpg'
import NPM from '../../img/soft/npm.png'
import GITHUB from '../../img/soft/github.png'
import MATERIAL from '../../img/soft/material.png'


export default function About() {
  return (
    <div align="center">
      <br /> <br /> 
      <div className={styles.parrafo}>
        <h2><u>SOBRE MI</u></h2>
        <br />
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
        <p>
          A fines del 2020 conoci el bootcamp de{" "}
          <a
            href="https://www.soyhenry.com"
            target="_blank"
            className={styles.link}
            // without rel="noreferrer"
          >
            Soy Henry
          </a>{" "}
          y decidi mejorar mis habilidades realizando este curso en el mes de
          febrero del 2021 y finalizandolo en agosto del mismo año.
        </p>
        <p>
          Actualmente me desempeño como Desarrollador web FullStack. Es una
          profesion donde encuentro todo lo que me gusta, y me da la posibilidad
          de tener el estilo de vida que deseo.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h3><u>Tecnologias y Herramientas</u></h3>
        <br />
          <div className={styles.imagesGrid}>
              <div>
                <img src={HTML} alt="html" width={100} className={styles.image}/>
                <p>HTML</p>
              </div>
              <div>
                <img src={CSS} alt="css" width={100} className={styles.image}/>
                <p>CSS</p>
              </div>
              <div>
                <img src={JAVASCRIPT} alt="javascript" width={100} className={styles.image}/>
                <p>Javascript</p>
              </div>
              <div>
                <img src={BOOTSTRAP} alt="bootstrap" width={100} className={styles.image}/>
                <p>Bootstrap</p>
              </div>
              <div>
                <img src={REACT} alt="react" width={100} className={styles.image}/>
                <p>React</p>
              </div>
              <div>
                <img src={MATERIAL} alt="material-ui" width={100} className={styles.image}/>
                <p>Material-UI</p>
              </div>
              <div>
                <img src={REDUX} alt="redux" width={100} className={styles.image}/>
                <p>Redux</p>
              </div>
              <div>
                <img src={NODE} alt="node" width={180} className={styles.image}/>
                <p>NodeJs</p>
              </div>
              <div>
                <img src={EXPRESS} alt="express" width={180} className={styles.image}/>
                <p>Express</p>
              </div>
              <div>
                <img src={SEQUELIZE} alt="sequelize" width={180} className={styles.image}/>
                <p>Sequelize</p>
              </div>
              <div>
                <img src={POSTGRESQL} alt="postgresql" width={120} className={styles.image}/>
              </div>
              <div>
                <img src={SQLSERVER} alt="sqlserver" width={150} className={styles.image}/>
               
              </div>
              <div>
                <img src={POSTMAN} alt="postman" width={100} className={styles.image}/>
                <p>Postman</p>
              </div>
              <div>
                <img src={NPM} alt="npm" width={100} className={styles.image}/>
                <p>NPM</p>
              </div>
              <div>
                <img src={GITHUB} alt="github" width={100} className={styles.image}/>
                <p>GitHub</p>
              </div>
          </div>
      </div>
    </div>
  );
}
