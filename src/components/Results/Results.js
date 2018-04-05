import React, { PureComponent } from 'react'
import ScResults from './results-styles'

class Results extends PureComponent {
  buildList(list) {
    return (
      <ScResults>
        {list.map((item, key) => {
          console.log(item)
          return (
            <li key={key}>
              {item.firstname}
            </li>
          )
        })}
      </ScResults>
    )
  }
  render() {
    const list = this.props.results
    console.log(list)
    return (
      (list !== undefined) ? this.buildList(list) : null
    )
  }
}

export default Results
