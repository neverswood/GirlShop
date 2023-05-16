import { Link } from 'react-router-dom';
import '../styles/Home.css';
import banner from '../assets/banner6.avif';
import image from '../assets/banner3.avif';
import image2 from '../assets/premium_photo-1661548044079-afb3cda91d85.avif';
import image3 from '../assets/premium_photo-1661578215999-8ed9e212454e.avif';

export default function Home() {
  return (
    <>
      <main>
        <section className="listLink">
          <div className="homeLink">
            <img src={banner} alt=""></img>
          </div>
          <div className="homeLink">
            <Link href="" className="link-loyalty">
              <img src={image2} alt="Jewelry presentation"></img>
              <div className="loyalty-text">
                <h2 className="homeLink-fidelity-title">Programme fidélité</h2>
                <p className="homeLink-fidelity-paragraph">
                  Cumulez des points grâce à notre programme de fidélité.
                </p>
              </div>
            </Link>
          </div>
          <div className="homeLink">
            <Link href="">
              <img src={image3} alt="Jewelry presentation"></img>
              <h2 className="homeLink homeLink-present">
                Faites un cadeau avec Girl Shop
              </h2>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
