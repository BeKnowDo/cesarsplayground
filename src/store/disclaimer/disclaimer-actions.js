import { actionTypes } from '../action-types'

const toggleDisclaimerAcceptance = (checked, dispatch) => {
  dispatch(
    {
      type: actionTypes.PRODUCT_DISCLAIMER,
      checked
    }
  )
}

export default toggleDisclaimerAcceptance
