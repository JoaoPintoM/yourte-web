/* global google */
import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'

class GeocodingSearchBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      address: ''
    }
  }

  onSuggestSelect = (suggest) => {
    console.log(suggest)
    console.log('great')
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
            ref={el=> this._geoSuggest = el}
            placeholder="Start typing!"
            initialValue="Bruxelles, Belgique"
            fixtures={fixtures}
            country='be'
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(50.8425412, 4.371714099999963)}
            radius="20" />

            <button onClick={()=>this._geoSuggest.focus()}>Focus</button>
            <button onClick={()=>this._geoSuggest.update('New Zeland')}>Update</button>
            <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
          <br />
      </div>
    )
  }

}

export default GeocodingSearchBox
