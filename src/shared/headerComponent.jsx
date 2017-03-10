import React, { Component } from 'react'
import { getLocalUser } from '../services/app'
import { connect } from 'react-redux'

class HeaderComponent extends Component {

  componentWillMount = () => {
    this.props.getLocalUser()
  }

  render = () => (
    <div>
      <h1>Header</h1>
      <p>{JSON.stringify(this.props.app.geoSearch)}</p>
      <p>{JSON.stringify(this.props.app.localUser)}</p>
    </div>
  )
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
