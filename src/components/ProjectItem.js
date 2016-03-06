'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class ProjectItem extends React.Component {

  render () {
    let url = '/project/' + this.props.content.id
    let icon = 'fi-heart'

    switch (this.props.content.category) {
      case 'animation':
        icon = 'fi-video'
        break
      case 'illustration':
        icon = 'fi-pencil'
        break
      case 'storyboarding':
        icon = 'fi-book'
        break
    }
    icon = icon + ' project-item__link__overlay__icon'

    let projectTypeIcon = (
      <i className={icon}></i>
    )

    return (
      <li key={this.props.content.id} className='project-item'>
        <Link className='project-item__link' to={url}>
          <img className='project-item__link__image' src={this.props.content.thumbnail} />

          <div className='project-item__link__overlay'>
            <h5>{this.props.content.title}</h5>
            {projectTypeIcon}
          </div>
        </Link>
      </li>
    )
  }
}

