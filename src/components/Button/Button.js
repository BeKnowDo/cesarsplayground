import React from 'react'
import PropTypes from 'prop-types'
import ScButton from './button-styles'

const Button = props => {
  return (
    <ScButton>{props.text}</ScButton>
  )
}

Button.propTypes = {
  text: PropTypes.string
}

Button.defaultProps = {
  text: 'Default Text'
}
export default Button
