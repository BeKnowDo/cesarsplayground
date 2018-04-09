import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { ScResults, ScResultsHeader } from './results-styles'

class Results extends PureComponent {
  handleClick (e) {

  }
  buildList (list) {
    return (
      <ScResults>
        <ScResultsHeader>Existing Users</ScResultsHeader>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(list).map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    {list[key].ssn ? (
                      <Link onClick={this.handleClick} user={list[key]} to={
                        {
                          pathname: `/user-profile/${list[key].ssn}`,
                          state: {
                            ...list[key]
                          }
                        }
                      }
                      >{list[key].firstname}</Link>
                    ) : undefined}
                  </td>
                  <td>
                    {list[key].ssn ? (
                      <Link onClick={this.handleClick} user={list[key]} to={
                        {
                          pathname: `/user-profile/${list[key].ssn}`,
                          state: {
                            ...list[key]
                          }
                        }
                      }
                      >{list[key].lastname}</Link>
                    ) : undefined}
                  </td>

                </tr>
              )
            })}
          </tbody>

        </table>
      </ScResults>
    )
  }
  showEmptyMessage () {
    return (
      <ScResultsHeader>No Results</ScResultsHeader>
    )
  }
  render () {
    const list = this.props.results || null

    if (list !== null) {
      if (Object.keys(list).length <= 0) {
        console.log('temp')
      }
    }

    return (
      (list !== null) ? this.buildList(list) : this.showEmptyMessage()
    )
  }
}

export default Results
