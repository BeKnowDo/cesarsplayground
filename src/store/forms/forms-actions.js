import { actionTypes } from '../action-types'
import fetch from 'cross-fetch'
import endpoints from '../../endpoints'

// Form state action creator
export function captureFormState (query, dispatch) {
  dispatch({
    type: actionTypes.FORM,
    form: { ...query }
  })
}

// Form submission
export function sendForm (form, dispatch) {
  fetch(endpoints.users, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form
    })
  })
    .then(data => data.json())
    .then(data => {
      // Results action
      dispatch({
        type: actionTypes.RESULTS,
        results: {
          ...data
        }
      })
    })
}
