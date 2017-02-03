import React, { Component } from 'react'
import CreateForm from './createForm'
import { connect } from 'react-redux'
import { createColocation } from '../services/api'

class CreationPage extends Component {
  constructor (props) {
    super(props)
    console.log('my props', props)
  }

  handleSubmit = (values) => {
    console.log(values)
    this.props.createColocation(values, values)
  }
  render () {
    return (
      <div>
        <CreateForm onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createColocation: createColocation(dispatch)
  }
}
export default connect(null, mapDispatchToProps)(CreationPage)
