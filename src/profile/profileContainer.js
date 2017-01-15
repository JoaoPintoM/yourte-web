import React, { Component } from 'react';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

     this.state = {
       firstname: '',
       lastname: '',
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({ firstname: event.target.value });
   }

   handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + JSON.stringify(this.state));
  }

  componentDidMount() {
    console.log('profile did mount');
    this.setState({
      firstname: 'Joao',
      lastname: 'Pinto'
    });
  }

  render() {
    return (
      <div>
        <h3>Profile</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            prénom:
            <input type="text" value={this.state.firstname}
              onChange={this.handleChange} />
            <br/>
            nom:
            <input type="text" defaultValue="Pinto" />

            <br/>
            age:
            <input type="number" defaultValue="29" />

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

export default ProfileContainer
