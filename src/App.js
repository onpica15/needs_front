import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investment from './pages/Investment'
import MerchantHome from './pages/MerchantHome/MerchantHome'

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
          <Route path="/homepage">
            <MerchantHome />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </>
    </Router>
  )
}

export default App
