import axios from 'axios'

export const getAll = (dispatch) => {
  return () => {
    dispatch({
      type: 'GET_ALL_START'})

    axios
     .get('http://localhost:1338/api/users', { headers: {
       'Authorization': 'Bearer ' + window.localStorage.getItem('token')
     }})
     .then((response) => {
       console.log(response.data[0].username)

       dispatch({
         type: 'GET_ALL_SUCCESS',
         payload: response.data
       })
     })
     .catch((error) => {
       console.log(error)
       dispatch({
         type: 'GET_ALL_ERROR'})
     })
  }
}
