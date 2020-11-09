import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/index'

// push redux information into the localstorage
function saveToLocalStorage(state) {
  try {
    // As below, It's storage all redux recode,
    // and you can open it, then check you wanna something to storage into the localStorage
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

    // const cart = JSON.stringify(state.cart)
    // localStorage.setItem('cart', cart)
    // const favorite = JSON.stringify(state.favorite)
    // localStorage.setItem('favorite', favorite)
  } catch (err) {
    console.log(err)
  }
}

// read redux information from the localstorage
function loadFromLocalStorage(state) {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}
const persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer /* preloadedState, */,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
