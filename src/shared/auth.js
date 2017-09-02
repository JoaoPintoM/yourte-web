import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocalUser } from '../services/app'
import { Link } from 'react-router'
// import jwtDecode from 'jwt-decode'

class AuthComponent extends Component {
  componentWillMount () {
    window.localStorage.setItem('token', this.props.params.token)
    this.props.getLocalUser()
  }

  render () {
    return (
        <div>
          <h1>{'you are connected'}</h1>
          <h2>{'Welcome to tipi.be'}</h2>

          <br />
          <br />

          <p>{'See the our Colocation Wall: '} <Link to="/wall">wall</Link></p>
          <p>{'Create a new colocation: '} <Link to="/colocations/create">create</Link></p>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalUser: getLocalUser(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(AuthComponent)
