import { actionTypes } from '../action-types'

const userProfile = (data, dispatch) => {
  dispatch({
    type: actionTypes.USER_PROFILE,
    userProfile: {...data}
  })
}

export default userProfile
