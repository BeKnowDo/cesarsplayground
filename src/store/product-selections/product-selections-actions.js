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

export const productType = (type, dispatch) => {
  return dispatch({
    type: actionTypes.PRODUCT_TYPE,
    newProduct: {
      type: type
    }
  })
}

export const productAlias = (nameValue, dispatch) => {
  const name = nameValue || undefined
  return dispatch({
    type: actionTypes.PRODUCT_ALIAS,
    newProduct: {
      name: name
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
