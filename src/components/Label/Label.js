import React from 'react'
import PropTypes from 'prop-types'
import ScLabel from './styles'

const Label = props => {
  return (
    <ScLabel
      {...props}
    >{props.text}</ScLabel>
  )
}

Label.defaultProps = {
  text: 'Default Text'
}

Label.propTypes = {
  text: PropTypes.string,
  for: PropTypes.string
}

export default Label
