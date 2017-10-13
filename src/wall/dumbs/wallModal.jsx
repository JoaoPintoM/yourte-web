import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { config } from '../../config'


let WallModal = (props) => {
  const { handleSubmit } = props

  const getImageMedUrl = (image) =>
    `${config.IMAGES_URL}${config.IMG_MED_SCALE}/${image}${config.JPG}`

  const imageZ = props.currentColoc.images.map((u) =>
    <img key={u} role="presentation" src={getImageMedUrl(u)} style={{width: '200px'}}/>
  )

  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Contacter la cololcation'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      {imageZ}

      <br />
      <br />
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="colocId" component="input" type="hidden"/>
          </div>

          <div>
            <p>Votre email</p>
            <Field name="email" component="input" type="email" className="jInput" placeholder="xx@email.com" />
          </div>

          <div>
            <label>Message</label>
            <div>
              <Field name="message" component="textarea" className="jInput" placeholder="eg. Je suis interessé par votre colocation.."/>
            </div>
          </div>

          <button type="submit">{'Envoyer'}</button>
        </form>

      </Modal.Body>

      <Modal.Footer>
       <Button onClick={props.onClose}>{'Close'}</Button>
     </Modal.Footer>
   </Modal>
  )
}

WallModal = reduxForm({
  form: 'contact-modal',
  enableReinitialize: true
  // initialValues: {
  //   firstName: data.firstName
  // }
})(WallModal)

export default WallModal
