import React from 'react'
import {ScSelect} from './styles'

const Select = props => {
  const options = props.options || [{
    value: 'none',
    name: 'No Options Available'
  }]

  const buildOptions = options => {
    if (options !== null) {
      return options.map(item => {
        return (
          <option key={item.value} value={item.value}>{item.name}</option>
        )
      })
    }
  }

  return (
    <ScSelect>
      {buildOptions(options)}
    </ScSelect>
  )
}

export default Select
