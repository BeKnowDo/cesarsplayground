import { actionTypes } from '../action-types'

// Customer Results list action creator
export const customerResults = (data, dispatch) => {
  dispatch({
    type: actionTypes.CUSTOMER_SEARCH,
    users: data
  })
}

export const emptyCustomerResults = (data, dispatch) => {
  dispatch(
    {
      type: actionTypes.CUSTOMER_SEARCH,
      users: undefined
    }
  )
}
