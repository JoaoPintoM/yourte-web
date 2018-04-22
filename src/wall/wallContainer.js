import React, { Component } from 'react'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { FiltersScreenComponent } from '../shared/dumbs/filters'
import { connect } from 'react-redux'
import { getAll, setGeoPosition, setPriceRange, setFilters, contactColocation } from '../services/api'
import { getCurrentSearch } from '../services/app'
import { Col } from 'react-bootstrap'
import { config } from '../config'
import WallModal from './dumbs/wallModal'

const Slider = require('rc-slider')
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

import 'rc-slider/assets/index.css'

class WallContainer extends Component {

  previousSearch = {}

  constructor (props) {
    super(props)

    this.state = {
      visibilityFilters: false,
      showModal: false,
      contactTextValue: 'hellow',
      filterChecked: {
      },
      filterValues: {

      },
      selectedFilters: [],
      currentColoc: {
        images: [],
        user: {
          username: 'anonymous'
        }
      },
      minPrice: 0,
      maxPrice: 850
    }
  }

  close () { this.setState({ showModal: false }) }

  closeFilters () { this.setState({ visibilityFilters: false }) }

  handleContactForm = (event) => {
    console.log(event.target.value)
  }

  // handleSubmit = (values) => {
  //   console.log()
  // }

  open (coloc) {
    console.log(coloc)
    this.setState({ showModal: true, currentColoc: coloc })
  }

  componentDidMount () {
    this.props.getCurrentSearch()
    this.close = this.close.bind(this)
    this.closeFilters = this.closeFilters.bind(this)
  }

  componentWillReceiveProps = (nextProps) => {
    const { search } = nextProps
    if (search && search !== this.previousSearch) {
      this.previousSearch = search
      this.props.getAll(search)
    }
  }

  handleSlider = (vals) => {
    this.setState({ minPrice: vals[0], maxPrice: vals[1] })
    this.props.setPriceRange({ minPrice: vals[0], maxPrice: vals[1] })
  }


  handleNewAdress = (adress) => {
    if (adress.location) {
      this.props.setGeoPosition({ label: adress.label, lat: adress.location.lat, lng: adress.location.lng })
    }
  }

  handleSubmitContact = (values) => {
    if (!values.message) return;
    if (!values.email) return;

    this.props.contactColocation(values)
    this.setState({ showModal: false })
  }

  handleVisibilityFilters = () => {
    this.setState({ visibilityFilters: !this.state.visibilityFilters })
    console.log(this.state.visibilityFilters)
  }

  filters = [];
  handleFilterClick = (value) => {
    this.setState({
      filterChecked: {
        [value.target.name]: value.target.checked
      }
    })

    const index = this.filters.indexOf(value.target.name)
    if (index === -1) {
      this.filters.push(value.target.name)
    } else {
      this.filters.splice(index, 1)
    }

    console.log(' jOAO ')
    console.log(this.state.filterChecked)
    console.log(this.filters)

    this.setState({ selectedFilters: this.filters })
    this.props.setFilters({ filters: this.filters })
  }

  getImageMedUrl = (image) =>
    `${config.IMAGES_URL}${config.IMG_MED_SCALE}/${image}${config.JPG}`

  render () {
    const truncateString = (s) => {
      if (s.length < 40) return s
      return `${s.substring(0, 40)}...`
    }
    const userImgStyle = { width: '60px' }
    const imgStyle = { width: '250px' }
    const colocs = this.props.colocs.map((r) => {
      return (
        <Col className='wallVignette' sm={6} md={4} lg={3} key={r.id} onClick={ this.open.bind(this, r) }>

          <div className="imgContainer">
            <img className='image' src={this.getImageMedUrl(r.images[0])} role='presentation' />
            <div className="middle">
              <div className="text">{r.description}</div>
            </div>
          </div>
          <p className='vigTitle'>[{r.price} €] {r.name}</p>

          <span>{truncateString(r.adress)}</span>
          {/*
          <span>Situé à: </span>
          <span>{' - '}{r.adress}</span>
          <br />

          <p className='vigUser'>{r.user.username}</p>
          */}
          <img src={r.user.picture} role='presentation' style={userImgStyle} />
        </Col>
      )
    })

    let filtersScreen = null;
     if (this.state.visibilityFilters) {
       filtersScreen = (<FiltersScreenComponent
         showModal={this.state.visibilityFilters}
         onClose={this.closeFilters}
         filterSelected={this.handleFilterClick}
         filter={this.state.filterChecked}
         joaoFilters={this.state.selectedFilters}>
       </FiltersScreenComponent>)
     } else {
       filtersScreen = null
     }

    return (
      <div className="marginTop10">
        <div className='geocodingWallSection'>
          {/*<span className='searchIcon'><i className="fa fa-map-marker"></i></span>*/}
          <GeocodingSearchBox val="cumieira, portugal" placeholder="Où cherchez vous (ville, rue numéro, ...)" onAdressSet={this.handleNewAdress} />
        </div>
        <div>
          <Col md={2}>
            <p>Budget: Entre {this.state.minPrice} et {this.state.maxPrice}</p>
          </Col>
          <Col md={10}>
            <Range min={0} max={1000} defaultValue={[0, 850]} onAfterChange={this.handleSlider}/>
          </Col>
        </div>

        <br />
        <div className='buttonFiltersSection'>
          <button onClick={ this.handleVisibilityFilters }>{'Filtres supplementaires'}</button>
        </div>
        {filtersScreen}

        <div>
          { this.props.colocs.length > 0 ? colocs : 'Pas de résultats..' }
        </div>

        <WallModal
          currentColoc={this.state.currentColoc}
          initialValues={{ colocId: this.state.currentColoc.id }}
          showModal={this.state.showModal}
          contactTextValue={this.state.contactTextValue}
          onClose={this.close}
          onSendFormValue={this.handleContactForm}
          onSubmit={this.handleSubmitContact}
          onChangeContactValue={this.handleContactForm}
        >
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
    getCurrentSearch: getCurrentSearch(dispatch),
    getAll: getAll(dispatch),
    setGeoPosition: setGeoPosition(dispatch),
    setPriceRange: setPriceRange(dispatch),
    setFilters: setFilters(dispatch),
    contactColocation: contactColocation(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(WallContainer)
