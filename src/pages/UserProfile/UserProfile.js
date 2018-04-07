import React from 'react'
import propTypes from 'prop-types'

const UserProfile = props => {
  return (
    <div>
      User Profile
    </div>
  )
}

propTypes.defaultProps = {
  user: null
}

UserProfile.propTypes = {
  user: propTypes.array
}

export default UserProfile
