'use strict'

import React from 'react'
//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

import ProjectItemComponent from '../ProjectItem'

import ProjectsContent from 'json!../../content/projects.json'

export default class Projects extends React.Component {

  constructor () {
    super()

    this.state = {
      selectedFilter: ProjectsContent.categories[0]
    }
  }

  setFilter (category, e) {
    e.preventDefault()
    this.setState({selectedFilter: category})
  }

  render () {
    const filters = ProjectsContent.categories.map((category) => {
      const activeFilter = category === this.state.selectedFilter ? 'active' : ''
      
      return (
        <dd key={category} className={activeFilter}>
          <a href="#" onClick={this.setFilter.bind(this, category)}>{category}</a>
        </dd>
      )
    })

    const projectItems = ProjectsContent.projects.filter((project) => {
      if(this.state.selectedFilter === 'all') {
        return true
      } else {
        return this.state.selectedFilter === project.category
      }
    }).map((project) => {
      return (
        <ProjectItemComponent key={project.id} content={project} />
      )
    })

    return (
        <div className="home">
          <dl className="sub-nav">
            <dt>Filter:</dt>
            { filters }
          </dl>
          <ul className='small-block-grid-1 medium-block-grid-3 large-block-grid-4'>
            { projectItems }
          </ul>
        </div>
      )
  }
}
