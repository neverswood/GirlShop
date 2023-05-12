import '../styles/Banner.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import pan from '../assets/pan.png';
import menu from '../assets/menu.png';

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Girl shop logo" className="lmj-logo" />
      <div className="container-icon">
        <img src={user} alt="connexion user" className="icon" />
        <img src={pan} alt="basket" className="icon" />
      </div>
      <div className="menu">
        <img src={menu} alt="menu" className="menu"></img>
      </div>
    </div>
  );
}

export default Banner;
