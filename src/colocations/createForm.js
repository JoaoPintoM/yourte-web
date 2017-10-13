import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Alert } from 'react-bootstrap'
import UploadComponent from '../shared/uploadComponent'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { FiltersScreenComponent } from '../shared/dumbs/filters'

class CreateForm extends Component {

  handleNewAdress = (adress) => this.props.onAdressSet(adress)
  handleImagesUploaded = (images) => this.props.onNewImages(images)
  handleFilterClick = (value) => this.props.filterSelected(value)

  render () {
    const { handleSubmit, errorMessage, handleFilterClick, filterChecked } = this.props
    console.log(errorMessage)
    const oioi = () => {
      console.log('in oioi')
      console.log(this.props)
      // if (!this.errorMessage) {
      //   return <p>'toto'</p>
      // }
      return (
        <Alert bsStyle="warning">
          <strong>{'joao'}</strong>
        </Alert>
      )
    }
    return (
      <div className="container">
       <form onSubmit={handleSubmit} className="formCreate">

       <div className="row">
        <div className="col-md-6">
         <div>
           <p>{'Nom de votre colocation'}</p>
           <Field name="name" component="input" type="text" className="jInput" placeholder="Maison du bonheur"/>
         </div>
         <div>
           <p>{'Loyer mensuel'}</p>
           <Field name="price" component="input" type="number" className="jInput" placeholder="450 euros"/>
         </div>

         </div>

         <div className="col-md-6">
         <div>
           <p>{'Description courte'}</p>
           <Field name="description" component="input" type="text" className="jInput" placeholder="4 chambres et ensoleillé"/>
         </div>


          <div>
            <div>
              <p>{'Description Longue'}</p>
              <Field name="longdesc" component="textarea"  className="jInput" rows="3"/>
            </div>
          </div>

          </div>

          </div>


          <p>{'Votre adresse'}</p>
          <GeocodingSearchBox val="cumieira, portugal" placeholder="L'adresse de votre colocation.." onAdressSet={this.handleNewAdress} />

          <p>{'Uploadez vos photos'}</p>
          <UploadComponent onNewImages={this.handleImagesUploaded} />

          <h2>{'Ajouter des filtres'}</h2>
          <FiltersScreenComponent
            filterSelected={this.handleFilterClick}>
          </FiltersScreenComponent>

        <br />
         <button className="btn btn-default" type="submit">{'Valider colocation'}</button>
       </form>
     </div>
      )
  }
}

export default reduxForm({
  form: 'create_coloc'
})(CreateForm)
