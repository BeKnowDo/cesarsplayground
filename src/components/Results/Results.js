import React, { PureComponent } from 'react'
import ScResults from './results-styles'

class Results extends PureComponent {
  buildList (props) {
    return (
      <ScResults>
        testing
      </ScResults>
    )
  }
  render () {
    return (
      (this.props.results > 0) ? this.buildList(this.props) : null
    )
  }
}

export default Results
