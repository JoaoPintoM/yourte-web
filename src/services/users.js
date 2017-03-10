import axios from 'axios'
import { config } from '../config'

export const getUsers = (dispatch) => {
  return () => {
    dispatch({
      type: 'GET_USERS_START'
    })
    axios
      .get(`${config.API}/api/users`, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        dispatch({
          type: 'GET_USERS_SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: 'GET_USERS_ERROR'
        })
      })
  }
}
