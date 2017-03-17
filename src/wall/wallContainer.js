import React, { Component } from 'react'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { connect } from 'react-redux'
import { getAll } from '../services/api'
import { Col, Button, Modal } from 'react-bootstrap'
import { config } from '../config'
// import { Range } from 'rc-slider'

const Slider = require('rc-slider')
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

import 'rc-slider/assets/index.css'

class WallContainer extends Component {

  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      currentColoc: {
        images: []
      }
    }
  }

  close () {
    this.setState({ showModal: false })
  }

  open (coloc) {
    console.log(coloc)
    this.setState({ showModal: true, currentColoc: coloc })
  }

  componentDidMount () {
    this.close = this.close.bind(this)
    this.props.getAll()
  }

  handleSlider = (vals) => {
    console.log(this.props.app.geoSearch)
    console.log(vals)
  }

  handleNewAdress = (adress) => {
    if (!adress.location) {
      this.props.getAll()
    } else {
      this.props.getAll(adress.location.lat, adress.location.lng)
    }
  }

  getImageMedUrl = (image) =>
    `${config.IMAGES_URL}${config.IMG_MED_SCALE}/${image}${config.JPG}`

  render () {
    const userImgStyle = { width: '60px' }
    const imgStyle = { width: '250px' }
    const colocs = this.props.colocs.map((r) => {
      return (
        <Col sm={6} md={3} key={r.id} onClick={ this.open.bind(this, r) }>
          <p>{r.name} - {r.price} €</p>
          <img src={this.getImageMedUrl(r.images[0])} role='presentation' style={imgStyle} />
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

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{'info'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>{this.state.currentColoc.name}</p>
              <img src={this.state.currentColoc.images[0]} role='presentation' style={imgStyle} />
          </Modal.Body>
          <Modal.Footer>
           <Button onClick={this.close}>{'Close'}</Button>
         </Modal.Footer>
       </Modal>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    colocs: store.colocations,
    app: store.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: getAll(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(WallContainer)
