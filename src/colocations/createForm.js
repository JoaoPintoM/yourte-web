import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import UploadComponent from '../shared/uploadComponent'
import GeocodingSearchBox from '../shared/geocodingSearchBox'

class CreateForm extends Component {

  handleNewAdress = (adress) => this.props.onAdressSet(adress)
  handleImagesUploaded = (images) => this.props.onNewImages(images)

  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <GeocodingSearchBox val="cumieira, portugal" onAdressSet={this.handleNewAdress} />
        <UploadComponent onNewImages={this.handleImagesUploaded} />

       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="name">Colocation Name</label>
           <Field name="name" component="input" type="text" />
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
