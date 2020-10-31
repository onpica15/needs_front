import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
import { alertActions } from './actions'

//平台
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

import MemberCard from './pages/Member/MemberCard'
import MemberShop from './pages/Member/MemberShop'
import MemberLike from './pages/Member/MemberLike'
import MemberInform from './pages/Member/MemberInform'
import MemberEcoin from './pages/Member/MemberEcoin'
import MemberComment from './pages/Member/MemberComment'

import Investment from './pages/Investment'
import Article from './pages/Article/Article'
import ProductList from './pages/ProductList/ProductList'
import MerchantHome from './pages/MerchantHome/merchantHome'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'

//商家後台
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BackEndDashboard from './pages/BackEnd/Dashboard'
import Sales from './pages/BackEnd/Sales'
import Ads from './pages/BackEnd/Ads'
import CreateArticle from './pages/Article/CreateArticle'
import TemplateEditedPage from './pages/BackEnd/TemplateEditedPage/TemplateEditedPage'
import TemplateHome from './pages/BackEnd/TemplateHome/TemplateHome'
import TemplateList from './pages/BackEnd/TemplateList/TemplateList'
import ArticleDetial from './pages/Article/ArticleDetial'

const history = createBrowserHistory()


//設置layout props
const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props

  const actualRouteComponent = (
    <Route
      {...rest}
      render={(props) => <RoutedComponent {...props} history={history} />}
    />
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
function App(props) {
  useEffect(() => {
    history.listen((location, action) => props.clearAlerts)
  }, [])

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
            path="/products"
            component={ProductDetail}
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
            path="/articledetial"
            component={ArticleDetial}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/productlist"
            component={ProductList}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/card"
            component={MemberCard}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/shop"
            component={MemberShop}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/like"
            component={MemberLike}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/inform"
            component={MemberInform}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/ecoin"
            component={MemberEcoin}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/member/comment"
            component={MemberComment}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/homepage"
            component={MerchantHome}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/login/:role?"
            component={Login}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/signup"
            component={SignUp}
            layout="FRONT_END_NAV"
          />
          {/* 商家後台 */}
          <DynamicLayoutRoute
            exact
            path="/customer-backend/"
            component={BackEndDashboard}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-home"
            component={TemplateHome}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/template-edit"
            component={TemplateEditedPage}
            layout="BACK_END_NAV"
          />
          {/* <Route
            path="/customer-backend/template-edit"
            component={EditedPage}
          /> */}
          <DynamicLayoutRoute
            path="/customer-backend/template-list"
            component={TemplateList}
            layout="BACK_END_NAV"
          />  
          />{' '}
          <DynamicLayoutRoute
            path="/customer-backend/sales-index"
            component={Sales}
            layout="BACK_END_NAV"
          />
          <DynamicLayoutRoute
            path="/customer-backend/ads"
            component={Ads}
            layout="BACK_END_NAV"
          />
        </Switch>
      </>
    </Router>
  )
}

// export default App

const mapStateToProps = (store) => {
  const { alert } = store
  return { alert }
}

const actionCreators = {
  clearAlerts: alertActions.clear,
}

export default connect(mapStateToProps, actionCreators)(App)
