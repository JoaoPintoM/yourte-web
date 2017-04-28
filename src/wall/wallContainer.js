import React, { Component } from 'react'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { connect } from 'react-redux'
import { getAll, setGeoPosition, setPriceRange } from '../services/api'
import { Col, Button, Modal } from 'react-bootstrap'
import { config } from '../config'
import { WallModal } from './dumbs/wallModal'

const Slider = require('rc-slider')
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

import 'rc-slider/assets/index.css'

class WallContainer extends Component {

  previousSearch = {}

  constructor (props) {
    super(props)

    this.state = {
      showModal: false,
      currentColoc: {
        images: [],
        user: {
          username: 'anonymous'
        }
      }
    }
  }

  close () {
    console.log('closing ?')
    this.setState({ showModal: false })
  }

  open (coloc) {
    console.log(coloc)
    this.setState({ showModal: true, currentColoc: coloc })
  }

  componentDidMount () {
    this.close = this.close.bind(this)
  }

  componentWillReceiveProps = (nextProps) => {
    const { search } = nextProps

    if (search && search !== this.previousSearch) {
      this.previousSearch = search
      this.props.getAll(search)
    }
  }

  handleSlider = (vals) =>
    this.props.setPriceRange({ minPrice: vals[0], maxPrice: vals[1] })

  handleNewAdress = (adress) => {
    if (adress.location) {
      this.props.setGeoPosition({ lat: adress.location.lat, lng: adress.location.lng })
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
          <Range min={0} max={1000} defaultValue={[3, 850]} onAfterChange={this.handleSlider}/>
        <GeocodingSearchBox val="cumieira, portugal" onAdressSet={this.handleNewAdress} />
        <div>
          { this.props.colocs.length > 0 ? colocs : 'Loading' }
        </div>

        <WallModal
          currentColoc={this.state.currentColoc}
          showModal={this.state.showModal}
          onClose={this.close}>
        </WallModal>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    colocs: store.colocations,
    search: store.search,
    app: store.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: getAll(dispatch),
    setGeoPosition: setGeoPosition(dispatch),
    setPriceRange: setPriceRange(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(WallContainer)
