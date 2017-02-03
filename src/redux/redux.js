import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const colocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_START':
      return state
    case 'GET_ALL_ERROR':
      return state
    case 'GET_ALL_SUCCESS':
      return action.payload
    case 'CREATE_COLOC':
      return state
    case 'COLOCATION_CREATED':
      return action.payload
    case 'CREATE_COLOC_ERROR':
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  colocations: colocationReducer,
  form: formReducer
})

// const store = createStore(reducers)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
