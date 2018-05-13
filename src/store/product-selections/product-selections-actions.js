import { actionTypes } from '../action-types'

// Product selections action creator
export const addProduct = (product, dispatch) => {
  return dispatch({
    type: actionTypes.ADD_PRODUCT,
    newProduct: {
      ...product
    }
  })
}

export const emptyproductsReducer = (data, dispatch) => {
  dispatch(
    {
      type: actionTypes.ADD_PRODUCT,
      products: undefined
    }
  )
}
