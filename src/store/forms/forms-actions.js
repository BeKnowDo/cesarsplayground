import fetch from 'cross-fetch'
import { actionTypes } from '../action-types'
import endpoints from '../../endpoints'
import { customerResults, emptyCustomerResults } from '../customer-search/customer-search-actions'
import notification from '../notification/notification-actions'
// Form state action creator
export function captureFormState (query, dispatch) {
  dispatch({
    type: actionTypes.FORM,
    form: { ...query }
  })
}

export function clearFormState (key, dispatch) {
  dispatch({
    type: actionTypes.CLEAR_FORM,
    form: {
      [key]: undefined
    }
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
      if (data.error) {
        emptyCustomerResults(data, dispatch)
        notification(data, dispatch)
      } else {
        customerResults(data, dispatch)
      }
    })
}
