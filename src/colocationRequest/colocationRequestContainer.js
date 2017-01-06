import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ProfileContainer from '../profile/profileContainer';
import ColocationRequestForm from './requestForm/colocationRequestForm'

class ColocationRequestContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [{ name: '' }]
  //   }
  // }

  componentDidMount() {
    console.log('colocation did mount');
  }

  render() {
    return (
      <div>
        <h2>ColocationRequest</h2>
        <Col xs={6} md={4} >
          <ProfileContainer></ProfileContainer>
        </Col>
        <Col xs={6} md={8} >
          <ColocationRequestForm />
        </Col>
      </div>
    )
  }

}

export default ColocationRequestContainer;
