import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/services' component={ Services } />
          <Route path='/products' component={ Products } />
          <Route path='/sign-up' component={ SignUp } />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
