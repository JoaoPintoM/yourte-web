import React, { Component } from 'react'
import CreateForm from './createForm'
import { connect } from 'react-redux'
import { createColocation } from '../services/api'

class CreationPage extends Component {
  constructor (props) {
    super(props)
    this.state = { imgUrls: [] }
  }

  handleSubmit = (values) => {
    console.log(this.state.imgUrls)
    if (this.state.imgUrls.length > 0) {
      const final = Object.assign({}, values, { images: this.state.imgUrls })
      this.props.createColocation(final)
    }
  }
  handleImages = (images) => {
    this.setState({ imgUrls: images })
  }

  render () {
    return (
      <div>
        <CreateForm onSubmit={this.handleSubmit} onNewImages={this.handleImages} />
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
