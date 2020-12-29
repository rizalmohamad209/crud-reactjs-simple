import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import CreateUser from './pages/CreateUser'
import DetailsUser from './pages/DetailsUser'
import EditUser from './pages/EditUser'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <div>
       <NavbarComponent/>
      
       <BrowserRouter>
       <Route path="/" exact> <Home /></Route>
       <Route path="/edit/:id" exact><EditUser/></Route>
       <Route path="/details/:id" exact><DetailsUser/></Route>
       <Route path="/create" exact><CreateUser/></Route>
       </BrowserRouter>
      </div>
    )
  }
}
