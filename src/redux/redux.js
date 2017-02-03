import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer'
import colocationReducer from './colocationReducer'

const reducers = combineReducers({
  colocations: colocationReducer,
  users: usersReducer,
  form: formReducer
})

// const store = createStore(reducers)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
