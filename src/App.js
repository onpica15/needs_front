import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'

//平台
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Member from './pages/Member/Member'
import Investment from './pages/Investment'
import Article from './pages/Article/Article'
import ProductList from './pages/ProductList/ProductList'
import MerchantHome from './pages/MerchantHome'

//商家後台
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BackEndDashboard from './pages/BackEnd/Dashboard/Dashboard'
import CreateArticle from './pages/Article/CreateArticle'
import TemplateEditedPage from './pages/BackEnd/TemplateEditedPage/TemplateEditedPage'
import TemplateHome from './pages/BackEnd/TemplateHome/TemplateHome'
import TemplateList from './pages/BackEnd/TemplateList/TemplateList'

//設置layout props
const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props

  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  )

  //判斷layout
  switch (layout) {
    case 'FRONT_END_NAV': {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
    case 'BACK_END_NAV': {
      return (
        <>
          <BackEndNavbar />
          <BackEndSidebar />
          {actualRouteComponent}
        </>
      )
    }
    default: {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
  }
}

//Route設置
function App() {
  return (
    <Router>
      <>
        {/* 平台 */}
        <Switch>
          <DynamicLayoutRoute
            exact
            path="/"
            component={Home}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/Investment"
            component={Investment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/article"
            component={Article}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/createArticle"
            component={CreateArticle}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/productlist"
            component={ProductList}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member"
            component={Member}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/homepage"
            component={MerchantHome}
            layout="FRONT_END_NAV"
          />
          {/* 商家後台 */}
          <DynamicLayoutRoute
            path="/customer-backend"
            component={BackEndDashboard}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/template-home"
            component={TemplateHome}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/template-edit"
            component={TemplateEditedPage}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/template-list"
            component={TemplateList}
            layout="BACK_END_NAV"
          />
        </Switch>
      </>
    </Router>
  )
}

export default App
