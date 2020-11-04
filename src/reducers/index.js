import { combineReducers } from 'redux'
import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { handleRole } from './roleReducer'
import { orderItems } from './orderItemsReducer'

export const rootReducer = combineReducers({
  authentication,
  handleRole,
  alert,
  orderItems,
})
