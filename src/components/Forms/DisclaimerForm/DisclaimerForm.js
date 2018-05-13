import React from 'react'
import ScForm from '../index'
import Checkbox from '../../Checkbox'

const DisclaimerForm = props => {
  return (
    <ScForm>
      <h3>Please accept the following disclaimer:</h3>
      <div>
        <Checkbox
          type='checkbox'
          id='disclaimer'
          defaultChecked={props.disclaimer}
          onChange={props.onChange}
        />
        <label htmlFor='disclaimer'>
          I agree to use this application responsibly and promise to not use it malicoiusly.
        </label>
      </div>
    </ScForm>
  )
}

export default DisclaimerForm
