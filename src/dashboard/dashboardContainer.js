import React, { Component } from 'react'

import { ProfileUserComponent } from '../dashboard/dumbs/profile'

class DashBoardComponent extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render = () => {
    return (
      <ProfileUserComponent
        onSubmit={this.handleSubmit}></ProfileUserComponent>
    )
  }
}

export default DashBoardComponent
