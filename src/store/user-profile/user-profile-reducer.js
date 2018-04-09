import { actionTypes } from '../action-types'

const initialState = {
  userProfile: []
}

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }

    default:
      return state
  }
}

export default userProfile
