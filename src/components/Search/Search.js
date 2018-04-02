import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Action creators
import * as searchActionCreator from '../../store/search/search-actions'
import ScForm from './search-styles'
import Input from '../Input'
import Button from '../Button'
import Label from '../Label'

console.log(searchActionCreator)
class Search extends Component {
  constructor (props) {
    super(props)
    const { dispatch } = props

    // Bind action creators
    this.boundActionCreators = bindActionCreators(searchActionCreator, dispatch)
  }
  submit (e, props) {
    e.preventDefault()
    console.log(props)
    // let { dispatch } = this.props

    // console.log(dispatch)
    // Prepare our payload
    // const key = e.target.id
    // const value = e.target.value
    // const searchField = {}
    // searchField[key] = value
    // let { dispatch } = this.props

    // // Pass payload to action
    // let search = searchActionCreator.search(searchField, dispatch)

    // console.log(search)

    // // Call dispatch
    // dispatch(search)
  }

  handleChange (e) {
    // Prepare our payload
    const key = e.target.id
    const value = e.target.value
    const searchField = {}
    searchField[key] = value
    let { dispatch } = this.props

    // Pass payload to action
    let search = searchActionCreator.search(searchField, dispatch)

    console.log(search)

    // Call dispatch
    dispatch(search)
  }

  render () {
    return (
      <ScForm onSubmit={this.submit} >
        <div>
          <Label for='firstName' text='First Name' />
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

export default connect()(Search)
