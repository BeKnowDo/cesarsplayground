import React, {Fragment} from 'react'
import Button from '../../components/Button'

const UserProfile = props => {
  const user = props.location.state ? props.location.state : null

  if (user) {
    const mailing = user.address.mailing ? user.address.mailing : null
    const primary = user.address.primary ? user.address.primary : null

    return (
      <Fragment>
        <div>
          First Name: {user.firstname}
        </div>
        <div>
          Last Name: {user.lastname}
        </div>
        <div>
          SSN: {user.ssn}
        </div>
        <div>
          Salary: {user.salary}
        </div>
        <div>
          Employed: {user.employment ? 'Yes' : 'No'}
        </div>
        <div>
          <h2>Mailing Address Details</h2>
          <p>Street: {mailing.street}</p>
          <p>City: {mailing.city}</p>
          <p>State: {mailing.state}</p>
          <p>Zip Code:{mailing.zipcode}</p>
        </div>
        <div>
          <h2>Primary Address Details</h2>
          <p>Street: {primary.street}</p>
          <p>City: {primary.city}</p>
          <p>State: {primary.state}</p>
          <p>Zip Code:{primary.zipcode}</p>
        </div>

        <Button continue text='Add a Companion' />
        <Button negative='true' text='Continue without Companion' />
        <Button text='Go Back'
          onClick={props.history.goBack}
        >Back</Button>
      </Fragment>
    )
  } else {
    return (
      <h2>That's embarassing...we can't find the page you requested</h2>
    )
  }
}

export default UserProfile
