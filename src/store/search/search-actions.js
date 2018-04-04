import { actionTypes } from '../action-types'
import fetch from 'cross-fetch'
import endpoints from '../../endpoints'

// Form state action creator
export function captureFormState (query, dispatch) {
  dispatch({
    type: actionTypes.FORM,
    form: {...query}
  })
}

// Form submission
export function sendForm (form, dispatch) {
  fetch(endpoints.users)
    .then(data => data.json())
    .then(data => {
      console.log(data)
    })
}
