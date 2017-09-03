import React, { Component } from 'react'
import { Button, Modal, Jumbotron, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { connect } from 'react-redux'
import { setGeoPosition } from '../services/api'
import { getLocalStorage } from '../services/app'
import { config } from '../config'
// import { Image } from 'cloudinary-react'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.fbConnect = this.fbConnect.bind(this)
  }

  componentDidMount () {
    this.props.getLocalStorage()
    this.setState({ showModal: false })
  }

  componentWillReceiveProps = (nextProps) => {
    const { app } = nextProps
    if (app.localstorage) {
      console.log(app.localstorage)
    }
  }

  close () {
    this.setState({ showModal: false })
  }

  selectPrevious = (previous) => {
    this.props.setGeoPosition(previous)
    this.props.router.push('/wall')
  }

  open () {
    this.setState({ showModal: true })
  }

  fbConnect () {
    this.setState({ showModal: false })
    this.props.router.push('/colocswall')
  }

  handleNewAdress = (adress) => {
    if (adress.location) {
      this.props.setGeoPosition({ label: adress.label, lat: adress.location.lat, lng: adress.location.lng })
      this.props.router.push('/wall')
    }
  }

  render () {
    const fbUrl = `${config.API}/auth/facebook`

    const previousSearch = this.props.app.localstorage.map((r) => {
      return (
        <Col sm={3} key={r.lat} onClick={ this.selectPrevious.bind(this, r)}>
          <p>{r.label}</p>
          <p>{'<'} {r.maxPrice}</p>
        </Col>
      )
    })
    return (
      <div>
        <Jumbotron className='bg'>
          {' '}{' '}{' '}
          <GeocodingSearchBox val="cumieira, portugal" onAdressSet={this.handleNewAdress}/>
          {' '}

          <button onClick={this.open}>{'Je cherche une colocation'}</button>
          <button onClick={this.open}>{'Nous recherchons un colocataire'}</button>

        </Jumbotron>
        <br />
        <Link to="/dashboard">{'dashboard'}</Link>

        <div>
          { this.props.app.localstorage.length > 0 ? previousSearch : 'Loading' }
        </div>

         <Modal show={this.state.showModal} onHide={this.close}>
           <Modal.Header closeButton>
             <Modal.Title>{'Se connecter / Sinscrire sur tipi.be'}</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <a href={fbUrl}>{'connexion avec facebook'}</a>
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
    search: store.search,
    app: store.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGeoPosition: setGeoPosition(dispatch),
    getLocalStorage: getLocalStorage(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(HomeContainer)
