import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import UploadComponent from '../shared/uploadComponent'

class CreateForm extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  handleImagesUploaded = (images) => {
    console.log('ici .')
    console.log(images)
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <UploadComponent onNewImages={this.handleImagesUploaded}></UploadComponent>
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Colocation Name</label>
           <Field name="name" component="input" type="text"/>
         </div>
         <div>
           <label htmlFor="price">Loyer</label>
           <Field name="price" component="input" type="number"/>
         </div>
         <div>
           <label htmlFor="description">Description courte</label>
           <Field name="description" component="input" type="text"/>
         </div>

        <div>
          <label>Longue description</label>
          <div>
            <Field name="longdesc" component="textarea"/>
          </div>
        </div>

         <button type="submit">Submit</button>
       </form>
     </div>
      )
  }
}

export default reduxForm({
  form: 'create_coloc'
})(CreateForm)
