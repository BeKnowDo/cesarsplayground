import { actionTypes } from '../action-types'

const initialState = {
  disclaimer: false
}

const disclaimer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DISCLAIMER:
      return {
        disclaimer: action.checked
      }
    default:
      return state
  }
}

export default disclaimer
