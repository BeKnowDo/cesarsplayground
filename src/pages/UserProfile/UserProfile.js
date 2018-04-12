import React, { Fragment } from 'react'
import Button from '../../components/Button'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Header from '../../components/Header'

const UserProfile = props => {
  const user = props.location.state ? props.location.state : null

  if (user) {
    const mailing = user.address.mailing ? user.address.mailing : null
    const primary = user.address.primary ? user.address.primary : null

    return (
      <Fragment>
        <Header text='User Details' />

        <div>
          <Label text='First Name' />
          <Input placeholder={user.firstname} defaultValue={user.firstname} />
        </div>

        <div>
          <Label text='Last Name' />
          <Input placeholder={user.lastname} defaultValue={user.lastname} />
        </div>

        <div>
          <Label text='SSN' />
          <Input type='ssn' placeholder={user.ssn} defaultValue={user.ssn} />
        </div>

        <div>
          <Label text='Employment Status' />
          <select>
            <option value='employeed'>{user.employment ? 'Employed' : 'Unknown'}</option>
          </select>
        </div>

        <Header text='Primary Address Details' />

        <div>
          <Label text='Street' />
          <Input placeholder={primary.street} defaultValue={primary.street} />
        </div>

        <div>
          <Label text='City' />
          <Input placeholder={primary.city} defaultValue={primary.city} />
        </div>

        <div>
          <Label text='State' />
          <select>
            <option value={primary.state}>{primary.state}</option>
          </select>
        </div>

        <div>
          <Label text='Zip Code' />
          <Input placeholder={primary.zipcode} defaultValue={primary.zipcode} />
        </div>

        <div>
          <Header text='Mailing Address Details' />
          <p>
            <Label text='Street' />
            <Input placeholder={mailing.street} defaultValue={mailing.street} />
          </p>
        </div>

        <div>
          <Label text='City' />
          <Input placeholder={mailing.city} defaultValue={mailing.city} />
        </div>

        <div>
          <Label text='State' />
          <select>
            <option value={mailing.state}>{mailing.state}</option>
          </select>
        </div>

        <div>
          <Label text='Zip Code' />
          <Input placeholder={mailing.zipcode} defaultValue={mailing.zipcode} />
        </div>

        <Button continue text='Add a Companion' />
        <Button negative='true' text='Continue without Companion' />
        <Button text='Go Back' onClick={props.history.goBack} />
      </Fragment>
    )
  } else {
    return (
      <h2>That's embarassing...we can't find the page you requested</h2>
    )
  }
}

export default UserProfile
