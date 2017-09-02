import jwtDecode from 'jwt-decode'

export const getLocalStorage = (dispatch) =>
  () => {
    let previous = localStorage.getItem('x-search')

    if (previous) {
      dispatch({
        type: 'SET_LOCALSTORAGE',
        payload: { localstorage: JSON.parse(previous) }
      })
    }

    return dispatch({
      type: 'GET_LOCALSTORAGE'
    })
  }

export const setSearchLocalStorage = (dispatch, searchValue) => {
  console.log('setSearchLocalStorage')
  let previous = localStorage.getItem('x-search')
  console.log(previous)
  if (!previous) {
    previous = []
  } else {
    previous = JSON.parse(previous)
  }

  previous.unshift(searchValue)

  if (previous.length > 5) {
    previous.pop()
  }

  localStorage.setItem('x-search', JSON.stringify(previous))

  return dispatch({
    type: 'SET_LOCALSTORAGE',
    payload: { localstorage: previous }
  })
}

export const getCurrentSearch = (dispatch) =>
  () => {
    return dispatch({
      type: 'GET_GEOSEARCH'
    })
  }

export const getLocalUser = (dispatch) =>
  () => {
    try {
      const decoded = jwtDecode(window.localStorage.getItem('token'))
      if (decoded.userId) {
        return dispatch({
          type: 'GET_LOCAL_USER',
          payload: { ...decoded, isAuth: true }
        })
      }
    } catch (e) {
      console.log('you r not auth')
      return dispatch({
        type: 'GET_LOCAL_USER_ERROR'
      })
    }
  }

export const disconnectLocaluser = (dispatch) =>
  () => {
    window.localStorage.removeItem('token')
    return dispatch({
      type: 'REMOVE_LOCAL_USER'
    })
  }
