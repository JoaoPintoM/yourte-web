import React, { Component } from 'react'
import './App.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import HomeContainer from './home/homeContainer'
import DashBoardContainer from './dashboard/dashboardContainer'
import WallContainer from './wall/wallContainer'
import ColocsWallContainer from './wall/colocsWallContainer'
import ColocationRequestContainer from './colocationRequest/colocationRequestContainer'
import AuthComponent from './shared/auth'
import CreationPage from './colocations/creation'
import HeaderComponent from './shared/headerComponent'

const Outer = (props) => (
  <div className="App">
    <HeaderComponent />
    <div>
      {/*<Links />*/}
      {props.children}
    </div>
  </div>
)
// const Home = () => <HomeContainer><HomeContainer/>;
const About = () => (
  <div>
    <h4>{'Vous devez vous connecter pour pouvoir utiliser notre service Tipi'}</h4>
  </div>
)
const Contact = () => <div><h1>Contact</h1></div>

const isAuth = (nextState, replace, callback) => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    replace('about')
  }
  callback()
}

class App extends Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Outer}>
          <IndexRoute component={HomeContainer}></IndexRoute>
          <Route path="about" component={About}></Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="dashboard" component={DashBoardContainer}></Route>
          <Route path="wall" onEnter={isAuth} component={WallContainer}></Route>
          <Route path="colocswall" onEnter={isAuth} component={ColocsWallContainer}></Route>
          <Route path="colocation" component={ColocationRequestContainer}></Route>
          <Route path="token/:token" component={AuthComponent}></Route>
          <Route path="colocations/create" onEnter={isAuth} component={CreationPage}></Route>
        </Route>
      </Router>
    )
  }
}

export default App
