import { actionTypes } from './actions'

export const loaderActions = {
  show: ({ loader = false } = {}, dispatch) => {
    dispatch({
      type: actionTypes.loader,
      loader
    })
  }
}
