import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investment from './pages/Investment'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/investment">
            <Investment isAuth={isAuth} />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
