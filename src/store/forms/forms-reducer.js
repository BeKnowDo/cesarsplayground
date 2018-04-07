import { actionTypes } from '../action-types'

const defaultState = {
  form: {}
}

const forms = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.FORM:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.form
        }
      }
    case actionTypes.CLEAR_FORM:
      console.log(action)
      return {
        ...state,
        form: undefined
      }
    default:
      return state
  }
}

export default forms
