import { Networks } from "../../components/Networks/Networks";
import styles from './Contact.module.css'
export default function Contact() {


  return (
    <div>
      <br />
      <br />
      <h2>
        <u>CONTACTO</u>
      </h2>
      <br />
      <div>
        <h5>
          <u>Redes Sociales</u>
        </h5>
        <br />
        <Networks />
      </div>
      <br />
      <form type="submit">
        <p>Dejar Mensaje: </p>
        <input type="text" placeholder="Nombre completo..." className={styles.inputs} required="true" />
        <br />
        <input type="email" placeholder="Email..." className={styles.inputs}/>
        <br />
        <textarea cols="40" rows="5" placeholder="Mensaje...." className={styles.inputs} required="true"/>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
