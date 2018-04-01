import { actionTypes } from '../action-types'

const defaultState = {
  loader: false
}

const loader = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOADER:
      return {
        ...state,
        loader: true
      }
    default:
      return state
  }
}

export default loader
