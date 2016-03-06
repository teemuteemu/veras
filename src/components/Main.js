'use strict'

require('normalize.css')
require('../scss/main.scss')
require('../scss/foundation-icons/foundation-icons.css')

import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import MenuComponent from './Menu.js'
import HomeComponent from './pages/Home.js'
import ProjectsComponent from './pages/Projects.js'
import ProjectComponent from './pages/Project.js'
import ContactComponent from './pages/Contact.js'
import NotFoundComponent from './NotFoundComponent.js'

import MenuContent from 'json!../content/menu.json'

class App extends React.Component {
  render () {
    const pathname = this.props.location.pathname
    const content = this.props.children ? this.props.children : <HomeComponent />

    return (
      <div className='app'>
        <MenuComponent content={MenuContent} activeItem={pathname}/>
        <div className='row'>
          {content}
        </div>
      </div>
    )
  }
}

export default class RouteHandler extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='projects' component={ProjectsComponent}/>
          <Route path='contact' component={ContactComponent}/>
          <Route path='project/:id' component={ProjectComponent}/>
          <Route path='*' component={NotFoundComponent}/>
        </Route>
      </Router>
    )
  }
}
