import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shopPage/ShopPage';

import './App.css';

function App() {
    return (
      <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
      </div>
    );
  }


export default App;
