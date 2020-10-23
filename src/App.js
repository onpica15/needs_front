import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investment from './pages/Investment'
import MerchantHome from './pages/MerchantHome'
import TemplateEditedPage from './pages/BackEnd/TemplateEditedPage/TemplateEditedPage'
import TemplateHome from './pages/BackEnd/TemplateHome/TemplateHome'
import TemplateList from './pages/BackEnd/TemplateList/TemplateList'
import HomeRouter from './FrontEndRouter'
import BackEndApp from './BackEndRouter'


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomeRouter />
          </Route>
          <Route exact path="/customer-backend">
            <BackEndApp />
          </Route>
          <Route path="/homepage">
            <MerchantHome />
          </Route>
          <Route path="/template-home">
            <TemplateHome/>
          </Route>
          <Route path="/template-edit">
            <TemplateEditedPage />
          </Route>
          <Route path="/template-list">
            <TemplateList />
          </Route>
        </Switch>
        
        {/* <Footer /> */}

      </>
    </Router>
  )
}

export default App
