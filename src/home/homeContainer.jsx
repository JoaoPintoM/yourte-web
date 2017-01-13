import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
// import SearchBoxExample from '../shared/googleSearch'

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
    this.props.router.push('/colocation')
  }

  render () {
    return (
      <div>
{' '}{' '}{' '}
<GeocodingSearchBox />
    {' '}
        <button onClick={this.open}>{'Je cherche une colocation'}</button>
        <button onClick={this.open}>{'Nous recherchons un colocataire'}</button>

        <br />
        <Link to="/dashboard">{'dashboard'}</Link>

         <Modal show={this.state.showModal} onHide={this.close}>
           <Modal.Header closeButton>
             <Modal.Title>{'Se connecter / Sinscrire sur tipi.be'}</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <button onClick={this.fbConnect}>{'connexion avec facebook'}</button>
           </Modal.Body>
           <Modal.Footer>
            <Button onClick={this.close}>{'Close'}</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}

export default HomeContainer
