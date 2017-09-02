import React, { Component } from 'react'
import { Button, Modal, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { connect } from 'react-redux'
import { setGeoPosition } from '../services/api'
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
    this.setState({ showModal: false })
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  fbConnect () {
    this.setState({ showModal: false })
    this.props.router.push('/colocswall')
  }

  handleNewAdress = (adress) => {
    console.log(adress.location)
    if (adress.location) {
      this.props.setGeoPosition({ lat: adress.location.lat, lng: adress.location.lng })
      this.props.router.push('/wall')
    }
  }

  render () {
    const fbUrl = `${config.API}/auth/facebook`
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
    setGeoPosition: setGeoPosition(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(HomeContainer)
