import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Banner from './Banner';
import Cart from './Cart';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import Dress from '../pages/dress';
import Home from '../pages/home';
import Nav from './nav';

function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <Router>
        <Banner />
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dress" element={<Dress />} />
          </Route>
        </Routes>
        <QuestionForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
