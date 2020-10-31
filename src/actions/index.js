import {
  userConstants,
  roleTypes,
  alertConstants,
  ADD_TO_CART,
  UPDATE_CART_UNITS,
} from './actiontypes'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

export const userActions = { login, logout }
export const roleActions = { setMember, setMerchant, setNeeds }
export const alertActions = { success, error, clear }

// login action
function login(username, password, currentRole) {
  return (dispatch) => {
    checkAuth(username, password, currentRole).then((user) => {
      if (!user.success) {
        dispatch(failure())
        dispatch(error('帳號或密碼錯誤'))
      } else {
        dispatch(success(user))
        history.goBack()
      }
    })
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure() {
    return { type: userConstants.LOGIN_FAILURE }
  }
}

const checkAuth = (username, password, currentRole) => {
  console.log(currentRole)
  const url = `http://122.116.38.12:5050/login-api/${currentRole}login`
  console.log(url)
  const req = new Request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  return fetch(req)
    .then(handleResponse)
    .then((user) => {
      sessionStorage.setItem('user', JSON.stringify(user))
      return user
    })
}

function handleResponse(response) {
  return response.json().then((obj) => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout()
        console.log('401')
      }
      const error = response.statusText
      return Promise.reject(error)
    }
    return obj
  })
}

// logout action
function logout() {
  sessRemove()
  return { type: userConstants.LOGOUT }
}

function sessRemove() {
  sessionStorage.removeItem('user')
}

// setRole action
function setMember() {
  return (dispatch) => dispatch(member())

  function member() {
    return { type: roleTypes.SET_MEMBER }
  }
}

function setMerchant() {
  return (dispatch) => dispatch(merchant())

  function merchant() {
    return { type: roleTypes.SET_MERCHANT }
  }
}

function setNeeds() {
  return (dispatch) => dispatch(needs())
  function needs() {
    return { type: roleTypes.SET_NEEDS }
  }
}

// register action
// function register(user) {
//   return (dispatch) => {
//     dispatch(request(user))

//     userService.register(user).then(
//       (user) => {
//         dispatch(success())
//         history.push('/login')
//         dispatch(alertActions.success('註冊成功'))
//       },
//       (error) => {
//         dispatch(failure(error.toString()))
//         dispatch(alertActions.error(error.toString()))
//       }
//     )
//   }

//   function request(user) {
//     return { type: userConstants.REGISTER_REQUEST, user }
//   }
//   function success(user) {
//     return { type: userConstants.REGISTER_SUCCESS, user }
//   }
//   function failure(error) {
//     return { type: userConstants.REGISTER_FAILURE, error }
//   }
// }

// alert actions
function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { type: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}

// cart action
export function addToCartAction({ id, title, img_path, price, units }) {
  return {
    type: ADD_TO_CART,
    payload: { id, title, img_path, price, units },
  }
}
export function updateCartUnits({ id, units, price }) {
  return {
    type: UPDATE_CART_UNITS,
    payload: { id, units, price },
  }
}
