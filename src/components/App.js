import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Banner from './Banner';
import Footer from './Footer';
import Home from '../pages/home';
import Nav from './nav';
import JewelryPage from '../pages/jewelryList';
import { PendantList } from '../datas/pendant.js';
import { EarringList } from '../datas/earring';
import { RingList } from '../datas/ring';
import { WatchList } from '../datas/watch';
import { BraceletList } from '../datas/bracelet';

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
            <Route
              path="pendant"
              element={<JewelryPage jewelryList={PendantList} />}
            />
            <Route
              path="earring"
              element={<JewelryPage jewelryList={EarringList} />}
            />
            <Route
              path="ring"
              element={<JewelryPage jewelryList={RingList} />}
            />
            <Route
              path="watch"
              element={<JewelryPage jewelryList={WatchList} />}
            />
            <Route
              path="bracelet"
              element={<JewelryPage jewelryList={BraceletList} />}
            />
            <Route path="contact" />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
