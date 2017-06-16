import _ from 'lodash'
import axios from 'axios'
import { config } from '../config'

export const contactColocation = (dispatch) => {
  return (contactInfo) => {
    axios
      .post(`${config.API}api/colocations/${contactInfo.colocationId}/contact`, contactInfo.message, {
        headers: {
          'Authorization': 'Bearer ' + window.localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
