import { combineReducers } from 'redux'
import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { handleRole } from './roleReducer'
import { orderContent } from './orderItemsReducer'

import cartReducer from './cartReducer'

export const rootReducer = combineReducers({
  authentication,
  handleRole,
  alert,
  orderContent,
  cart: cartReducer,
})
