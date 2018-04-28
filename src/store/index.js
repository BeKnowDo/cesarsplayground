// Create our store
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import loader from './loader/loader-reducer'
import forms from './forms/forms-reducer'
import customerResults from './customer-search/customer-search-reducer'
import notification from './notification/notification-reducer'
import userProfile from './user-profile/user-profile-reducer'
import productsReducer from './product-selections/product-selections-reducer'
import disclaimer from './disclaimer/disclaimer-reducer'

const reducerCollection = combineReducers({
  loader,
  forms,
  customerResults,
  notification,
  userProfile,
  productsReducer,
  disclaimer
})

export default () => {
  const store = createStore(
    reducerCollection,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  return store
}
