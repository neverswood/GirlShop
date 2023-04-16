import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <main>
        <section className="listLink">
          <Link className="homeLink">
            <img src="" alt=""></img>
            <h2>Robe</h2>
          </Link>
          <Link className="homeLink">
            <img src="" alt=""></img>
            <h2>Top</h2>
          </Link>
          <Link className="homeLink">
            <img src="" alt=""></img>
            <h2>Pant</h2>
          </Link>
          <Link className="homeLink">
            <img src="" alt=""></img>
            <h2>Shoes</h2>
          </Link>
        </section>
      </main>
    </>
  );
}
