import { actionTypes } from '../action-types'

// Results list action creator
export function results (data, dispatch) {
  console.log(data)
  dispatch({
    type: actionTypes.RESULTS,
    results: data
  })
}
