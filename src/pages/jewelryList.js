import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsCheckCircle } from 'react-icons/bs';
import { WatchList } from '../datas/watch';
import '../styles/Dress.css';

export default function JewelryPage(jewelryList) {
  return (
    <div className="list">
      {jewelryList.jewelryList.map((list) => {
        return (
          <div className="list__card" key={list.id}>
            <img src={list.cover} alt={list.name}></img>
            <div className="list__description">
              <p>{list.name}</p>
              <span>{list.price} €</span>
              <i className="fa fa-light fa-circle-check"></i>
              <BsCheckCircle />
            </div>
          </div>
        );
      })}
    </div>
  );
}
