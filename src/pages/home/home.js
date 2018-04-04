import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Search from '../../components/Search'

// Action creators
import {
  captureFormState,
  sendForm
} from '../../store/search/search-actions'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <Header text='Search Users' />
        <Search {...this.props} />
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: { ...state.forms }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleChange: e => {
      // We're going to dynamically create objects that will
      // contain a given input field's id and value
      // We'll use the id as the 'key' for the object and assign
      // its value with the input's users' input values
      // This avoids having to manually mapping or creating these in the redux store
      // This is now one of the longest comments I've ever made
      let query = {}
      const values = e.target.value ? e.target.value : null
      const key = values ? e.target.id : null

      if (values !== null && key !== null) {
        query[key] = values

        captureFormState({
          ...query
        }, dispatch)
      }
    },
    handleSubmit: (e, form) => {
      e.preventDefault()
      sendForm(form, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
