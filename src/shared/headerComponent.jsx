import React, { Component } from 'react'
import { getLocalUser } from '../services/app'
import { connect } from 'react-redux'

class HeaderComponent extends Component {

  componentWillMount = () => {
    this.props.getLocalUser()
  }

  render = () => {
    let authType = <p>{'not auth'}</p>
    if (this.props.user.isAuth) {
      authType = <p>{this.props.user.username}</p>
    }

    return (
      <div>
        <h1>Header</h1>
        {authType}
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    app: store.app,
    user: store.app.localUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalUser: getLocalUser(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(HeaderComponent)
