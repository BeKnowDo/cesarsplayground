import React from 'react'
import PropTypes from 'prop-types'
import ScHeader from './styles'

const Header = props => {
  return (
    <ScHeader>
      { props.text }
    </ScHeader>
  )
}

Header.defaultProps = {
  text: 'Hi...this is a header section'
}

Header.propTypes = {
  text: PropTypes.string
}

export default Header
