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
      return [...state, action.payload]
    case 'CREATE_COLOC_ERROR':
      return state
    default:
      return state
  }
}

export default colocationReducer
