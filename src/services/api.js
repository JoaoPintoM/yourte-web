import _ from 'lodash'
import axios from 'axios'
import { config } from '../config'

export const setGeoPosition = (dispatch) =>
  (payload) => dispatch({ type: 'SET_GEOPOSITION', payload })

export const setPriceRange = (dispatch) =>
  (payload) => dispatch({ type: 'SET_PRICE_RANGE', payload })

export const getAll = (dispatch) => {
  return (search) => {
    dispatch({
      type: 'GET_ALL_START'
    })

    console.log('GET ALL!!')

    const { lng, lat, minPrice, maxPrice } = search
    const params = _(search).omitBy(_.isUndefined).omitBy(_.isNull).value()

    console.log(params)
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
