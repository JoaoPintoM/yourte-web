import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ProfileContainer from '../profile/profileContainer'
import RequestListContainer from './requestList/requestList.js'

class DashBoardContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount () {
    console.log('dashboard did mount')
  }

  render () {
    return (
      <div>
        <h2>DashBoard</h2>
        <Col xs={6} md={4} >
          <ProfileContainer></ProfileContainer>
        </Col>
        <Col xs={6} md={8} >
          <RequestListContainer></RequestListContainer>
        </Col>
      </div>
    )
  }
}

export default DashBoardContainer
