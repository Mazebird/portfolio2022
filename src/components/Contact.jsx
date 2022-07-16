import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactComponent = () => {
  const [result, setResult] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('PortfolioReact', 'template_13v4ksb', form.current, 'QOGYvrIB_eWg1YqyJ')
      .then((result) => {
        console.log(result.text);
        setResult({
          "message": "Votre message a bien été envoyé !",
          "state": "success"
        });
      }, (error) => {
        console.log(error.text);
        setResult({
          "message": "Erreur lors de l'envoi",
          "state": "error"
        });
      });



  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <div className="state-mail">
        {result ? <p className={result.state}>{result.message}</p> : null}
      </div>
      {/* <label>Nom (qui êtes-vous ?)</label> */}
      <input type="text" name="from_name" required placeholder='Votre nom' size="50" />
      {/* <label>Email (pour vous recontacter)</label> */}
      <input type="email" name="email" required placeholder='Votre adresse email' size="50" />
      {/* <label>Message (que voulez-vous partager ?)</label> */}
      <textarea name="message" required placeholder='Votre message' cols="40" rows="10" />
      <input type="submit" className='submit' value="Envoyer" />
    </form>
  );
};

export default ContactComponent;