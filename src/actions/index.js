import { userConstants, roleTypes, alertConstants } from './actiontypes'
import History from '../components/history'
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
        dispatch(clear())
        dispatch(success(user))
        History.goBack()
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
        console.log('401')
        logout()
      }
      const error = response.statusText
      return Promise.reject(error)
    }
    return obj
  })
}

// logout action
function logout() {
  sessionStorage.removeItem('user')
  window.location.href = '/'
  return { type: userConstants.LOGOUT }
}

// setRole action
function setMember() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(member())
  }
  function member() {
    return { type: roleTypes.SET_MEMBER }
  }
}

function setMerchant() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(merchant())
  }

  function merchant() {
    return { type: roleTypes.SET_MERCHANT }
  }
}

function setNeeds() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(needs())
  }

  function needs() {
    return { type: roleTypes.SET_NEEDS }
  }
}

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
