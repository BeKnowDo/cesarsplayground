import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { ScNav } from './styles'

const Navigation = props => {
  return (
    <ScNav>
      <ul>
        {
          routes
          // Make sure each nav item has a name property
            .filter(item => {
              if (item.name) {
                return item
              }
              return false
            })

            // iterate through each nav item and create react-router link
            .map((item) => {
              return (
                <li key={item.name}>
                  <Link to={
                    {
                      pathname: item.path
                    }
                  }>
                    {item.name}
                  </Link>
                </li>
              )
            })
        }
      </ul>
    </ScNav>
  )
}

export default Navigation
