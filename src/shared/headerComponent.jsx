import React, { Component } from 'react'
import { getLocalUser, disconnectLocaluser } from '../services/app'
import { connect } from 'react-redux'
import { AuthNavHeader, NotAuthNavHeader } from './dumbs/forHeader'
import { config } from '../config'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'

class HeaderComponent extends Component {

  componentWillMount = () => this.props.getLocalUser()
  handleDisconnect = () => this.props.disconnect()

  render = () => {
    const fbUrl = `${config.API}/auth/facebook`
    let authType = <NotAuthNavHeader fbUrl={fbUrl} />

    if (this.props.user.isAuth) {
      authType = <AuthNavHeader
                    user={this.props.user}
                    onDisconnect={this.handleDisconnect}/>
    }

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <img src="/img/tipi-icon.png" width="35" className="d-inline-block align-top" alt="" />
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
        
            <NavItem><Link to="/">Tipi</Link></NavItem>

          </Nav>
          {authType}
        </Navbar>
      </div>
    )
  }
}

const mapToProps = (store) => {
  return {
    app: store.app,
    user: store.app.localUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLocalUser: getLocalUser(dispatch),
    disconnect: disconnectLocaluser(dispatch)
  }
}
export default connect(mapToProps, mapDispatchToProps)(HeaderComponent)
