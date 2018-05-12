import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'
import ProfileUserComponent from '../dashboard/dumbs/profile'
import { connect } from 'react-redux'
import { getLocalUser } from '../services/app'

class DashBoardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'joao',
      favorites: [{_id: 'toto'}]
    }
  }
  handleSubmit = (values) => {
    console.log(values)
  }

  componentWillMount () {
    this.props.getLocalUser()

    axios.get(`${config.API}/api/users/${this.props.user.userId}`, {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    }).then((response) => {
      console.log(response.data)
      this.setState({ favorites: response.data.favorites })
    }).catch((error) => { console.log(error) })
  }

  render = () => {
    return (
      <div>
      <ProfileUserComponent
        onSubmit={this.handleSubmit}></ProfileUserComponent>

      <p>{this.state.favorites[0]._id}</p>
      <p>{this.state.name}</p>
      <p>{this.props.user.username}</p>
      <p>{this.props.user.id}</p>
      <p>{this.props.user._id}</p>
      <p>{this.props.user.userId}</p>
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
// export default DashBoardContainer
const mapDispatchToProps = (dispatch) => {
  return {
    getLocalUser: getLocalUser(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(DashBoardContainer)
