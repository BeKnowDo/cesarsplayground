import { actionTypes } from '../action-types'

// Product selections action creator
export const productSelections = (data, dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT_SELECTIONS,
    products: data
  })
}

export const emptyproductSelections = (data, dispatch) => {
  dispatch(
    {
      type: actionTypes.PRODUCT_SELECTIONS,
      products: undefined
    }
  )
}
