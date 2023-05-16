import '../styles/Banner.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import pan from '../assets/pan.png';
import menu from '../assets/menu.png';

/**
 *Banner function that displays the logo, an icon to connect to your account and one to view your basket in desktop version.
 *In mobile version it displays a burger menu to access the account and navigation by categories.
 */

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Girl shop logo" className="lmj-logo" />
      <div className="container-icon">
        <div className="connexion menu-banner">
          <img src={user} alt="connexion user" className="icon" />
          <h2>compte</h2>
        </div>
        <div className="basket menu-banner">
          <img src={pan} alt="basket" className="icon" />
          <h2>panier</h2>
        </div>
      </div>
      <div className="menu">
        <div className="basket menu-banner">
          <img src={pan} alt="basket" className="icon" />
        </div>
        <img src={menu} alt="menu" className="menu-icon"></img>
      </div>
    </div>
  );
}

export default Banner;
