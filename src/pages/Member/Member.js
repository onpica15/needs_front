import React, { useState } from 'react'

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
