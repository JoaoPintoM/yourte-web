import React, { Component } from 'react';

class WallContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: '' }]
    }
  }

  componentDidMount() {
    console.log('wall did mount');
    this.setState({
      list: [
        { name: 'La maison du bonheur', score: '80', place: '1040 Etterbeek', author: 'Joao Pinto' },
        { name: 'Les Haxxors', score: '64', place: '1050 Ixelles', author: 'Bill Gates' },
        { name: 'Cherche 1 femme (+18 ans)', score: '64', place: '1050 Ixelles', author: 'Marc Enfant' },
      ]
    });
  }

  render() {
    const requestList = this.state.list.map((r) => {
      return (
        <div key={r.name}>
          <h4>{r.score} % MATCHING</h4>
          <h5>{r.name}</h5>
          <span>Situé à: {r.place}</span>
          <span>  -  </span>
          <span>Posté par: {r.author}</span>
          <br/>
          <br/>
        </div>
      )
    })
    return (
      <div>
        <h2>Wall</h2>

        <div>{requestList}</div>
      </div>
    )
  }
}

export default WallContainer;
