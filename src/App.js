import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
        </Switch>
      </>
    </Router>
  )
}

export default App
