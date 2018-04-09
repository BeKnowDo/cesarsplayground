// Create our store
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import loader from './loader/loader-reducer'
import forms from './forms/forms-reducer'
import results from './results/results-reducer'
import notification from './notification/notification-reducer'
import userProfile from './user-profile/user-profile-reducer'

export default () => {
  const store = createStore(
    combineReducers({
      loader,
      forms,
      results,
      notification,
      userProfile
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  return store
}
