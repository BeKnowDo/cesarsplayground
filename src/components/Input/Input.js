import React from 'react'
import PropTypes from 'prop-types'
import ScInput from './input-styles'

const Input = props => {
  return (
    <ScInput {...props} />
  )
}

Input.defaultProps = {
  placeholder: 'search'
}

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
