import { actionTypes } from '../action-types'
import fetch from 'cross-fetch'
import endpoints from '../../endpoints'

// Search action creator
export function search (queries) {
  console.log(queries)
  return {
    type: actionTypes.SEARCH,
    queries: queries
  }
}