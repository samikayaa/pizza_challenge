import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';

import React from 'react';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div className='switches'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
            <Route exact path="/success">
              <SuccessPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

