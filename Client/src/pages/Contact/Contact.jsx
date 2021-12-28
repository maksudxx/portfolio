import { Networks } from "../../components/Networks/Networks";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { init, sendForm } from "emailjs-com";
init("user_6ycfs4IYOD5RxbBK55C6l");  //id de usuario que provee mailJs

export default function Contact() {
  const { register, handleSubmit, watch} = useForm();
  const [contactNumber, setContactNumber] = useState("000000");
 

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const onSubmit = (data, e) => {
    //console.log(data);
    generateContactNumber(); 
    sendForm("default_service", "template_a7axzva", "#contact-form").then(  //agregamos el numero de template que se genera cuando lo creamos desde la pagina
      function (response) { 
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    alert("Enviado :)");
    e.target.reset()
  };

  return (
    <div>
      <br />
      <br />
      <h2 className={styles.title}>
        CONTACTO
      </h2>
      <br />
      <div>
        <h5 className={styles.title}>
          Redes Sociales
        </h5>
        <Networks />
      </div>
   
    <br />
      {/* en el formulario la propiedad name de los input tienen que coincidir con los del template para que se envie el mje correctamente */}
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.title}>Dejar Mensaje: </p>
        
        <input
          type="text"
          placeholder="Nombre completo..."
          className={styles.inputs}
          name="user_name"
          maxLength="60"
          autoComplete="off"
          required="true"
          
        />
        <br />
        <input type="hidden" name="contact_number" value={contactNumber} />
        <input
          type="email"
          placeholder="Email..."
          className={styles.inputs}
          name="user_email"
          maxLength="60"
          required='true'
        />
        <br />
        <textarea
          cols="40"
          rows="5"
          placeholder="Mensaje...."
          className={styles.inputs}
          required={true}
          name="message"
          {...register("message", {
            required: "Required",
          })}
          autoComplete="off"
          maxLength='1500'
        />
        <p className={styles.title}>Caracteres restantes: {messageCharsLeft}</p>
        <br />
        <input type="submit" className={styles.boton} value="Enviar" />
        
      </form>
    </div>
  );
}
