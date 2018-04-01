import { actionTypes } from '../action-types'
import fetch from 'cross-fetch'
import endpoints from '../../endpoints'

// Search action creator
function search ( { queries = []}, {}, dispatch) {
  
  console.log(queries)

  fetch.

  
  
  dispatch({
    type: actionTypes.SEARCH,
    queries
  })
}

export default { search }