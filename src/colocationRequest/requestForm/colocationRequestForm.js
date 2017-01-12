import React, { Component } from 'react';
import {
  FormGroup, ControlLabel, FormControl, option, Radio
} from 'react-bootstrap';

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
          </label>
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

          Préférence secteur habitants:
          <input type="text" defaultValue="" placeholder="judiciaire  "/>
          <br/>
          <br/>

          Hobbies:
          <FormGroup>
           <Radio inline>Vélo</Radio>
           {' '}
           <Radio inline>Sport</Radio>
           {' '}
           <Radio inline>Jeux vidéos</Radio>
         </FormGroup>
          <br/>
          <input type="submit" value="Poster ma recherche" />
        </form>
      </div>
    )
  }

}

export default ColocationRequestForm;
