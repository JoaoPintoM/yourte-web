import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import UploadComponent from '../shared/uploadComponent'

class CreateForm extends Component {
  constructor (props) {
    super(props)
    this.state = { images: [] }
  }

  handleSubmit = (values) => {
    console.log('values', values)
  }

  handleImagesUploaded = (images) => {
    console.log('ici .')
    this.setState({ images })
    this.props.onNewImages(images)
  }

  render () {
    const { handleSubmit } = this.props

    const imgUrlFields = this.state.images.map(u => {
      console.log(u)
      return (
        <Field name="picture"
          component="input" type="text"
          key={u}
          value={u} />
      )
    })

    return (
      <div>
        <UploadComponent onNewImages={this.handleImagesUploaded}></UploadComponent>
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

        <div>{imgUrlFields}</div>

         <button type="submit">Submit</button>
       </form>
     </div>
      )
  }
}

export default reduxForm({
  form: 'create_coloc'
})(CreateForm)
