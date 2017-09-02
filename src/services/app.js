import jwtDecode from 'jwt-decode'

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
