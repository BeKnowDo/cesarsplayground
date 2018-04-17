import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

// Components
import Header from '../../components/Header'
import UserSearch from '../../components/Forms/UserSearch'
import Results from '../../components/Results'

// Route names
import { routeNames } from '../../routes'

// Action creators
import {
  captureFormState,
  sendForm,
  clearFormState
} from '../../store/forms/forms-actions'

// Search
class Search extends PureComponent {
  render () {
    if (this.props.products.productsDisclaimer === false) {
      return <Redirect to={routeNames.DISCLAMIER.to} />
    } else {
      return (
        <Fragment>
          <Header text='Search For Existing Customer' />
          <UserSearch {...this.props} />
          <Results {...this.props.customerResults} />
        </Fragment>
      )
    }
  }
}

function mapStateToProps (state) {
  return {
    forms: { ...state.forms },
    customerResults: { ...state.customerResults },
    products: {...state.productSelections}
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: e => {
      // We're going to dynamically create objects that will
      // contain a given input field's id and value
      // We'll use the id as the 'key' for the object and assign
      // its value with the input's users' input values
      // This avoids having to manually mapping or creating these in the redux store
      // This is now one of the longest comments I've ever made
      let query = {}
      const value = e.target ? e.target.value : null
      const key = value !== null ? e.target.id : null

      if (value === '' && key !== null) {
        clearFormState(key, dispatch)
      } else if (value !== null && key !== null) {
        query[key] = value

        return captureFormState({
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
)(Search)
