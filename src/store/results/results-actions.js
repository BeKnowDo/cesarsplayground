import { actionTypes } from '../action-types'

// Results list action creator
export const results = (data, dispatch) => {
  dispatch({
    type: actionTypes.RESULTS,
    results: data
  })
}

export const emptyResults = (data, dispatch) => {
  dispatch(
    {
      type: actionTypes.RESULTS,
      results: undefined
    }
  )
}

// export default {results, emptyResults}
