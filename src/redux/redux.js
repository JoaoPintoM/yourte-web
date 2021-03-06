import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {
  appReducer,
  usersReducer,
  colocationReducer,
  searchReducer,
  userColocationReducer,
} from './reducers/index'

const reducers = combineReducers({
  colocations: colocationReducer,
  users: usersReducer,
  userColocs: userColocationReducer,
  search: searchReducer,
  app: appReducer,
  form: formReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
