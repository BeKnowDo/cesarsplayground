import { actionTypes } from '../action-types'

const defaultState = {
  queries: []
}

const search = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.search:
      return {
        ...state,
        search
      }
    default:
      return state
  }
}
export default search