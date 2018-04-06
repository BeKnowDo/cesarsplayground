import { actionTypes } from '../action-types'

const notificaiton = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.NOTIFICATION:
      return {
        ...state,
        notification: action.error
      }
    default:
      return state
  }
}

export default notificaiton
