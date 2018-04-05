import { actionTypes } from '../action-types'

// Results list action creator
export function results (list, dispatch) {
  console.log(list)
  dispatch({
    type: actionTypes.RESULTS,
    ...list
  })
}
