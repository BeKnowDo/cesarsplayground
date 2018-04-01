// Create our store
import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

export default () => {
  const store = createStore(
    combineReducers({
      Loader,
      Search
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  return store
}
