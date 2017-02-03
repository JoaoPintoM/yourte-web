import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer'
import colocationReducer from './colocationReducer'
import appReducer from './appReducer'

const reducers = combineReducers({
  colocations: colocationReducer,
  users: usersReducer,
  app: appReducer,
  form: formReducer
})

// const store = createStore(reducers)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
