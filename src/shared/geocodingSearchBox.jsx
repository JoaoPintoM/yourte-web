/* global google */
import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import { connect } from 'react-redux'
// import { getAll } from '../services/api'

class GeocodingSearchBox extends Component {
  constructor (props) {
    super(props)
    console.log(props.val)
    console.log(props.val)
    console.log(props.val)
    console.log(props.app)
    this.state = {
      address: ''
    }
  }

  onSuggestSelect = (suggest) => {
    this.props.setValue(suggest)
    // this.props.onAdressSet({ label: suggest.label, location: suggest.location })
  }

  render () {
    var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ]

    return (
      <div>
        <h3>{'Search Box'}</h3>
        <Geosuggest
            ref={ el => this._geoSuggest = el }
            placeholder="Start typing!"
            initialValue={this.props.app.geoSearch.label}
            fixtures={fixtures}
            country='be'
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(50.8425412, 4.371714099999963)}
            radius="20" />

            <button onClick={() => this._geoSuggest.focus()}>Focus</button>
            <button onClick={() => this._geoSuggest.update('New Zeland')}>Update</button>
            <button onClick={() => this._geoSuggest.clear()}>Clear</button>
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
