import { useEffect, useState } from 'react';
import Banner from './Banner';
import Cart from './Cart';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import logo from '../assets/logo.png';
import Dress from '../pages/dress';

function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        {/* <ShoppingList cart={cart} updateCart={updateCart} /> */}
        <Dress />
        <QuestionForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
