import React, { PureComponent } from 'react'

// Action creators
import ScForm from './search-styles'
import Input from '../../Input'
import Button from '../../Button'
import Label from '../../Label'

class Search extends PureComponent {
  render () {
    const form = this.props.form

    return (
      <ScForm onSubmit={(e) => {
        this.props.handleSubmit(e, form)
      }}>
        <div>
          <Label
            for='firstname'
            text='First Name'
          />
          <Input
            id='firstname'
            placeholder='First Name'
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <Label
            for='lastname'
            text='Last Name'
          />
          <Input
            id='lastname'
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
