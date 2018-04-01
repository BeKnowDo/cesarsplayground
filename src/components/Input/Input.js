import React from 'react'
import propTypes from 'prop-types'
import ScInput from './input-styles'

const Input = props => {
  return (
    <ScInput placeholder={props.placeholder} />
  )
}

Input.defaultProps = {
  placeholder: 'search'
}

Input.propTypes = {
  placeholder: propTypes.string
}

export default Input
