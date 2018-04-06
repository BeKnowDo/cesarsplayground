import { actionTypes } from '../action-types'

// Results list action creator
const results = (data, dispatch) => {
  dispatch({
    type: actionTypes.RESULTS,
    results: data
  })
}

export default results
