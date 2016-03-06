'use strict'

import React from 'react'

export default class Project extends React.Component {
  render () {
    const content = this.props.content ? this.props.content : 'Page not found :('
    return (
      <div>
        <h1>{content}</h1>
      </div>
    )
  }
}
