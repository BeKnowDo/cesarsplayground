import { actionTypes } from '../action-types'

const defaultState = {
  form: {}
}

const form = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FORM:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.form
        }
      }
    default:
      return state
  }
}

export default form
