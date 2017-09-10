import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

let WallModal = (props) => {
  const { handleSubmit } = props

  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'info'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
{/*
        <p>{props.currentColoc.name}</p>
        <img src={props.currentColoc.images[0]} role='presentation' />
        <p>{props.currentColoc.description}</p>
        <h1>Send Message to {props.currentColoc.user.username}</h1>
        <p>{JSON.stringify(props.currentColoc)}</p>
*/}
        <p>{props.currentColoc.id}</p>

        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
          <div>
            <Field name="colocId" component="input" />
          </div>
          <input name="toto" defaultValue={props.currentColoc.id}/>
          {'toto'}
          {' '}
          <Field name="toto2" component="input" value={props.currentColoc.id}/>
          <div>
            <label htmlFor="name">Colocation Name</label>
            <Field name="name" component="input" type="text" />
          </div>

          <div>
            <label>Longue description</label>
            <div>
              <Field name="longdesc" component="textarea"/>
            </div>
          </div>

          <button type="submit">Submit</button>
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
