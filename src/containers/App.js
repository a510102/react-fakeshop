import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Product from './Product';

import './App.css'

function App() {
  return(
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/shop" exact component={ Shop } />
        <Route path="/shop/:id" component={ Product } />
      </Switch>
    </div>
  </Router> 
  )
}

function Home() {
  return(
  <div>
    <h2>Home</h2>
  </div>)
}

export default App


