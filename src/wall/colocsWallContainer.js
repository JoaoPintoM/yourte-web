import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {getAll} from '../services/api'

class ColocsWallContainer extends Component {
  constructor(props) {
    super(props);
    console.log("my props", props)
  }

  componentDidMount () {
    this.props.getAll()
  }

  render () {
    const colocList = this.props.list.map((x) => {
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
          { this.props.list.length > 0 ? colocList : 'Loading' }
        </div>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    list: store.colocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: getAll(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(ColocsWallContainer)
