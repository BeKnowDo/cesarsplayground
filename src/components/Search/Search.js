import React, { PureComponent } from 'react'

// Action creators
import ScForm from './search-styles'
import Input from '../Input'
import Button from '../Button'
import Label from '../Label'

class Search extends PureComponent {
  render () {
    const form = this.props.form
    console.log(form)

    return (
      <ScForm onSubmit={(e) => {
        this.props.handleSubmit(e, form)
      }}>
        <div>
          <Label
            for='firstName'
            text='First Name'
          />
          <Input
            id='firstName'
            placeholder='First Name'
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <Label
            for='lastName'
            text='Last Name'
          />
          <Input
            id='lastName'
            placeholder='Last Name'
            onChange={this.props.handleChange}
          />
        </div>
        <Button text='Search' />
      </ScForm>
    )
  }
}

export default Search
