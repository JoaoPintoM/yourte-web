/* global google */
import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
// import { getAll } from '../services/api'

class GeocodingSearchBox extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = {
      address: ''
    }
  }

  onSuggestSelect = (suggest) => {
    this.props.setValue(suggest)
    this.props.onAdressSet({ label: suggest.label, location: suggest.location })
  }

  render () {
    var fixtures = [
      {label: 'Bruxelles, Belgique', location: {lat: 50.8503396, lng: 4.351710300000036}},
      {label: 'Louvain-la-Neuve, Ottignies, Belgique', location: {lat: 50.66808100000001, lng: 4.611832400000026}},
      {label: 'Namur, Belgique', location: {lat: 48.862725, lng: 2.287592000000018}}
    ]

    return (
      <div>
        <Geosuggest
            ref={ el => this._geoSuggest = el }
            placeholder="Où cherchez vous (ville, rue numéro, ...)"
            initialValue={this.props.app.geoSearch.label}
            fixtures={fixtures}
            country='be'
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(50.8425412, 4.371714099999963)}
            radius="20" />

        {/* A JSX comment
            <button onClick={() => this._geoSuggest.focus()}>Focus</button>
            <button onClick={() => this._geoSuggest.update('New Zeland')}>Update</button>
            <button onClick={() => this._geoSuggest.clear()}>Clear</button>
            */}
          <br />
      </div>
    )
  }

}

const mapToProps = (store) => {
  return {
    app: store.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (value) => {
      dispatch({
        type: 'SET_GEOSEARCH',
        payload: value
      })
    }
  }
}
export default connect(mapToProps, mapDispatchToProps)(GeocodingSearchBox)
