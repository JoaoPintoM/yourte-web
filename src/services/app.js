import jwtDecode from 'jwt-decode'

export const getLocalUser = (dispatch) =>
  () => {
    const decoded = jwtDecode(window.localStorage.getItem('token'))
    if (decoded.userId) {
      return dispatch({
        type: 'GET_LOCAL_USER',
        payload: decoded
      })
    }
  }
