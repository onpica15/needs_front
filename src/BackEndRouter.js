import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BackEndDashboard from './pages/BackEnd/Dashboard/Dashboard'
function BackEndApp() {
  return (
    <Router>
      <>
        <BackEndSidebar>
          <Switch>
            <Route
              exact
              path="/customer-backend"
              component={BackEndDashboard}
            />
          </Switch>
        </BackEndSidebar>
        <BackEndNavbar />
        <BackEndDashboard />
      </>
    </Router>
  )
}

export default BackEndApp
