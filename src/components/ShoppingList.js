// import { dressList } from '../datas/dressList';
import '../styles/ShoppingList.css';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  // const categories = dressList.reduce(
  //   (acc, plant) =>
  //     acc.includes(plant.category) ? acc : acc.concat(plant.category),
  //   []
  // );
  // function addToCart(name, price) {
  //   const currentPlantSaved = cart.find((plant) => plant.name === name);
  //   if (currentPlantSaved) {
  //     const cartFilteredCurrentPlant = cart.filter(
  //       (plant) => plant.name !== name
  //     );
  //     updateCart([
  //       ...cartFilteredCurrentPlant,
  //       { name, price, amount: currentPlantSaved.amount + 1 },
  //     ]);
  //   } else {
  //     updateCart([...cart, { name, price, amount: 1 }]);
  //   }
  // }
  return (
    <div></div>
    // <div className="lmj-shopping-list">
    //   <Categories
    //     categories={categories}
    //     setActiveCategory={setActiveCategory}
    //     activeCategory={activeCategory}
    //   />

    //   {/* <ul className="lmj-plant-list">
    //     {dressList.map(({ id, cover, name, water, light, price, category }) =>
    //       !activeCategory || activeCategory === category ? (
    //         <div key={id}>
    //           <button onClick={() => addToCart(name, price)}>Ajouter</button>
    //         </div>
    //       ) : null
    //     )}
    //   </ul> */}
    // </div>
  );
}

export default ShoppingList;
