import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export const AuthNavHeader = (props) =>
  <Nav pullRight>
    {/* <img src={props.user.picture} alt={'profile'} className='userFbPicture'/> */}
    <NavItem>{props.user.username}</NavItem>
    <NavItem onClick={ props.onDisconnect }>{'disconnect'}</NavItem>
  </Nav>

export const NotAuthNavHeader = (props) =>
  <Nav pullRight>
    <NavItem eventKey={1} href={props.fbUrl}>connexion avec facebook</NavItem>
  </Nav>

export const AnotherComponent = () =>
  <p>{'AnotherComponent'}</p>
