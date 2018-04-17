import { actionTypes } from '../action-types'

const initialState = {
  products: [],
  productsDisclaimer: false
}

const productSelections = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_SELECTIONS:
      return {
        ...state,
        products: [...action.products]
      }
    case actionTypes.PRODUCT_DISCLAIMER:
      return {
        productsDisclaimer: !action.accepted
      }
    default:
      return state
  }
}

export default productSelections
