// Create our store
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loader from './loader/loader-reducer'
import forms from './search/search-reducer'

export default () => {
  const store = createStore(
    combineReducers({
      loader,
      forms
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  return store
}
