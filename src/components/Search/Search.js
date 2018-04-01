import React from 'react'

import ScForm from './search-styles'
import Input from '../Input'
import Button from '../Button'

const Search = props => {
  return (
    <ScForm>
      <Input placeholder='First Name' />
      <Input placeholder='Last Name' />
      <Button text='Search' />
    </ScForm>
  )
}

export default Search
