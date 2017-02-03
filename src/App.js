import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import HomeContainer from './home/homeContainer'
import DashBoardContainer from './dashboard/dashboardContainer'
import WallContainer from './wall/wallContainer'
import ColocsWallContainer from './wall/colocsWallContainer'
import ColocationRequestContainer from './colocationRequest/colocationRequestContainer'
import AuthComponent from './shared/auth'
import CreationPage from './colocations/creation'

const Outer = (props) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to tipi.be</h2>
    </div>
    <div><Links />{props.children}</div>
  </div>
)
// const Home = () => <HomeContainer><HomeContainer/>;
const About = () => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>

const isAuth = (nextState, replace, callback) => {
  const token = window.localStorage.getItem('token')
  if (!token) {
    replace('about')
  }
  callback()
}

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/colocation">coloc</Link>
    <Link to="/wall">wall</Link>
    <Link to="/colocswall">colocsWall</Link>
    <Link to="/colocations/create">create</Link>
  </nav>

class App extends Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Outer}>
          <IndexRoute component={HomeContainer}></IndexRoute>
          <Route path="about" component={About}></Route>
          <Route path="contact" component={Contact}></Route>
          <Route path="dashboard" component={DashBoardContainer}></Route>
          <Route path="wall" component={WallContainer}></Route>
          <Route path="colocswall" onEnter={isAuth} component={ColocsWallContainer}></Route>
          <Route path="colocation" component={ColocationRequestContainer}></Route>
          <Route path="token/:token" component={AuthComponent}></Route>
          <Route path="colocations/create" component={CreationPage}></Route>
        </Route>
      </Router>
    )
  }
}

export default App
