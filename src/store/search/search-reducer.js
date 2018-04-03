import { actionTypes } from '../action-types'

const defaultState = {
  form: {}
}

const search = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return {
        ...state,
        form: {...action.form}
      }
    default:
      return state
  }
}
export default search