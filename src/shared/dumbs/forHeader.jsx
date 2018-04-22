import React from 'react'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'

export const AuthNavHeader = (props) =>
  <Nav pullRight>
    {/* <NavItem><Link to="/dashboard">{props.user.username}</Link></NavItem> */}
    <img src={props.user.picture} alt={'profile'} className='userFbPicture img-circle'/>
    {/* <NavItem><Link to="/colocations/create">Ajouter</Link></NavItem> */}
    {/* <NavItem onClick={ props.onDisconnect }>{'disconnect'}</NavItem> */}
    {/* <NavItem>
      <img src={props.user.picture} alt={'profile'} className='userFbPicture img-circle'/>
    </NavItem> */}
    <NavDropdown eventKey={3} title={props.user.username} id="basic-nav-dropdown" className="textDropDownMenu">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}><Link to="/colocations/create">Poster une annonce</Link></MenuItem>
      <MenuItem divider />
      <MenuItem onClick={ props.onDisconnect }>{'se déconnecter'}</MenuItem>
    </NavDropdown>
  </Nav>

export const NotAuthNavHeader = (props) =>
  <Nav pullRight>
    <NavItem eventKey={1} href={props.fbUrl} id="textConnexionFacebook">connexion avec facebook</NavItem>
  </Nav>

export const AnotherComponent = () =>
  <p>{'AnotherComponent'}</p>
