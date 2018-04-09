import React, { PureComponent } from 'react'

// Action creators
import ScForm from './search-styles'
import Input from '../../Input'
import Button from '../../Button'
import Label from '../../Label'
import {userSearch} from '../../../forms/user-search'

class Search extends PureComponent {
  render () {
    const forms = this.props.forms

    const isEnabled = Object.keys(forms.form).length > 0

    return (
      <ScForm onSubmit={(e) => {
        this.props.handleSubmit(e, forms)
      }}>
        {userSearch.map((item, index) => {
          return (
            <div key={index}>
              <Label
                for={item.id}
                text={item.placeholder}
              />
              <Input
                id={item.id}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
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
