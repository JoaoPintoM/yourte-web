import React, { Component } from 'react';
import { Link } from 'react-router';

class RequestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: '' }]
    }

    this.seeWall = this.seeWall.bind(this);
  }
  componentDidMount() {
    console.log('requestList did mount');
    this.setState({
      list: [
        { name: 'Ma première Recherche' },
        { name: 'Ma deuxieme fois sur tipi' },
      ]
    });
  }

  seeWall() {
    console.log('seeWall');
    this.props.router.push('/wall')
  }

  render() {
    const requestList = this.state.list.map((request) => {
      return (
        <div key={request.name}>
          <span>{request.name}</span>
          <button>editer</button>
          <Link to="/wall">
            <button>Voir</button>  
          </Link>
        </div>
      )
    })

    return (
      <div>
        <h2>RequestList</h2>
        <div>{requestList}</div>
      </div>
    )
  }

}

export default RequestListContainer;
