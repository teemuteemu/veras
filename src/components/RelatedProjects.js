'use strict'

import React from 'react'
import ProjectItemComponent from './ProjectItem.js'

export default class RelatedProjects extends React.Component {

  render () {
    let category = this.props.content[0].category

    return (
      <div>
        <h5>More {category}s...</h5>
        <ul className='small-block-grid-2 medium-block-grid-4 large-block-grid-6'>
          {
            this.props.content.map((project) => {
              return (
                <ProjectItemComponent key={project.id} content={project} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
