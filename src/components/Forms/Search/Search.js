import React, { PureComponent } from 'react'

// Action creators
import ScForm from './search-styles'
import Input from '../../Input'
import Button from '../../Button'
import Label from '../../Label'

class Search extends PureComponent {
  render () {
    const forms = this.props.forms

    const isEnabled = Object.keys(forms.form).length > 0

    const formFields = [
      {
        id: 'firstname',
        placeholder: 'First Name',
        onChange: this.props.onChange
      },
      {
        id: 'lastname',
        placeholder: 'Last Name',
        onChange: this.props.onChange
      }
    ]

    return (
      <ScForm onSubmit={(e) => {
        this.props.handleSubmit(e, forms)
      }}>
        {formFields.map((item, index) => {
          return (
            <div key={index}>
              <Label
                for={item.id}
                text={item.placeholder}
              />
              <Input
                id={item.id}
                placeholder={item.placeholder}
                onChange={item.onChange}
              />
            </div>
          )
        })}

        <Button disabled={!isEnabled} text='Search' />
        <Button continue text='Continue' />
      </ScForm>
    )
  }
}

export default Search
