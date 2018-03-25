import React from 'react'
import PropTypes from 'prop-types'
import scHeader from './header-styles'

const Header = () => {
  return (
    <scHeader>
      { this.props.text }
    </scHeader>
  )
}

Header.defaultProps = {
  text: 'Hi...this is a header section'
}

Header.PropTypes = {
  text: PropTypes.string
}

export default Header
