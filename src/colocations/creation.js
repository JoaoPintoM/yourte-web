import React, { Component } from 'react'
import CreateForm from './createForm'
import { connect } from 'react-redux'
import { createColocation } from '../services/api'
// import { FiltersScreenComponent } from '../shared/dumbs/filters'

class CreationPage extends Component {
  constructor (props) {
    super(props)
    this.state = { imgUrls: [], location: null, errorMessage: '', filterChecked: {}, }
  }

  handleImages = (images) => this.setState({ imgUrls: images })
  handleNewAdress = (adress) => this.setState({ location: adress })

  filters = []
  handleFilterClick = (value) => {
    const index = this.filters.indexOf(value.target.name)
    if (index === -1) {
      this.filters.push(value.target.name)
    } else {
      this.filters.splice(index, 1);
    }
  }

  handleSubmit = (values) => {
    if (!this.state.location) {
      this.setState({ errorMessage: 'Choisissez une adresse' })
      return
    }

    if (this.state.imgUrls.length > 0) {
      const final = Object.assign({}, values,
        { images: this.state.imgUrls, location: this.state.location, filters: this.filters })

      this.props.createColocation(final)
      return this.props.router.push('/wall')
    }
  }

  render = () => {
    return (
      <div className="marginTop30">
        <CreateForm
          filterSelected={this.handleFilterClick}
          filter={this.state.filterChecked}
          errorMessage={this.state.errorMessage}
          onSubmit={this.handleSubmit}
          onNewImages={this.handleImages}
          onAdressSet={this.handleNewAdress} />
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
