import React from 'react'
import propTypes from 'prop-types'
import ScButton from './button-styles'

const Button = props => {
  return (
    <ScButton>{props.text}</ScButton>
  )
}

Button.propTypes = {
  text: propTypes.string
}

Button.defaultProps = {
  text: 'Default Text'
}
export default Button
