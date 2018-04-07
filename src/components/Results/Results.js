import React, { PureComponent } from 'react'
import ScResults from './results-styles'

class Results extends PureComponent {
  buildList (list) {
    return (
      <ScResults>
        {list.map((item, key) => {
          return (
            <li key={key}>
              {item.firstname}
            </li>
          )
        })}
      </ScResults>
    )
  }
  render () {
    const list = this.props.results || null
    return (
      (list !== null) ? this.buildList(list) : null
    )
  }
}

export default Results
