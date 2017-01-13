import React, { Component } from 'react';
import axios from 'axios';

class ColocsWallContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {

    axios
     .get('http://localhost:1338/api/users')
     .then((response) => {
       console.log(response.data[0].username);

       this.setState({
         list: response.data
       });
       console.log(response.data)
     })
     .catch((error) => {
       console.log(error);
     });
  }

  render() {
    const colocList = this.state.list.map((x) => {
      return (
        <div key={x.id}>
          <h4>{x.username}</h4>
          <img src={x.picture} alt={x.username} />
          <br/>
          <br/>
        </div>
      )
    })
    return (
      <div>
        <h2>Colocs Wall</h2>

        <div>
          { this.state.list.length > 0 ? colocList : 'Loading' }
        </div>
      </div>
    )
  }
}

export default ColocsWallContainer;
