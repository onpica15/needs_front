import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MemberSidebar from './components/MemberSidebar'
import Memcard from './pages/Memcard'
import Investment from './pages/Investment'

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Member/>
          </Route>
          <Route path="/investment">
            <Investment />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
