import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../styles/global.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'
import Investment from './Investment'
import ProductDetail from './ProductDetail'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/investment">
            <Investment />
          </Route>
          <Route path="/products">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
