import { combineReducers } from 'redux'
import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { handleRole } from './roleReducer'
import { orderItems } from './orderItemsReducer'

import cartReducer from './cartReducer'
import favoritesReducer from './favoritesReducer'

export const rootReducer = combineReducers({
  authentication,
  handleRole,
  alert,
  orderItems,
  cart: cartReducer,
  favorite: favoritesReducer,
})
