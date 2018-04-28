import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { ScResults, ScResultsHeader } from './styles'

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
    const initialSearch = this.props.initialSearch
    const list = this.props.users || null

    if (list !== null) {
      if (Object.keys(list).length <= 0) {
        return this.showEmptyMessage()
      }
    }

    return (
      (list !== null && initialSearch !== false) ? this.buildList(list) : this.showEmptyMessage()
    )
  }
}

export default Results
