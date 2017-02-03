const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_START':
      return state
    case 'GET_USERS_ERROR':
      return state
    case 'GET_USERS_SUCCESS':
      return action.payload
    default:
      return state
  }
}

export default usersReducer
