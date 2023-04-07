import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsCheckCircle } from 'react-icons/bs';
import { dressList } from '../datas/dressList';
import '../styles/Dress.css';

export default function Dress() {
  return (
    <div className="dressList">
      {dressList.map((dress) => {
        return (
          <div className="dressList__card" key={dress.id}>
            <img src={dress.cover} alt={dress.name}></img>
            <div className="dressList__description">
              <p>{dress.name}</p>
              <span>{dress.price} €</span>
              {/* <FontAwesomeIcon icon="fa-light fa-circle-check" /> */}
              <i className="fa fa-light fa-circle-check"></i>
              <BsCheckCircle />
            </div>
          </div>
        );
      })}
    </div>
  );
}
