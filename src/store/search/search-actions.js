import { actionTypes } from '../action-types'
import fetch from 'cross-fetch'
import endpoints from '../../endpoints'

// Search action creator
export function search(query, dispatch) {
  dispatch({
    type: actionTypes.SEARCH,
    form: { ...query }
  })
}