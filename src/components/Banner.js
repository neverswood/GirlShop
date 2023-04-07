import '../styles/Banner.css';
import bannerLogo1 from '../assets/bannerLogo1.jpg';

function Banner() {
  return (
    <div className="banner">
      <img src={bannerLogo1} alt="Girl shop logo" className="lmj-logo" />
      <h1 className="lmj-title">Girl shop</h1>
    </div>
  );
}

export default Banner;
