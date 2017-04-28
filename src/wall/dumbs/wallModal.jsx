import React from 'react'
import { Col, Button, Modal } from 'react-bootstrap'

export const WallModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'info'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <p>{props.currentColoc.name}</p>
        <img src={props.currentColoc.images[0]} role='presentation' />
        <p>{props.currentColoc.description}</p>
        <h1>Send Message to {props.currentColoc.user.username}</h1>
        <textarea></textarea>
        <button>send</button>

      </Modal.Body>

      <Modal.Footer>
       <Button onClick={props.onClose}>{'Close'}</Button>
     </Modal.Footer>
   </Modal>
  )
}
