import React from 'react'
import { ScForm } from '../index'
const DisclaimerForm = props => {
  return (
    <ScForm>
      <h2>Please accept the following disclaimer:</h2>
      <p>
        <input type='checkbox' id='disclaimer' />
        <label htmlFor='disclaimer'>
          I agree to use this application responsibly and promise to not use it malicoiusly.
        </label>
      </p>
    </ScForm>
  )
}

export default DisclaimerForm
