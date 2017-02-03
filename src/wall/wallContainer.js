import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'
import { connect } from 'react-redux'
import { getAll } from '../services/api'

class WallContainer extends Component {

  componentDidMount () {
    this.props.getAll()
  }

  render () {
    const imgStyle = {
      width: '60px'
    }
    const colocs = this.props.colocs.map((r) => {
      return (
        <div key={r.id}>
          <h4>{r.name} - {r.price} €</h4>
          <span>Situé à: x</span>
          <span>{' - '}</span>
          <span>Posté par: {r.user.username}</span>
          <br/>
          <img src={r.user.picture} role='presentation' style={imgStyle} />
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
          { this.props.colocs.length > 0 ? colocs : 'Loading' }
        </div>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    colocs: store.colocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: getAll(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(WallContainer)
