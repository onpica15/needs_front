import { combineReducers } from 'redux'
import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { handleRole } from './roleReducer'

import cartReducer from './cartReducer'

export const rootReducer = combineReducers({
  authentication,
  handleRole,
  alert,
  cart: cartReducer,
})
