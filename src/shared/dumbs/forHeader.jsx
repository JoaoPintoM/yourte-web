import React from 'react'

export const AuthNavHeader = (props) =>
  <div>
    <p>{props.user.username}</p>
    <img src={props.user.picture} alt={'profile'} />
    <p onClick={ props.onDisconnect }>{'disconnect'}</p>
  </div>

export const NotAuthNavHeader = (props) =>
  <a href={props.fbUrl}>{'connexion avec facebook'}</a>

export const AnotherComponent = () =>
  <p>{'AnotherComponent'}</p>
