import { roleTypes } from '../actions/actiontypes'

export function role(state = 'merchant', action) {
  switch (action.type) {
    case roleTypes.SET_MEMBER:
      return 'member'
    case roleTypes.SET_MERCHANT:
      return 'merchant'
    case roleTypes.SET_NEEDS:
      return 'needs'
    default:
      return state
  }
}
