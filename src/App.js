import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investment from './pages/Investment'

//Deri area
// import Join from './components/Join/Join'
// import Chat from './components/Chat/Chat'
import Article from './components/Article/Article'
import CreateArticle from './components/Article/CreateArticle'

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
          {/* Deri area */}
          {/* <Route path="/chat" exact component={Chat} /> */}
          <Route path="/article" component={Article} />
          <Route path="/createArticle" component={CreateArticle} />
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
