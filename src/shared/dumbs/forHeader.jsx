import React from 'react'

export const AuthNavHeader = (props) =>
  <div className='authHeader'>
    <p>{props.user.username}</p>
    <img src={props.user.picture} alt={'profile'} className='userFbPicture'/>
    <p onClick={ props.onDisconnect }>{'disconnect'}</p>
  </div>

export const NotAuthNavHeader = (props) =>
  <div className='authHeader'>
    <a href={props.fbUrl}>{'connexion avec facebook'}</a>
  </div>

export const AnotherComponent = () =>
  <p>{'AnotherComponent'}</p>
