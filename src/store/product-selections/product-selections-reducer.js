import { actionTypes } from '../action-types'

const initialState = {
  products: []
}

const productSelections = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_SELECTIONS:
      return {
        ...state,
        products: [...action.products]
      }
    default:
      return state
  }
}

export default productSelections
