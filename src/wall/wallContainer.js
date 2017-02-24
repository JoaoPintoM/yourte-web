import React, { Component } from 'react'
import axios from 'axios'
import { config } from '../config'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { connect } from 'react-redux'
import { getAll } from '../services/api'
import { Col } from 'react-bootstrap'
// import { Range } from 'rc-slider'

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

import 'rc-slider/assets/index.css'
// slider/index.css

class WallContainer extends Component {

  componentDidMount () {
    this.props.getAll()
  }

  handleSlider = (vals) => {
    console.log(vals)
  }

  handleNewAdress = (adress) => {
    if (!adress.location) {
      this.props.getAll()
    } else {
      this.props.getAll(adress.location.lat, adress.location.lng)
    }
  }

  render () {
    const userImgStyle = { width: '60px' }
    const imgStyle = { width: '250px' }
    const colocs = this.props.colocs.map((r) => {
      return (
        <Col sm={6} md={3} key={r.id} >
          <h4>{r.name} - {r.price} €</h4>
          <img src={r.images[0]} role='presentation' style={imgStyle} />
          <br />
          <span>Situé à: </span>
          <span>{' - '}{r.adress}</span>
          <br />
          <span>Posté par: {r.user.username}</span>
          <br/>
          <img src={r.user.picture} role='presentation' style={userImgStyle} />
          <br/>
          <br/>
          <br/>
        </Col>
      )
    })
    return (
      <div>
        <h2>Wall</h2>
          <Range min={0} max={20} defaultValue={[3, 10]} onAfterChange={this.handleSlider}/>
        <GeocodingSearchBox val="cumieira, portugal" onAdressSet={this.handleNewAdress} />
        <div>
          { this.props.colocs.length > 0 ? colocs : 'Loading' }
        </div>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    colocs: store.colocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: getAll(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(WallContainer)
