const userColocationReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_COLOCS_START':
      return state
    case 'GET_USER_COLOCS_ERROR':
      return state
    case 'GET_USER_COLOCS_SUCCESS':
      return action.payload

    default:
      return state
  }
}

export default userColocationReducer
