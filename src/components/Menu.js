'use strict'

import React from 'react'

import { Link } from 'react-router'

export default class Menu extends React.Component {
  render () {
    const navItems = this.props.content.pages.map((item) => {
      const isActive = item.path === this.props.activeItem
      const className = isActive ? 'active' : ''

      return (
        <li className={className} key={item.path}>
          <Link to={item.path} activeClassName='active'>
            {item.title}
          </Link>
        </li>
      )
    })

    return (
      <div className='menu'>
        <nav className='top-bar'>
          <ul className='title-area'>
            <li className='name'>
              <h1>
                <Link to='/'>
                  {this.props.content.title}
                </Link>
              </h1>
            </li>
          </ul>
          <section className='top-bar-section'>
            <ul className='right'>
              {navItems}
            </ul>
          </section>
        </nav>
      </div>
    )
  }
}
