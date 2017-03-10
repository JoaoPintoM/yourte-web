import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocalUser } from '../services/app'
// import jwtDecode from 'jwt-decode'

class AuthComponent extends Component {
  componentWillMount () {
    window.localStorage.setItem('token', this.props.params.token)
    this.props.getLocalUser()
  }

  render () {
    const props = this.props
    return (
        <div><h1>you are connected {JSON.stringify(props.params.token)}</h1></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalUser: getLocalUser(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(AuthComponent)
