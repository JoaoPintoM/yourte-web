import axios from 'axios'
import { config } from '../config'

export const getAll = (dispatch) => {
  return (lat, lng) => {
    dispatch({
      type: 'GET_ALL_START'
    })

    const params = {
      lat,
      lng
    }

    axios
      .get(`${config.API}/api/colocations`, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        },
        params
      })
      .then((response) => {
        dispatch({
          type: 'GET_ALL_SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: 'GET_ALL_ERROR'
        })
      })
  }
}

export const createColocation = (dispatch) => {
  /**
   * Curruying the function, cad tu donnes les variables
   */
  return (coloc) => {
    dispatch({
      type: 'CREATE_COLOC'
    })
    axios
      .post(`${config.API}/api/colocations/create`, coloc, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log(response.data)

        dispatch({
          type: 'COLOCATION_CREATED',
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: 'CREATE_COLOC_ERROR'
        })
      })
  }
}
