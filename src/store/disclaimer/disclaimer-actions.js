import { actionTypes } from '../action-types'

export const toggleDisclaimerAcceptance = (checked, dispatch) => {
  dispatch(
    {
      type: actionTypes.PRODUCT_DISCLAIMER,
      checked
    }
  )
}
