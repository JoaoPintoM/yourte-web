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



export const getColocationsFromUser = (dispatch) => {
  return (search) => {
    dispatch({
      type: 'GET_USER_COLOCS_START'
    })
    //
    // axios
    //   .get(`${config.API}/api/colocations`, {
    //     headers: {
    //       'Authorization': 'Bearer ' + window.localStorage.getItem('token')
    //     },
    //     params,
    //     'paramsSerializer': function(params) {
    //       return qs.stringify(params, {arrayFormat: 'repeat'})
    //     }
    //   })
    //   .then((response) => {
    //     dispatch({
    //       type: 'GET_ALL_SUCCESS',
    //       payload: response.data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     dispatch({
    //       type: 'GET_ALL_ERROR'
    //     })
    //   })
  }
}
