import { combineReducers } from 'redux'

import { authentication } from './authenticationReducer'
import { registration } from './registrationReducer'
import { alert } from './alertReducer'
import { role } from './roleReducer'

export const rootReducer = combineReducers({
  authentication,
  role,
  // registration,
  alert,
})
