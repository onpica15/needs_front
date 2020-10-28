import { userConstants, roleTypes } from './actiontypes'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
export const userActions = { login, logout }
export const roleActions = { setMember, setMerchant, setNeeds }
// export hadleRole

// login action
function login(username, password) {
  return (dispatch) => {
    checkAuth(username, password).then((user) => {
      if (!user.success) {
        dispatch(failure())
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

const checkAuth = (username, password) => {
  const url = 'http://localhost:5000/login/memberlogin'
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
  console.log('ccc')

  return (dispatch) => member()

  function member() {
    console.log('ddd')
    return { type: roleTypes.SET_MEMBER }
  }
}

function setMerchant() {
  console.log('aaa')
  return (dispatch) => merchant()

  function merchant() {
    console.log('bbb')
    return { type: roleTypes.SET_MERCHANT }
  }
}

function setNeeds() {
  return (dispatch) => needs()
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

//Alert
// export const alertActions = {
//   success,
//   error,
//   clear,
// }

// function success(message) {
//   return { type: alertConstants.SUCCESS, message }
// }

// function error(message) {
//   return { type: alertConstants.ERROR, message }
// }

// function clear() {
//   return { type: alertConstants.CLEAR }
// }
