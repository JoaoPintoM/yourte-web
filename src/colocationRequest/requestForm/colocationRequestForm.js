import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, option } from 'react-bootstrap';

class ColocationRequestForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [{ name: '' }]
  //   }
  // }

  componentDidMount() {
    console.log('ColocationRequestForm did mount');
  }

  render() {
    return (
      <div>
        <h3>La colocation que je cherche...</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Code Postal:
            <input type="text" defaultValue="1040"/>
            <br/>
            Prix Max:
            <input type="number" defaultValue="" placeholder="500" />

            <br/>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Types de personnes:</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                 <option value="select">Geeky</option>
                 <option value="other">Boring</option>
                 <option value="other">Calmes</option>
                 <option value="other">Bon vivants</option>
              </FormControl>
            </FormGroup>

            <br/>
            activité:
            <input type="text" defaultValue="" />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default ColocationRequestForm;
