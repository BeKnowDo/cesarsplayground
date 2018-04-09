// Import our results action types
import { actionTypes } from '../action-types'

const results = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RESULTS:
      return {
        ...state,
        results: {...action.results}
      }
    default:
      return state
  }
}
export default results
