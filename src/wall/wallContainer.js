import React, { Component } from 'react'
import axios from 'axios'

class WallContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    axios
     .get('http://localhost:1338/api/colocations', { headers: {
       'Authorization': 'Bearer ' + window.localStorage.getItem('token')
     }})
     .then((response) => {
       this.setState({
         list: response.data
       })
       console.log(response.data)
     })
     .catch((error) => {
       console.log(error)
     })
  }

  render () {
    const imgStyle = {
      width: '60px'
    }
    const colocs = this.state.list.map((r) => {
      return (
        <div key={r.id}>
          <h4>{r.name} - {r.price} €</h4>
          <span>Situé à: x</span>
          <span>  -  </span>
          <span>Posté par: {r.user.username}</span>
          <br/>
          <img src={r.user.picture} style={imgStyle} />
          <br/>
          <br/>
          <br/>
        </div>
      )
    })
    return (
      <div>
        <h2>Wall</h2>

        <div>
          { this.state.list.length > 0 ? colocs : 'Loading' }
        </div>
      </div>
    )
  }
}

export default WallContainer;
