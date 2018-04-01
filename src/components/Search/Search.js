import React, { PureComponent } from 'react'

import ScForm from './search-styles'
import Input from '../Input'
import Button from '../Button'
import Label from '../Label'

class Search extends PureComponent {
  submit (e) {
    e.preventDefault()

  }

  handleChange(e) {
    console.log(e.target.id)
  }

  render() {
    return (
      <ScForm onSubmit={this.submit} >
        <div>
          <Label for='firstName' text='First Name'/>
          <Input id='firstName' name='firstName' placeholder='First Name' onChange={this.handleChange} />
        </div>
        <div>
          <Label for='lastName' text='Last Name' />
          <Input id='lastName' name='lastName' placeholder='Last Name' onChange={this.handleChange} />
        </div>
        <Button text='Search' />
      </ScForm>
    )
  }
}

export default Search;

