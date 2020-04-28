import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './components/Header/Navbar';
import { ProductList, ProductDetails } from './components/Products';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ ProductList } />
        <Route path="/details" component={ ProductDetails } />
        <Route path="/cart" component={ Cart } />
        <Route component={ PageNotFound } />
      </Switch>
    </>
  );
}

export default App;
