import { useState } from 'react';
import '../styles/Footer.css';
import facebook from '../assets/facebook.png';
import mail2 from '../assets/mail2.png';
import insta from '../assets/insta.png';
import { Link } from 'react-router-dom';

/**
 * Footer function to subscribe to the newsletter and to contact the company.
 */

function Footer() {
  const [inputValue, setInputValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    if (!inputValue.includes('@')) {
      setIsShow(true);
    } else {
      setIsShow(false);
      setIsOpen(true);
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">Inscivez-vous à la newsletter :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
      />
      <button onClick={handleClick}>Je m'inscris</button>
      {isShow === true ? (
        <p className="error">Veuillez renseigner une adresse valide!</p>
      ) : (
        ''
      )}
      {isOpen === true ? (
        <div className="modal-newsletter">
          <div className="close" onClick={() => setIsOpen(false)}>
            X
          </div>
          <h2 className="modal-title">Bienvenue !</h2>
          <p>
            Nous vous avons envoyé un e-mail de confirmation pour votre
            inscription à notre newsletter.
          </p>
        </div>
      ) : (
        ''
      )}
      <div className="contact">
        <p>Nous contacter : </p>
        <Link href="mailto:service@girlshop.com">
          <img src={mail2} alt="Girl shop logo" className="lmj-logo" />
        </Link>
        <Link href="" className="facebook">
          <img src={facebook} alt="Girl shop logo" className="lmj-logo" />
        </Link>
        <Link href="">
          <img src={insta} alt="Girl shop logo" className="lmj-logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
