import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ProfileUserComponent extends Component {

  // handleNewAdress = (adress) => this.props.onAdressSet(adress)
  // handleImagesUploaded = (images) => this.props.onNewImages(images)
  // handleFilterClick = (value) => this.props.filterSelected(value)

  render () {
    const { handleSubmit } = this.props

    return (
      <div className="container">
       <form onSubmit={handleSubmit} className="formCreate">

       <div className="row">
        <div className="col-md-6">
         <div>
           <p>{'Nom de votre colocation'}</p>
           <Field name="name" component="input" type="text" className="jInput" placeholder="Maison du bonheur"/>
         </div>
         </div>
        </div>
        <br />
         <button className="btn btn-default" type="submit">{'Valider colocation'}</button>
       </form>
     </div>
      )
  }
}

export default reduxForm({
  form: 'redux_profile'
})(ProfileUserComponent)
