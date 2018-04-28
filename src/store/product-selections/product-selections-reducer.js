import { actionTypes } from '../action-types'

const initialState = {
  products: [],
  newProduct: {}
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {...action.newProduct}
        ],
        newProduct: undefined
      }

    case actionTypes.PRODUCT_ALIAS:
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          name: action.newProduct.name
        }
      }

    case actionTypes.PRODUCT_TYPE:
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          type: action.newProduct.type
        }
      }

    default:
      return state
  }
}

export default productsReducer
