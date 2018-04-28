import React from 'react'
import PropTypes from 'prop-types'
import ScCheckbox from './styles'

const Checkbox = props => {
  return (
    <ScCheckbox {...props} />
  )
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  type: PropTypes.string
}

Checkbox.defaultProps = {
  defaultChecked: true,
  type: 'checkbox'
}
export default Checkbox
