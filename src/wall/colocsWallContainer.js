import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../services/users'

class ColocsWallContainer extends Component {
  constructor (props) {
    super(props)
    console.log('Mais ici cest les ROOMATES')
    console.log('my props', props)
  }

  componentDidMount () {
    this.props.getUsers()
  }

  render () {
    const colocList = this.props.users.map((x) => {
      return (
        <div key={x.id}>
          <h4>{x.username}</h4>
          <img src={x.picture} alt={x.username} />
          <br/>
          <br/>
        </div>
      )
    })
    return (
      <div>
        <h2>Colocs Wall</h2>

        <div>
          { this.props.users.length > 0 ? colocList : 'Loading' }
        </div>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    users: store.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: getUsers(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(ColocsWallContainer)
