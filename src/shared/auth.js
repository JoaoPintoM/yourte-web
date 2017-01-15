import React, { Component } from 'react'

class AuthComponent extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    window.localStorage.setItem('token', this.props.params.token)
    console.log(window.localStorage.getItem('token'))
  }

  render () {
    const props = this.props
    return (
        <div><h1>you are connected {JSON.stringify(props.params.token)}</h1></div>
    )
  }
}

export default AuthComponent
