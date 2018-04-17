// Import our results action types
import { actionTypes } from '../action-types'
const initialState = {
  users: [],
  initialSearch: false
}
const customerResults = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CUSTOMER_SEARCH:
      return {
        ...state,
        users: action.users,
        initialSearch: true
      }
    default:
      return state
  }
}
export default customerResults
