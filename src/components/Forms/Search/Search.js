import React, { PureComponent } from 'react'

// Action creators
import ScForm from './search-styles'
import Input from '../../Input'
import Button from '../../Button'
import Label from '../../Label'

class Search extends PureComponent {
  render () {
    const forms = this.props.forms

    return (
      <ScForm onSubmit={(e) => {
        this.props.handleSubmit(e, forms)
      }}>
        <div>
          <Label
            for='firstname'
            text='First Name'
          />
          <Input
            id='firstname'
            placeholder='First Name'
            onChange={this.props.onChange}
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
            onChange={this.props.onChange}
          />
        </div>
        <Button text='Search' />
      </ScForm>
    )
  }
}

export default Search
