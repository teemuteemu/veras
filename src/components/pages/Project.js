'use strict'

import React from 'react'

import RelatedProjectsComponent from '../RelatedProjects'
import NotFoundComponent from '../NotFoundComponent'

import ProjectsContent from 'json!../../content/projects.json'

export default class Project extends React.Component {

  render () {
    const id = this.props.params.id

    let project = ProjectsContent.projects.filter((proj) => {
      return proj.id === id
    })

    if(project.length === 1) {
      project = project[0]
    } else {
      return (
        <NotFoundComponent content="Project not found!" />
      )
    }

    const relatedProjects = ProjectsContent.projects.filter((proj) => {
      return proj.category === project.category && proj.id !== project.id
    })

    return (
      <div>
        <h2>{ project.title }</h2>
        <img src={ project.thumbnail } />
        <p>{ project.about }</p>
        {
          function() {
            if(relatedProjects.length > 0) {
              return (
                <RelatedProjectsComponent content={relatedProjects} />
              )
            }
          }.call(this)
        }
      </div>
    )
  }
}
