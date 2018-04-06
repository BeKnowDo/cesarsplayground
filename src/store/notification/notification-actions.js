import { actionTypes } from '../action-types'

// Provide notificaiton to user
const notification = (data, dispatch) => {
  dispatch({
    type: actionTypes.NOTIFICATION,
    notification: {...data}
  })
}

export default notification
