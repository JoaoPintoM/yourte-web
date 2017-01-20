import { createStore, combineReducers } from 'redux'

const colocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_START':
      return state
    case 'GET_ALL_ERROR':
      return state
    case 'GET_ALL_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const reducers = combineReducers({
  colocations: colocationReducer
})

const store = createStore(reducers)

export default store
