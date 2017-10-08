import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

let WallModal = (props) => {
  const { handleSubmit } = props
  console.log(props)
  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Contact colocation'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="colocId" component="input" type="hidden"/>
          </div>

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
